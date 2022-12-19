/* eslint-disable require-jsdoc */
export default function concatArrays(array1, array2, string) {
  const newarr = [...array1, ...array2, ...string];
  return newarr;
}
