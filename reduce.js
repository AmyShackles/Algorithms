/*
Write function addTogether
Takes in a list
Returns the result of that list added together
*/

const add = (a, b) => a + b;
const addTogether = input => input.reduce(add);

/*
Write function concatenateStringsWithSpaces
Takes in a list of strings
Returns a concatenated string
*/

const concat = (a, b) => a + ' ' + b;
const concatenateStringsWithSpaces = input => input.reduce(concat);

/*
Writes function squaresAndSubtracts
Map over list, square each value, subtract in order
*/

const squares = num => Math.pow(num, 2);
const subtract = (a, b) => a - b;
const squaresAndSubtracts = input => input.map(squares).reduce(subtract);

/*
Writes function myReduce
Implement reduce
Takes three parameters:
    - List being operated on
    - Function to apply reduction
    - Seed value to start reduce
*/

function myReduce(arr, fn, seed) {
  let result = seed;
  for (let i = 0; i < arr.length; i++) {
    result = fn(result, arr[i]);
  }
  return result;
}