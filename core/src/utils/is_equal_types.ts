import { is_function } from "./is_function";
import { is_object } from "./is_object";

export function is_array(value: unknown): value is unknown[] {
  if (typeof value !== "object") return false;
  if (!value) return false;
  if (!Array.isArray(value)) return false;
  return true;
}

export function is_equal_by_types(o1: unknown, o2: unknown): boolean {
  if (o1 === null && o2 === null) return true;
  if (is_object(o1) && is_object(o2)) {
    if (is_array(o1) && is_array(o2)) return true;
    if (is_function(o1) && is_function(o2)) return true;
    return true;
  }
  if (typeof o1 === typeof o2) return true;

  return false;
}
