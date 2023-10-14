/* exported capitalize */
function capitalize(string) {
  const capString =
    string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  return capString;
}
