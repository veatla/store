export type StoreSelector<Store> = <Ouput>(store?: Store) => Ouput;
export type StoreListenerFnType = () => void;
export type StoreSetValue<T> = T | Partial<T>;
export type StoreSetterFn<T> = (store: T) => StoreSetValue<T>;

export interface CreateStoreType<T = unknown> {
  value: T;
  set: (
    value: StoreSetValue<T> | StoreSetterFn<T>,
    push?: true
  ) => void;
  get: <Ouput = T>(selector?: (store: T) => Ouput) => Ouput;
  listeners: Set<StoreListenerFnType>;
  subscribe: (cb: StoreListenerFnType) => () => void;
  update: () => void;
}
