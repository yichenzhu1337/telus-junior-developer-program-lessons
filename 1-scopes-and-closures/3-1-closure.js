/*
“Closure is when a function ‘remembers’ its lexical scope even when the function is executed outside that lexical scope” - Kyle Simpson

- The preservation, the linkage back to the original scope where it was defined, no matter where you pass that value, no matter where it executes, it retains that value. It preserves that scope. That's called closure. 

- waitForFiveSeconds is closed over the variable 'question'

- the values don't get enclosed, but the variables themselves do.
*/

//////////////////////////////

let suffix = 'dude'

function ask(question, x, y, z) {
  setTimeout(function waitForFiveSeconds() {
    console.log(question + ` ${suffix}`)
  }, 5000);
}

ask('What de haacck is a closure???')

suffix = 'bro'

//////////////////////////////

// function askAgain(question) {
//   return function holdYourQuestion() {
//     console.log(question)
//   }
// }

// var myQuestion = askAgain('What is closure god dammit??')

// myQuestion()

/*
And whether you do timers or not, you've certainly all written or at least accessed code that returns functions or passes them around in callbacks, and that's the exact same thing. 

If I returned a function here that is closed over the 'question' variable, 
then even though the askAgain function has finished, 
we still have access to that variable, 
not a snapshot of the variable, (meaning not the value)
but the actual variable itself. 
That's closure.
*/