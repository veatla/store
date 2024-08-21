import { StoreSetValue } from "../types/store";
import { is_array } from "./is_equal_types";
import { is_primitive_type } from "./is_primitive";

export const assign = <T>(state: T, value: StoreSetValue<T>) => {
  if (is_primitive_type(state) || is_array(value)) {
    return value as T;
  }

  return {
    ...state,
    ...value,
  };
};
