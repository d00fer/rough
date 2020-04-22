// this is a canvas we gonna draw some shit on it
const setupCanvas = () => {
  canvas = document.getElementById('game')
  ctx = canvas.getContext('2d')
  canvas.width = tileSize * (numTiles + uiWidth)
  canvas.height = tileSize * numTiles
  canvas.style.width = canvas.width + 'px'
  canvas.style.height = canvas.height + 'px'
}
tileSize = 64
numTiles = 9
uiWidth = 4
x = y = 0
document.querySelector('html').onkeypress = (e) => {
  if (e.key == 'w') y--
  if (e.key == 's') y++
  if (e.key == 'a') x--
  if (e.key == 'd') x++
}

const draw = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize)
}

setupCanvas()
setInterval(draw, 15)
