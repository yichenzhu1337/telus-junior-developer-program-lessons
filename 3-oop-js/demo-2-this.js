// The ‘this’ keyword

/**
 * Too much confusion, espeically for people from traditional OOP background
 * 1. call site
 *  - where and how the function is called is how we determine the this keyword
 * 
 * 2. bindings
 *  - default 4
 *  - implicit 3
 *  - explicit 2
 *  - new keyword 1
 */

// message = '123'
// 1. default
// function greeting() {
//   console.log(this.message)
// }

// // greeting()

// // // 2. implicit
// let obj1 = {
//   message: 'sup',
//   greeting
// }

// obj1.greeting()

// // 3. explicit
// greeting.call(obj1)

// 4. new keyword
/**
1. a brand new object is created (aka, constructed) out of thin air
2. the newly constructed object is [[Prototype]]-linked
3. the newly constructed object is set as the 'this' binding for that function call
4. unless the function returns its own alternate object, the new-invoked function call will automatically return the newly constructed object.
 */

// function Letter() {
//   this.message = 'this is a new message'
// }

// letter1 = new Letter()
// console.log(letter1.message)

/*********** Precedence ************/

// // 1.
// function foo() {
//   console.log(this.a);
// }

// var obj1 = {
//   a: 2,
//   foo
// };

// var obj2 = {
//   a: 3,
//   foo
// };

// obj1.foo(); // 2
// obj2.foo(); // 3

// obj1.foo.call(obj2); // 3
// obj2.foo.call(obj1); // 2

/*****************************************************/

// 2.
function foo(something) {
  this.a = something;
}

var obj1 = {
  foo
};

var obj2 = {};

obj1.foo(2);
console.log(obj1.a); // 2

obj1.foo.call(obj2, 3);
console.log(obj2.a); // 3

var bar = new obj1.foo(4);
console.log(obj1.a); // 2
console.log(bar.a); // 4

// // notice the object that the 'this' is refering to is "bar", not "obj1"

/*****************************************************/
/*****************************************************/
/*****************************************************/

/**
1. Is the function called with new (new binding)? If so, this is the newly constructed object.

var bar = new foo()

2. Is the function called with call or apply (explicit binding), even hidden inside a bind hard binding? If so, this is the explicitly specified object.

var bar = foo.call( obj2 )

3. Is the function called with a context (implicit binding), otherwise known as an owning or containing object? If so, this is that context object.

var bar = obj1.foo()

4. Otherwise, default the this (default binding). If in strict mode, pick undefined, otherwise pick the global object.

var bar = foo()
 */