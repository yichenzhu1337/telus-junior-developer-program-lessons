// Hoisting
/**
Ok... Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope.

Better!! "All of your variables and functions are processed first, before execution"
 */

// console.log(a)

// var a

// a = 10

// -> people think this is what is going on..., but noo.... because "All of your variables and functions are processed first, before execution"

// var a = undefined

// console.log(a)

// a = 10

// var vs let and const behave differently
let a

console.log(a)

a = 10 // TDZ

// let reinforces this idea that all variables should be placed at the top
// so that we don't deal with the confusion of hosting
