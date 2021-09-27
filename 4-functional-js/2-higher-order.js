/*
the .reduce function takes three arguments:

1. a "reducer" function, which takes two arguments - an accumulator and the next value from the array - and returns a single value. This function will be applied to each value in the array, with the accumulator storing the reduced value so far.
2. an initial value, passed to the first call of the reducer function
3. the array to reduce
*/

let ex1 = [5, 10, 15].map(double)

function double(number) {
  return number * 2
}

/*
First-class functions - Functions that can be passed around as values.
- the function `double`

Higher-order functions - Functions that take other functions as input/output.
- .map
*/

console.log(ex1)

/**************************************************/
/**************************************************/
/**************************************************/

// .reduce with loop

function reduce1(fn, init, arr) {
  for (let element of arr) {
    init = fn(init, element)
  }

  return init
}

let sum1 = reduce1(
  (accumulator, value) => {
    return accumulator + value
  },
  0,
  [1, 2, 3, 4, 5]
)

console.log(sum1)

/**************************************************/
/**************************************************/
/**************************************************/

// .reduce without loop
function reduce(reducerFn, initialValue, array) {
  if (length(array) === 0) return initialValue;

  const newInitialValue = reducerFn(initialValue, head(array));

  return reduce(reducerFn, newInitialValue, tail(array));
}

function length(array) {
  return array.length;
}

function head(array) {
  return array[0];
}

function tail(array) {
  return array.slice(1);
}

let sum = reduce(
  (accumulator, value) => {
    return accumulator + value
  },
  0,
  [1, 2, 3, 4, 5]
)

console.log(sum)