// this is a canvas we gonna draw some shit on it
const setupCanvas = () => {
  canvas = document.getElementById('game')
  ctx = canvas.getContext('2d')
  canvas.width = tileSize * (numTiles + uiWidth)
  canvas.height = tileSize * numTiles
  canvas.style.width = canvas.width + 'px'
  canvas.style.height = canvas.height + 'px'
  ctx.imageSmoothingEnabled = false
}
//draw draw draw
const drawSprite = (sprite, x, y) => {
  ctx.drawImage(
    spriteSheet,
    sprite * 16,
    0,
    16,
    16,
    x * tileSize,
    y * tileSize,
    tileSize,
    tileSize,
  )
}
const draw = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  for (let i = 0; i < numTiles; i++) {
    for (let j = 0; j < numTiles; j++) {
      getTile(i, j).draw()
    }
  }
  drawSprite(0, x, y)
}
