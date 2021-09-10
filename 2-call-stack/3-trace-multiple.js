function one() {
  twoA()
  
  console.log('I am one!')

  twoB()
}

function twoA() {
  console.log('I am twoA!')

  threeA()

  threeB()
}

function twoB() {
  threeC()

  console.log('I am twoB!')
}

function threeA() {
  console.log('I am threeA!')
}

function threeB() {
  console.log('I am threeB!')
}

function threeC() {
  console.log('I am threeC!')
}

one()


