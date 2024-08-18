/**
 * Function to check if value is and object
 * @param value value to check
 * @returns true if typeof value is object and it's not null
 */
export const is_object = (value: unknown): value is object => {
  if (typeof value !== "object") return false;
  if (!value) return false;
  return true;
};

/**
 * Function to check if value is non nullable any object
 * @param value unknown value to check
 * @returns true if value is an object
 */
export const is_non_nullable_obj = (value: unknown): value is NonNullable<unknown> => {
  if (!is_object(value)) return false;
  return true;
};
