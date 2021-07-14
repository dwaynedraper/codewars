let array = ['d', 'w', 'a', 'y', 'n', 'e'];

let reverseArray2 = function(array) {
  // Your code here
  let index = 0;
  // This can also be done in a slightly more verbose manner using a left and right index

  while(index < array.length / 2) {
    [array[index], array[array.length - index - 1]] = [array[array.length - index - 1], array[index]]
    index++;
  }
  return array;
}