/*
Write a function filteredOdds
Write a function that takes a list and filters out odds
Takes one parameter, a list of numbers
Returns a list with only even numbers remaining
*/

function filteredOdds(arr) {
  return arr.filter((num) => num % 2 === 0)
}

/*
Write a function filterState
Takes two parameters
    - List of people objects that have a name and state
    - String of the state you want to filter for
Returns a list of people objects in the same order
    that are filtered
*/

function filterState(arr, state) {
  return arr.filter((input) => input.state === state)
}

/*
Write a function showOutOfCADevs
Takes as parameter a list of people objects
    - Filters out people from California
    - Pulls the names out of the objects
    - Uppercases the names
    - Uses reduce to return comma separated list
*/

function showOutOfCADevs(arr) {
  return arr.filter(input => input.state != 'CA')
      .map(obj => obj.name.toUpperCase())
      .reduce((name, i) => name + ', ' + i)
}

/*
Write function myFilter that implements filter
Takes two parameters:
    - A list that will be filtered
    - A function that returns true if it passes a test
        and false if fails
Returns a filtered list
*/
function myFilter(list, fn) {
  let filtered = [];
  for (let i = 0; i < list.length; i++) {
    if (fn(list[i])) {
      filtered.push(list[i])
    }
  }
  return filtered;
}
