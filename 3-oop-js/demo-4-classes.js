// 1. Classic OOP
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

class Animal {
  constructor(height, weight) {
    this.height = height
    this.weight = weight
  }

  getName() {
    
  }
}

Animal.prototype.getName = function() {

}

class Cat extends Animal {
  constructor(height, weight) {
    super(height, weight)
  }

  speak() {
    console.log('Meow, I am a cat!')
  }
}

let cat1 = new Cat(10, 100)
console.log(cat1)
console.log(cat1.speak())

class Dog extends Animal {

  constructor(height, weight) {
    super(height, weight)
  }

  speak() {
    console.log('I am a dog')
  }
}

let dog1 = new Dog(10, 100)
console.log(dog1)
console.log(dog1.speak())