function Stack() {
  let arr = [...arguments]

  this.push = function (item) {
    arr = [...arr, item]
  }

  this.pop = function () {
    arr.splice(arr.length - 1, 1)
  }

  this.print = function () {
    for (let i = arr.length - 1; i >= 0; i--) {
      console.log(arr[i])
      console.log('-------------')
    }
  }
}

const my_stack = new Stack(1, 2, 3)

/**
 * 3
 * 2
 * 1
 */

my_stack.print()
my_stack.push(10)

console.log('======')
console.log('======')
console.log('======')

my_stack.print()

console.log('======')
console.log('======')
console.log('======')

my_stack.pop()
my_stack.pop()

my_stack.print()