const { readFileSync } = require('fs')

var imageList = [
  null,
  'src/res/slides/blue.jpg',
  'src/res/slides/bricks.jpg',
  'src/res/slides/clouds.jpg',
  'src/res/slides/concrete.jpg',
  'src/res/slides/horizon.jpg',
  'src/res/slides/mountains.jpg',
  'src/res/slides/paper.jpg'
]

imageList = imageList.map(src => {
  if (src === null) return null
  return 'data:image/jpg;base64,' + readFileSync(src, 'base64')
})

export default imageList
