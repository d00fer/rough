// this is a canvas we gonna draw some shit on it
const setupCanvas = () => {
  canvas = document.getElementById('game')
  ctx = canvas.getContext('2d')
  canvas.width = tileSize * (numTiles + uiWidth)
  canvas.height = tileSize * numTiles
  canvas.style.width = canvas.width + 'px'
  canvas.style.height = canvas.height + 'px'
}
// all needed sizes
const tileSize = 64
const numTiles = 9
const uiWidth = 4
let x = 0
let y = 0
//check for let later ..
const spriteSheet = new Image()
spriteSheet.src = 'src/img/monstro.png'

document.querySelector('html').onkeypress = (e) => {
  if (e.key == 'w') y--
  if (e.key == 's') y++
  if (e.key == 'a') x--
  if (e.key == 'd') x++
}
//draw draw draw
const draw = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.drawImage(spriteSheet, x * tileSize, y * tileSize)
}
//set set set
setupCanvas()
setInterval(draw, 15)
