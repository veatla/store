import { is_non_nullable_obj } from "./is_object";

/**
 * @param {any} o1
 * @param {any} o2
 * @return {boolean}
 */
export default function is_equal(o1: unknown, o2: unknown): boolean {
  // Check with strict equality
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality#description
  if (o1 === o2) return true;

  // if both values are array
  if (Array.isArray(o1) && Array.isArray(o2)) {
    // first of all we check the length of arrays
    // if it's not equal return false
    if (o1.length !== o2.length) return false;

    // otherwise go through each value in array and compare
    for (let i = 0; i < o2.length; i++) {
      if (!is_equal(o1[i], o2[i])) {
        // some value are not equal return false
        return false;
      }
    }
    return true;
  }

  // check if both are the objects
  if (is_non_nullable_obj(o1) && is_non_nullable_obj(o2)) {
    const firstKeys = Object.keys(o1);
    const secondKeys = Object.keys(o2);

    // compare length of keys
    if (firstKeys.length !== secondKeys.length) return false;

    // go through every key values and check them
    for (let i = 0; firstKeys.length > i; i++) {
      const key = firstKeys[i] as keyof typeof o1;
      if (!is_equal(o1[key], o2[key])) {
        // if somevalue is not equal return false
        return false;
      }
    }
    // otherwise it's equal
    return true;
  }


  // if values are not equal return false;
  // it's called when some value is array and second wasn't
  // or first one is obj and second array, etc.
  return false;
}

