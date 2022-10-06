// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Dress The Clown!')

// Default variables //
let bodyParts = ['head', 'body', 'shoes']
let bodyPartIndex = 0
let indexes = [0, 0, 0]

// Events for keys //
document.onkeydown = (e) => {
  e = e || window.event
  if (e.key === 'ArrowUp') {
    e.preventDefault()
    changeBodyFocusUp(+1)
    let noise = new Audio('audio/shake.mp3')
    noise.play()
  } else if (e.key === 'ArrowDown') {
    e.preventDefault()
    changeBodyFocusDown(-1)
    let noise = new Audio('audio/shake.mp3')
    noise.play()
  } else if (e.key === 'ArrowLeft') {
    changeClothes(-1)
    let noise = new Audio('audio/quickboing.mp3')
    noise.play()
  } else if (e.key === 'ArrowRight') {
    changeClothes(+1)
    let noise = new Audio('audio/quickboing.mp3')
    noise.play()
  }
}

// Change the clothes //
function changeClothes(direction) {
  let bodyPart = bodyParts[bodyPartIndex]
  let bodySrc = './images/'.concat(bodyPart, indexes[bodyPartIndex], '.png')
  let bodyVariable = document.getElementById(bodyPart)
  bodyVariable.src = bodySrc
  indexes[bodyPartIndex] = indexes[bodyPartIndex] + direction
  if (indexes[bodyPartIndex] >= 6) {
    indexes[bodyPartIndex] = 0
  }
  if (indexes[bodyPartIndex] < 0) {
    indexes[bodyPartIndex] = 5
  } //display which body part is selected
  document.getElementById('current-body-part').innerHTML =
    'Currently selected: ' + bodyPart
}

// Change the body part (up arrow) //
function changeBodyFocusUp(e) {
  if (bodyPartIndex > 0) {
    bodyPartIndex--
  } else {
    bodyPartIndex = 2
  }
}
// Change the body part (down arrow) //
function changeBodyFocusDown(e) {
  bodyPartIndex++
  if (bodyPartIndex > 2) {
    bodyPartIndex = 0
  }
}
