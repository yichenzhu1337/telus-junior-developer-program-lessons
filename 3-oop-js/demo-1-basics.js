// 2. JavaScript’s Object Syntax and Properties

/*
Chapter 3: Objects

The Easy Stuff
---------------
Syntax
Type
Built-in Objects
Contents
  Computed Property Names
  Property vs. Method
*/

// Couple of ways to create objects

// // 1. object literals
// let prop_1 = 123
// let obj1 = {
//   ['prop4']: 'prop 4 value',
//   prop_2: 'some prop',
//   prop_3: 'some pro3',
//   [prop_1 + '456']: 'this is the value of prop 1'
// }
// console.log(obj1)

// for (let prop in obj1) {
//   console.log(prop)
// }

// // 2. using Built-in Objects
// let obj2 = new Object()
// obj2.foo = 'show foo'
// console.log(obj2)

// let myString = new String('hello world')
// console.log(myString instanceof String)

// let myString2 = 'literal string'
// console.log(myString2 instanceof Object)

// // // 3. using custom functions as the class
// function Animal() { }

// let cat1 = new Animal()

// cat1.makeNoise = function () {
//   console.log('meow')
// }
// cat1.name = 'Super Cat'

// cat1.makeNoise()
// console.log(cat1.name)

////////////////////////////////////////////////////

/**
The Harder Stuff
---------------

Property Descriptors
  - Writable
  - Configurable
  - Enumerable

Immutability
  - Prevent Extensions
  - Seal
  - Freeze
 */

'use strict'
let obj3 = {}
Object.defineProperty(obj3, '_id', {
  value: 'here is my value',
  writable: false,
  enumerable: false,
  configurable: false
})

// Why use them?
// Object.defineProperty(cat1, 'id', {
//   value: '123',
//   writable: false,
//   enumerable: false,
//   configurable: flase
// })

// console.log(Object.getOwnPropertyDescriptor(obj3, 'value'))
// console.log(Object.getOwnPropertyDescriptors(obj3))

// 1. writable
// console.log('old ->', obj3.my_value)
// obj3.my_value = 'newly updated value'
// console.log('update ->', obj3.my_value)

// 2. enumerable
// console.log('{}', obj3.my_value)
// obj3.my_value_2 = 'value 2'
// for (let prop in obj3) {
//   console.log('prop:', prop)
// }

// 3. configurable
// Object.defineProperty(obj3, 'my_value', {
//   value: 'here is my value 123',
//   writable: true,
//   enumerable: true,
//   configurable: true
// })

// console.log(obj3)
// delete obj3.my_value
// console.log(obj3)

/*******************************/
/*******************************/
/*******************************/

const obj = {
  prop: 42
}

Object.freeze(obj)

// obj.prop = 33;
// // Throws an error in strict mode

// console.log(obj.prop);
// // expected output: 42

Object.defineProperty(obj, 'random', {
  value: 'here is my value 123',
  writable: true,
  enumerable: true,
  configurable: true
})
