import { is_array } from "../utils/is_equal_types";
import { is_primitive_type } from "../utils/is_primitive";

type ListenerFnType = () => void;
export type StoreSetValue<T> = T | Partial<T>;
export type StoreSetterFn<T> = (store: T) => StoreSetValue<T>;

interface CreateStoreType<T> {
  value: T;
  set: <Value extends StoreSetValue<T> | StoreSetterFn<T>>(value: Value, push?: true) => void;
  get: () => T;
  listeners: Set<ListenerFnType>;
  subscribe: (cb: ListenerFnType) => () => void;
  update: () => void;
}

const is_setter_fn = <T>(value: unknown): value is StoreSetterFn<T> => {
  if (typeof value === "function") return true;
  else return false;
};

const assign = <T>(state: T, value: StoreSetValue<T>) => {
  if (is_primitive_type(state) || is_array(value)) {
    return value as T;
  }

  return {
    ...state,
    ...value,
  };
};

export default function createStore<T>(initial_state?: T): CreateStoreType<T> {
  const state: CreateStoreType<T> = {
    get() {
      return state.value;
    },
    set(value, push = true) {
      const is_fn = is_setter_fn<T>(value);
      const new_value = is_fn ? value(state.value) : value;
      state.value = assign(state.value, new_value as T);

      if (push) state.update();
    },
    listeners: new Set(),
    subscribe(fn) {
      state.listeners.add(fn);
      return () => {
        state.listeners.delete(fn);
      };
    },
    update() {
      state.listeners.forEach((cb) => cb());
    },
    value: initial_state as T,
  };

  return state;
}
