// The 3 units of scope

// 1. { }

// 2. function () { } X

// 3. modules X

//////////////////////////////////////

// 1 - LET
// Any time there are { }, and you use let to declare a variable, that variable is only local within that brace

// 

// 0. function() {}
//////////////////////////
// const bar1 = () => {
//   let x = 0
//   // console.log(x)
// }

// bar1()

// console.log(x)
//////////////////////////

// 1. just the { }

// {
//   let x = 1
// }

// console.log(x)

// Immediately invoked function expression
// (function () {
//   let x = 1
// })()

// console.log(x)

// 2. just the if statements

// init variables
let env = 'local'
if (env == 'local') {
  let x = 2
}

console.log(x)

// let and const behave pretty much exactly the same in terms of scope