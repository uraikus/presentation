/* global Image */

import blue from '../../../res/slides/blue.jpg'
import bricks from '../../../res/slides/bricks.jpg'
import clouds from '../../../res/slides/clouds.jpg'
import concrete from '../../../res/slides/concrete.jpg'
import horizon from '../../../res/slides/horizon.jpg'
import mountains from '../../../res/slides/mountains.jpg'
import paper from '../../../res/slides/paper.jpg'

var preloadedImages = {}

const Slides = { blue, bricks, clouds, concrete, horizon, mountains, paper }
for (let index in Slides) {
  let url = Slides[index]
  preloadedImages[url] = new Image()
  preloadedImages[url].src = url
}

export default Slides
