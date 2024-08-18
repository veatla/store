import { CreateStoreType } from "./types/store";
import is_equal from "./utils/is_equal";
import { Writable, writable } from "svelte/store";
import { onMount } from "svelte";

export function withSvelte<Store extends CreateStoreType<any>>(store: Store) {
  const fn = <S = Store["value"]>(
    selector: (store: Store["value"]) => S = (store) => store as S
  ): Writable<S> => {
    const state = writable(selector(store.value));
    onMount(() => {
      return store.subscribe(() => {
        const current = selector(store.get());
        if (!is_equal(state, current)) state.set(current);
      });
    });

    return state;
  };
  fn.setState = store.set as Store["set"];
  fn.getState = store.get as Store["get"];
  fn.update = store.update;
  return fn;
}
