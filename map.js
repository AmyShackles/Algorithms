/*
Write a function doubleEach
Takes in an array
Returns array with each element doubled
*/

const double = num => num * 2;
const doubleEach = input => input.map(double);

/*
Write a function squareEach
Takes in an array
Returns array with each element squared
*/

const square = num => Math.pow(num, 2);
const squareEach = input => input.map(square);

/*
Write a function doubleAndSquareEach
Takes in array
Returns array with each element doubled, then squared
*/

const doubleAndSquareEach = input => input.map(double).map(square);

/*
Write a function myMap
Simulate behavior of map method on Array prototype
Takes two parameters:
    - Array to map over
    - Function being called on each element
Returns array after mapping
*/

const myMap = (array, func) => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(func(array[i]))
  }
  return result;
}