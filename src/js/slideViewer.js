/* global EventSource */

import { createElement, setState } from '@scriptleaf/treejs'
import '../scss/index.scss'

const Viewer = createElement('div', { id: 'viewer' })
Viewer.createChildren([
  { id: 'title', stateHTML: 'title', tagName: 'h1' },
  { id: 'content', stateHTML: 'content' }
])
const Events = new EventSource('/sse')

Events.addEventListener('text', ev => {
  console.log(ev)
  setState('content', ev.data)
})

Events.addEventListener('slide', ev => {
  let data = typeof ev.data === 'object' ? ev.data : JSON.parse(ev.data)
  Viewer.style.backgroundImage = `url(${data.background})`
  setState('title', data.title)
  setState('content', data.content)
})
