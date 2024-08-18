// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export const is_function = (value: unknown): value is Function => {
    if (typeof value !== 'function') return false;
    else return true;
}