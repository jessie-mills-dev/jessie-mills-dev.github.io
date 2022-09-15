document.getElementById('headache').addEventListener('click', headache)

document
  .getElementById('change-clothes')
  .addEventListener('click', changeClothes)

document.getElementById('make-me-hide').addEventListener('click', hide)

document.getElementById('reset-me').addEventListener('click', resetMe)

function changeClothes() {
  document.getElementById('css-man-change-me').src = '../Images/js-man.png'
}

function hide() {
  document.getElementById('css-man-change-me').style.visibility = 'hidden'
}

function headache() {
  document.getElementById('css-man-change-me').style.transform =
    'rotate(180deg)'
}

function resetMe() {
  document.getElementById('css-man-change-me').style.cssText = 'reset'
  document.getElementById('css-man-change-me').src = '../Images/css-man.png'
}
