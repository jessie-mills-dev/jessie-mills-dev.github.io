console.log('Welcome to Tic-Tac-Toe! Enjoy!')

let cells = document.getElementsByTagName('TD')

for (let i = 0; i < cells.length; i++) {
  cells[i].onclick = cellClicked
}

let noughtsTurn = false
let stalemate = false
let gameIsOver = false

// function for handling clicks on cells

function cellClicked(e) {
  let noise = new Audio('audio/maidbell.mp3')
  noise.play()
  let cell = e.target
  if (!gameIsOver) {
    if (cell.innerHTML === '') {
      let symbol = noughtsTurn ? '0' : 'X'
      cell.innerHTML = symbol
      noughtsTurn = !noughtsTurn
      let whosTurn = noughtsTurn ? 'O' : 'X'
      document.getElementById('subtitle').innerHTML =
        'It is now ' + whosTurn + 's turn'
      checkForWin(symbol)
      checkForStalemate(symbol)
    }
  }
}

// STALEMATE //

function checkForStalemate() {
  if (
    cells[0].innerHTML != '' &&
    cells[1].innerHTML != '' &&
    cells[2].innerHTML != '' &&
    cells[3].innerHTML != '' &&
    cells[4].innerHTML != '' &&
    cells[5].innerHTML != '' &&
    cells[6].innerHTML != '' &&
    cells[7].innerHTML != '' &&
    cells[8].innerHTML != '' &&
    !gameIsOver
  )
    stalemate = true
  if (stalemate) {
    document.getElementById('subtitle').innerHTML = "It's a draw!"
    let noise = new Audio('audio/ohnobell.mp3')
    noise.play()
  }
}

function checkForWin(symbol) {
  // HORIZONTAL LINES //
  if (
    cells[0].innerHTML == symbol &&
    cells[1].innerHTML == symbol &&
    cells[2].innerHTML == symbol
  )
    gameIsOver = true
  else if (
    cells[3].innerHTML == symbol &&
    cells[4].innerHTML == symbol &&
    cells[5].innerHTML == symbol
  )
    gameIsOver = true
  else if (
    cells[6].innerHTML == symbol &&
    cells[7].innerHTML == symbol &&
    cells[8].innerHTML == symbol
  )
    gameIsOver = true

  // VERTICAL LINES //

  if (
    cells[0].innerHTML == symbol &&
    cells[3].innerHTML == symbol &&
    cells[6].innerHTML == symbol
  )
    gameIsOver = true
  else if (
    cells[1].innerHTML == symbol &&
    cells[4].innerHTML == symbol &&
    cells[7].innerHTML == symbol
  )
    gameIsOver = true
  else if (
    cells[2].innerHTML == symbol &&
    cells[5].innerHTML == symbol &&
    cells[8].innerHTML == symbol
  )
    gameIsOver = true

  // DIAGONAL LINES //

  if (
    cells[0].innerHTML == symbol &&
    cells[4].innerHTML == symbol &&
    cells[8].innerHTML == symbol
  )
    gameIsOver = true
  else if (
    cells[2].innerHTML == symbol &&
    cells[4].innerHTML == symbol &&
    cells[6].innerHTML == symbol
  )
    gameIsOver = true

  if (gameIsOver) {
    document.getElementById('subtitle').innerHTML = symbol + ' wins!'
    let noise = new Audio('audio/fastbells.mp3')
    noise.play()
  }
}

function resetGame() {
  stalemate = false
  gameIsOver = false
  for (let i = 0; i < cells.length; i++) {
    document.getElementsByTagName('TD')[i].innerHTML = ''
  }
  document.getElementById('subtitle').innerHTML = "Let's play again!"
}
