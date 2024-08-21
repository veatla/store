import { CreateStoreType } from "../types/store";
import { assign } from "../utils/assign";
import { is_setter_fn } from "../utils/is_setter_fn";

export default function createStore<T>(initial_state?: T): CreateStoreType<T> {
  const get = <Ouput = T>(selector?: (store: T) => Ouput): Ouput => {
    if (selector) return selector(state.value);
    else return state.value as unknown as Ouput;
  };
  const state: CreateStoreType<T> = {
    get,
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
