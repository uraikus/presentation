/* global Image */
import './slides.scss'
import blue from './blue.jpg'
import bricks from './bricks.jpg'
import clouds from './clouds.jpg'
import concrete from './concrete.jpg'
import horizon from './horizon.jpg'
import mountains from './mountains.jpg'
import paper from './paper.jpg'

var preloadedImages = {}

const Slides = { blue, bricks, clouds, concrete, horizon, mountains, paper }
for (let index in Slides) {
  let url = Slides[index]
  preloadedImages[url] = new Image()
  preloadedImages[url].src = url
}

export default Slides
