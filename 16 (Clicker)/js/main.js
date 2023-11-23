let score = 0
let timer = 10
let gameActive = false
let squareInterval
const startBtn = document.querySelector('#startGameBtn')
const gameContainer = document.querySelector('#game-container')

startBtn.addEventListener('click', startGame)

function updateScore(){
  document.querySelector('#score').textContent = `Score: ${score}`
}
function updateTimer(){
  document.querySelector('#timer').textContent = `Time: ${timer}`
}

function clearGameContaienr(){
  gameContainer.lastElementChild.remove()
}

function getRandomPosition(){
  const maxX = gameContainer.clientWidth - 50
  const maxY = gameContainer.clientHeight - 50
  const x = Math.floor(Math.random() * maxX)
  const y = Math.floor(Math.random() * maxY)
  return { x, y }
}


function createSquare (){
  const square = document.createElement('div')
  square.classList.add('square')
  const {x, y} = getRandomPosition()
  square.style.left = `${x}px`
  square.style.top = `${y}px`

  square.addEventListener('click', ()=>{
    if(gameActive){
      score++
      updateScore()
      square.remove()
      createSquare()
    }
  })
  gameContainer.appendChild(square)
}


function startGame() {
  startBtn.style.display = 'none'
  gameActive = true
  score = 0
  timer = parseInt(document.querySelector('#duration').value) || 10

  updateScore()
  updateTimer()

  squareInterval = setInterval(() =>{
    if (timer > 0) {
      timer--
      updateTimer()
    } else {
      endGame()
    }
  }, 1000)

  createSquare()
}

function endGame() {
  clearInterval(squareInterval)
  gameActive = false
  clearGameContaienr()
  alert(`Гра закінчина! Ваш Рахунок ${score}`)
  startBtn.style.display = 'block'
}