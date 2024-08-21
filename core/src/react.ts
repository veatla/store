import { useSyncExternalStore } from "react";
import { CreateStoreType } from "./types/store";

export function withReact<Store extends CreateStoreType<any>>(store: Store) {
  const fn = <Ouput = Store['value']>(selector?: (store: Store['value']) => Ouput): Ouput => {
    const state = useSyncExternalStore(store.subscribe, () => store.get(selector));
    return state;
  };
  fn.set = store.set as Store["set"];
  fn.get = store.get as Store["get"];
  fn.update = store.update;
  return fn;
}
