// Closures

let myFriend = 'David'

let europe = function IamANamedFunction(myFriend) {
  // myFriend = undefined
  myFriend = 'Monique'
  const france = function () {
    var paris = function () {
      console.log(myFriend) // 1 Monique
    }

    paris()
  }

  france()

  console.log(myFriend) // 2 Monique
}

europe()

/**
 * Monique
 * Monique
 */
