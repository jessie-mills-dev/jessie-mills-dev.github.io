// Shift
let cats = ['Theo', 'Harry', 'Esme']
cats.shift()
console.log(cats) // returns ["Harry", "Esme"]

// Join
let arr = ['j', 'e', 's', 's', 'i', 'e']
console.log(arr.join('')) // returns 'jessie'

// Pop
let bunnies = ['Peter', 'Penelope']
bunnies.pop()
console.log(bunnies) // returns 'Peter'

// Sort
let num = [1, 4, 3, 8, 5]
descend = num.sort((a, b) => (a > b ? -1 : 1))
console.log(descend) // returns [8, 5, 4, 3, 1]

ascend = num.sort((a, b) => (a > b ? 1 : -1))
console.log(ascend) // returns [1, 3, 4, 5, 8]

// Find
let lostPet = ['Theo', 'Harry', 'Esme', 'Peter', 'Penelope']
let foundPet = lostPet.find((element) => element !== 'Theo')
console.log(foundPet) //returns Harry

// Reduce
let familyAge = [22, 27, 32, 57, 63]
let reducedAge = familyAge.reduce((total, current) => total + current)
console.log(reducedAge) //returns 201

// Slice
let allPets = ['Theo', 'Harry', 'Esme', 'Peter', 'Penelope']
let somePets = allPets.slice(1, 4)
console.log(somePets) // returns ["Harry", "Esme", "Peter"]

// Includes
let newNums = [1, 2, 3, 4, 5, 6, 7]
console.log(newNums.includes(2)) // returns true
console.log(newNums.includes(9)) // returns false

// Some
let ages = [3, 10, 15, 16, 18, 20]
function canDrive(age) {
  return age > 16
}
console.log(ages.some(canDrive))
// returns true

// Unshift
let plants = ['monstera', 'golden pothos', 'marble pothos']
console.log(plants.unshift('peace lily')) // returns 4
console.log(plants) // returns ["peace lily', "monstera", "golden pothos", "marble pothos"]

// Concat
let veg1 = ['potato', 'kumara', 'parsnip']
let veg2 = ['carrot', 'peas']
console.log(veg1.concat(veg2))
// returns ['potato', 'kumara', 'parsnip', 'carrot', 'peas']

// Every
let age = [16, 17, 18, 19, 20, 21]
function canDrink(age) {
  return age > 18
}
console.log(ages.every(canDrink))

// For Each
let comfortFood = ['lasagne', 'salmon', 'chocolate']
comfortFood.forEach((element) => {
  console.log(element)
})
// returns lasagne salmon chocolate

// findIndex
let names = ['Eleven', 'Hopper', 'Max', 'Will']
let indexFinder = names.findIndex((element) => element === 'Hopper')
console.log(indexFinder)
// returns 1

// indexOf
let strangeNames = ['Eleven', 'Hopper', 'Max', 'Hopper', 'Will']
let indexOfFinder = strangeNames.indexOf('Hopper')
console.log(indexOfFinder)
// returns 1

// Push
let fastFoodNz = ['KFC', 'Mcdonalds', 'Burger King']
console.log(fastFoodNz.push("Wendy's")) // returns 4
console.log(fastFoodNz) // returns ['KFC', 'Mcdonalds', 'Burger King', 'Wendy's]

// Map
let arrr = ['yellow', 'blue', 'green']
let mapped = arrr.map((element) => element + ' house')
console.log(mapped)
// returns ['yellow house', 'blue house', 'green house']

// Reverse
let whoThere = ['john', 'likes', 'jan']
whoThere.reverse()
console.log(whoThere)
//returns ['jan', 'likes', 'john']

// Filter
let siblings = ['jessie', 'thomas', 'georgia']
let filtered = siblings.filter((element) => element !== 'thomas')
console.log(filtered)
//returns ['jessie', 'georgia']

// Fill
let pineapple = new Array(3)
console.log(pineapple) //returns [empty, empty, empty]
console.log(pineapple.fill('yum'))
//returns ['yum', 'yum', 'yum']
