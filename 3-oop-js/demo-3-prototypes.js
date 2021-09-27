// 3. The Prototype System

/* 
1. Explaining how the protype system works
2. Understanding protypal "inhertiance"
*/

/*****************************************************/

// // 1. draw and go through the diagram

// function Animal(name) {
//   this.name = name
// }

// Animal.prototype.speak = function () {
//   console.log('Hi, I am a ' + this.name)
// }

// let dog = new Animal('Dog')
// let cat = new Animal('Cat')

// cat.speak = function () {
//   console.log('Meow! I am a ' + this.name)
// }

// dog.speak()
// cat.speak()

// console.log(cat.hasOwnProperty('name'))

// Object.prototype.printStuffToScreen = function () {
//   console.log('random text on screen')
// }

// console.log(cat.printStuffToScreen())

// console.log(cat)

// console.log(dog.constructor === Animal)
// console.log(dog.__proto__ === Animal.prototype)

/*****************************************************/
/*****************************************************/
/*****************************************************/

// 2. 'Inheritance'

// function Dog(who) {
//   this.me = who
// }

// Dog.prototype.identify = function () {
//   return 'I am ' + this.me
// }

// function Cat(who) {
//   Dog.call(this, who)
// }

// // Cat.prototype = new Dog(); // or....
// Cat.prototype = Object.create(Dog.prototype)
// // The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.

// Cat.prototype.constructor = Cat // no! why? enumerability
// Object.defineProperty(Cat.prototype, 'constructor', {
//   value: Cat,
//   enumerable: false, // so that it does not appear in 'for in' loop
//   writable: true
// })

// Cat.prototype.speak = function () {
//   console.log('Hello, ' + this.identify() + '.')
// }

// var cat1 = new Cat('cat1')
// var cat2 = new Cat('cat2')

// console.log(cat1.constructor) // uh oh...
// console.log(cat2.constructor)

// cat1.speak() // "Hello, I am cat1."
// cat2.speak() //"Hello, I am cat2."

// /*****************************************************/
// // Let's see the Array function!

const a = new Array(0, 1, 2, 3, 4)

Array.prototype.printOddIndices = function () {
  for (let i = 0; i < this.length; i++) {
    if (i % 2 == 1) {
      console.log(this[i])
    }
  }
}

a.printOddIndices()
// 1
// 3
