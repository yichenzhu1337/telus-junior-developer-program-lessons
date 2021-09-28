/**
 * Pattern/Rules for converting a loop into a recurisve-like function
 * 1. think of a base case; usually its array.length === 0
 * 2. recursive step
 *  1. get a head
 *  2. get a tail
 *  3. recurse on the tail
 */

/****** Example 1 ******/
/******************************************/
/******************************************/
/******************************************/

// 1. printing through a list - iterative method
function printNumbers(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
  }
}

printNumbers([10, 60, 100, 55, 46])

// 2. recursive method
function printNumbers2(numbers) {
  if (numbers.length === 0) {
    return
  }

  // the first element of numbers
  let head = numbers[0]

  // do some action here
  console.log(head)

  // the rest of the numbers in the array
  let tail = numbers.slice(1)

  // recurse on the tail
  printNumbers2(tail)
}

printNumbers2([10, 60, 100, 55, 46])

/******************************************/
/******************************************/
/******************************************/
/***** Example 2 *****/

// 2.1
function sum(numbers) {
  let total = 0
  for (i = 0; i < numbers.length; i++) {
    total += numbers[i]
  }
  return total
}

sum([0, 1, 2, 3, 4]) // 10

// 2.2
function sum(numbers) {
  if (numbers.length === 0) {
    // base case
    return 0
  } else {
    // recursive case
    return numbers[0] + sum(numbers.slice(1))
  }
}

sum([0, 1, 2, 3, 4]) // 10
