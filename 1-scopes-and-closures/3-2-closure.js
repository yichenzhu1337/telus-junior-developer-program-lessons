// Combining our understanding of lexical scope and "closures"
// "closing over a variable, meaning being able to access that variable via this 'linkage'"

// the classic question
// for (var i = 1; i <= 3; i++) {
//   setTimeout(function () {
//     console.log(`i: ${i}`)
//   }, 1000)
// }

// // this is essential what happened
// for (var i = 4;;) {
//   setTimeout(function () {
//     console.log(`i: ${i}`)
//   }, 1000)
// }

// var i = 4
// {

//     console.log(`i: ${i}`)

// }

// {

//     console.log(`i: ${i}`)

// }

// {

//     console.log(`i: ${i}`)

// }

//////////////////////////////////////
// for (var i = 1; i <= 3; i++) {
//   let j = i
//   setTimeout(function () {
//     console.log(`i: ${j}`)
//   }, 1000)
// }

// // i = 1
// {
//   let j = i
//   setTimeout(function () {
//     console.log(`i: ${j}`)
//   }, 1000)
// }

// // i = 2
// {
//   let j = i
//   setTimeout(function () {
//     console.log(`i: ${j}`)
//   }, 1000)
// }

// // i = 3
// {
//   let j = i
//   setTimeout(function () {
//     console.log(`i: ${j}`)
//   }, 1000)
// }

//////////////////////////////////////
// // the REAL pretty way that ES6 has made so we don't have to do what we did above
for (let i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(`i: ${i}`)
  }, 1000)
}
