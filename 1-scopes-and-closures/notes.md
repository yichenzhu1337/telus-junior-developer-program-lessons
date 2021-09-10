# Script

## Agenda

Intructors Introduction

## Story Time

Story 1
Interview in 2016

Story 2
Black Friday

## 


Resources

Why?
Story 1
Story 2

1
What is Scope
Understanding Lexical Scope (vs dynamic)
js (and all languages) vs bash

2
4. Function Scoping
6. Block Scoping
7. Choosing let, const, var
11. Hoisting 

3. Scope and Function Expressions
function expression
function deflcation
arrow functions

4 Closures

1. Origin of Closure
2. What is Closure
3. Closing Over Variables
4. Module Pattern
5. ES6 Modules & Nodejs
6. ES6 Module Syntax

5 
modules
strict mode

6 Practice Problems


## 7. Scope - Compile

1. Scope.mp4
2. Compilation & Scope
3. Executing Code
4. Compilation and Scope Q&A
5. Code Execution Finishing Up
6. Lexical Scope Review
7. Compilation Review
8. Dynamic Global Variables
9. Strict Mode
10. Nested Scope
11. Undefined vs Undeclared
12. Lexical Scope Elevator

## 8. Scope and Function Expressions

1. Function Expressions
2. Naming Function Expressions
3. Arrow Functions
4. Function Types Hierarchy
5. Function Expression Exercise
6. Function Expression Solution Functions
7. Function Expression Solution Arrow Functions

## 9. Advanced Scope

1. Lexical & Dynamic Scope
2. Lexical Scope
3. Dynamic Scope
4. Function Scoping /
5. IIFE Pattern / 
6. Block Scoping / 
7. Choosing let or var /
8. Explicit let Block / 
9. const /
10. const Q&A
11. Hoisting / 
12. Hoisting Example
13. let Doesnt Hoist /
14. Hoisting Exercise
15. Hoisting Exercise Solution

## 10. Closure

1. Origin of Closure
2. What is Closure
3. Closing Over Variables
4. Module Pattern
5. ES6 Modules & Nodejs
6. ES6 Module Syntax
7. Module Exercise
8. Module Exercise Solution

---

## Variable scopes in JS

Scopes are about visibility and access
In Javascript, the basic rules of scope are deceptively simple:

Variables defined outside a block or function are accessible from within
It’s a simple (or maybe the simplest) way to share application state

Variables defined inside a block or function are not accessible from outside
Because that would be madness. MADNESS I SAY!

Modules have their own separate scope
Variables defined at the top level of modules are only accessible from within unless they’re exported

## Functions as values

Since functions are values...

They can be used as arguments for other functions
Also known as the callback pattern

They can be returned from other functions
This allows for all sorts of interesting usage patterns commonly used in functional programming (composition, partial application etc.) which we’ll discuss later in the course

Functions returned from other functions retain the enclosing scope
And this is a little thing we call closure

## Closures

In a nutshell:

Functions returned by a function have access to all variables present in the scope up to that moment.

But why would we do that? What is it for?

## You’re using closures all the time

Things that are closures, but you’ve never thought about them like that:

Promises
The return new Promise((resolve, reject) => {...}) pattern is all about taking results from a higher-order scope and sending them to .then() and .catch()

Modules
Only exported values are accessible publicly when you require/import a module, but non-exported variables are accessible to all functions within
