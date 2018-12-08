/* global firebase, db */

import React from 'react'
import Slides from '../slides/slides.js'

class Viewer extends React.Component {
  render () {
    let state = this.props.state
    let selected = state.slides.find(slide => slide.id === state.activeSlide)
    let selectedIndex = state.slides.indexOf(selected)
    let slide = state.slides[selectedIndex]
    db.collection('live-slides').doc(firebase.auth().getUid()).set({
      title: slide.title,
      body: slide.body,
      img: slide.img,
      className: slide.className,
      id: slide.id
    })
    let img = Slides[slide.img] ? `url(${Slides[slide.img]})` : `url(${slide.img})`
    return (
      <div id='slide-viewer' style={{ backgroundImage: img }} className={slide.className || ''}>
        <input className='title' onChange={ev => {
          let value = ev.target.value
          this.props.setState(oldState => {
            oldState.slides[selectedIndex].title = value
            return oldState
          })
        }} value={slide.title} />
        <textarea className='body' onChange={ev => {
          let value = ev.target.value
          this.props.setState(oldState => {
            oldState.slides[selectedIndex].body = value
            return oldState
          })
        }} value={slide.body} />
      </div>
    )
  }
}

export default Viewer
