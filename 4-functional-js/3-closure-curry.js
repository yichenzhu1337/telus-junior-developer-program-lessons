/**
 * Review closures
 * "Closure is when a function ‘remembers’ its lexical scope even when the function
 * is executed outside that lexical scope”
 *
 * What is currying?
 * Breaking up a multi-arg function into a series of single-arg ones
 *
 * how is it useful?
 * It let's us create a re-usable function with some sort of pre-defined argument
 *
 * So instead of having multi-arguments functions, we have single re-usable argument functions
 */

function addPrefix(prefix) {
  return function (word) {
    return prefix + ' ' + word // we were able to access 'prefix'
  }
}

const addSuperPrefix = addPrefix('super')

console.log(addSuperPrefix('aggressive')) // super aggressive
console.log(addSuperPrefix('fun')) // super fun
console.log(addSuperPrefix('cool')) // super cool

/**************************************************/
/**************************************************/
/**************************************************/

// we can turn this...
function greet(greeting, name) {
  return `${greeting}, ${name}!`
}

// into this...
function curryGreet(greeting) {
  return function (name) {
    return `${greeting}, ${name}!`
  }
}

const greetItal = curryGreet('Hello')
greetItal('Alonzo') // "Hello, Alonzo!"

const greetTex = curryGreet('Howdy')
greetTex('Alonzo') // "Howdy, Alonzo!"
greetTex('Alan') // "Howdy, Alan!"
