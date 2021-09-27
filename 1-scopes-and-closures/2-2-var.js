// The 3 units of scope

// 1. { }

// 2. function () { } X

// 3. modules X

//////////////////////////////////////

// 1 - VAR
// This is where it gets tricky...

//

// 0. function() {}
//////////////////////////
// const bar1 = () => {
//   var x = 0
//   // console.log(x)
// }

// bar1()

// console.log(x)
//////////////////////////

// 1. just the { }

// {
//   var x = 1
// }

// console.log(x)

// (function () {
//   var x = 1
// })()

// console.log(x)

// 2. just the if statements

// init variables
// 'use strict'

let env = 'local'
if (env == 'local') {
  var x = 2
  var y = 3
}

console.log(x)

// Conclusion: Anything wrapped in a function scope, var is going to behave just like let
