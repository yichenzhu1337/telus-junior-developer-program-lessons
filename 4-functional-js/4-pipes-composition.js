/**
 * What is composition?
 *
 * What is piping?
 */

// Our 3 functions

function minus2(x) {
  return x - 2
}

function triple(x) {
  return 3 * x
}

function increment(x) {
  return x + 1
}

let initNumber = 4

/**************************************************** */
/* 1. composition *********************************** */
/**************************************************** */

// 1.1 the manual way
console.log('composition manual', minus2(triple(increment(initNumber))))

// 1.2 the more general way
function composeThree(fn3, fn2, fn1) {
  return function (v) {
    return fn3(fn2(fn1(v)))
  }
}

console.log(
  'composition composeThree',
  composeThree(minus2, triple, increment)(initNumber)
)

// 1.3 the general compose function
const compose =
  (...functions) =>
  (data) =>
    functions.reduceRight((value, func) => func(value), data)

console.log(
  'composition general',
  compose(minus2, triple, increment)(initNumber)
)

console.log('----------')
console.log('----------')
console.log('----------')

/**************************************************** */
/* 2. piping **************************************** */
/**************************************************** */

// // 2.1 the manual way
// let x = increment(initNumber)
// let y = triple(x)
// let z = minus2(y)

// console.log('pipe manual', z)

// // 2.2 the more general way
// function pipeThree(fn1, fn2, fn3) {
//   return function (v) {
//     let x = fn1(v)
//     let y = fn2(x)
//     let z = fn3(y)
//     return z
//   }
// }

// console.log('pipe pipeThree', pipeThree(increment, triple, minus2)(initNumber))

// // 2.3 the general pipe function
// const pipe = (...functions) => data => functions.reduce((value, func) => func(value), data)

// let formula = pipe(increment, triple, minus2)

// let amount = formula(4)

// console.log('pipeline general', amount)
