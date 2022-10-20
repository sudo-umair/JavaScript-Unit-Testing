export function transformToNumber(value) {
  if (!value) {
    throw new Error('No value passed in the function');
  }
  return +value;
}
