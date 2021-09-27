/***** Pure vs Impure functions *****/

/******************************************/
// 1. Pure
function greet(name) {
  return `Hello, ${name}!`;
}

greet("Alonzo"); // "Hello, Alonzo!"

greet("Alan"); // "Hello, Alan!"

// 2. Impure
let name = "Alonzo";

function greet() {
  console.log(`Hello, ${name}!`);
}

greet(); // Hello, Alonzo!

name = "Alan";
greet(); // Hello, Alan! // this is what we call a side-effect

/******************************************/
/******************************************/
/******************************************/

/***** Some more examples - Pure or Impure? *****/

// 1.
function getRandomNumber() {
  return Math.random()
}

// 2. 
function add(a, b) {
  return a + b
}

// 3.
let config1 = 1
let config2 = 2
let config3 = 3
function initConfig() {
  config1 = 11
  config2 = 22
  config3 = 33
}

initConfig()
