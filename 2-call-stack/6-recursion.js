// convert for..loop from 1 to n

// for (let index = 0; index < n; index++) {
//   const element = array[index];
//   console.log(element)
// }

function printRecursivefromOneToN(N) {
  console.log(N)

  // base
  if (N === 0) {
    return
  }

  //
  printRecursivefromOneToN(N - 1)
}

printRecursivefromOneToN(10)

// filter "backtracking" problems
// permutations, combinations of string

/*
abc

abc
acb
bac
...
*/
