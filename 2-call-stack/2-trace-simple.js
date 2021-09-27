/*
2 Rules
-------
1. Any time a function is called, put that function on the top of the stack (push)
2. any time a function is terminated, or it reaches the end, pop it off the stack
*/
function one() {
  console.log('I am one!')
  two()
  // ...
}

function two() {
  console.log('I am two! - start')

  three()

  console.log('I am two! - end')
}

function three() {
  console.log('I am three!')
}

one()

/**
  I am one!
  I am two! - start
  I am three!
 */

/**
 * I am one!
 * I am two! start
 * I am three!
 * I am two! end
 */
