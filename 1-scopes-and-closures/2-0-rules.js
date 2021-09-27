// let abc = 0

/*
1
Variables defined outside a block or function are accessible from within.
*/
///////////////////////////
// var x = 100

// function foo1() {
//   console.log(x)
// }

// foo1()
/////////////////////////////

/*
2
Variables defined inside a block or function are not accessible from outside
*/
///////////////////////////
// function foo2() {
//   var x = 100
//   const y = 10
//   let z = 99
//   console.log(arguments.callee) // foo2
// }

// foo2()

// console.log(x)
// console.log(y)
// console.log(z)
///////////////////////////

/*
3
Modules have their own separate scope - Variables defined at the top level of modules are only accessible from within unless they’re exported
*/

///////////////////////////

require('./2-0-zModule')
var my_var
console.log(my_var)

console.log(abc)
///////////////////////////
