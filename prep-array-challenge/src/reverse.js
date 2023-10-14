/* exported reverse */
function reverse(array) {
  const output = [];
  while (array.length) {
    output.push(array.pop());
  }
  return output;
}
