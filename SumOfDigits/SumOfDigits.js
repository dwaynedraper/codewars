//* Original implementation
function digital_root(n) {
  // ...
  debugger;
  let str = n.toString();
  let result = 0
  while (str.length > 0) {
    result += parseInt(str[str.length - 1]);
    str = str.slice(0, -1) //returns string with last character removed
  }
  if (result.toString().length > 1) {
    return digital_root(result);
  }
  return result
}

//* Option 2
function digital_root_2(n) {
  if (n < 10) return n;
  
  return digital_root(
    n.toString().split('').reduce(function(acc, d) { return acc + +d; }, 0));
}

//* Option 3
//* Copied from CodeWars. How and why does this work?!
function digital_root_3(n) {
  return (n - 1) % 9 + 1;
}