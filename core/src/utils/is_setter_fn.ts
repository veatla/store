import { StoreSetterFn } from "../types/store";

export const is_setter_fn = <T>(value: unknown): value is StoreSetterFn<T> => {
  if (typeof value === "function") return true;
  else return false;
};

