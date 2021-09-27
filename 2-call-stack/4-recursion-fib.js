/**
 * 1 2 3 4 5 6 7  8
 * 1 1 2 3 5 8 13 21
 *
 */
const fib = (n) => {
  if (n <= 0) {
    // edge case
    return 0
  }

  if (n <= 2) {
    // base cases
    return 1
  }

  let first = fib(n - 1) // recursive part - involving stacks!
  let second = fib(n - 2)

  return first + second
}

console.log(fib(0))
console.log(fib(1))
console.log(fib(2))
console.log(fib(3))
console.log(fib(8))
