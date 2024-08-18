import { is_function } from "./is_function";
import { is_object } from "./is_object";

export type Primitives =
  | string
  | number
  | bigint
  | boolean
  | undefined
  | symbol
  | null;

export function is_primitive_type(value: unknown): value is Primitives {
  if (value === null) return true;
  if (is_object(value) || is_function(value)) {
    return false;
  }
  return true;
}
