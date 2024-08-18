import { useLayoutEffect, useState } from "react";
import { CreateStoreType } from "./types/store";
import is_equal from "./utils/is_equal";

export function withReact<Store extends CreateStoreType<any>>(store: Store) {
  const fn = <S = Store["value"]>(
    selector: (store: Store["value"]) => S = (store) => store as S
  ): S => {
    const [state, set_state] = useState(selector(store.value));

    useLayoutEffect(() => {
      return store.subscribe(() => {
        const current = selector(store.get());
        if (!is_equal(state, current)) set_state(current);
      });
    }, []);

    return state;
  };
  fn.setState = store.set as Store["set"];
  fn.getState = store.get as Store["get"];
  fn.update = store.update;
  return fn;
}