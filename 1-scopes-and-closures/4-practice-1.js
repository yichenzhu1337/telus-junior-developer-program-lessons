var b = 1

function outer() {
  var b = 2
  
  function inner() {
    b++
    var b = 4 // tricky eh? 1, 2, 3, 4, 5? Why?
    console.log(b)
  }
  
  inner()
}

outer()
