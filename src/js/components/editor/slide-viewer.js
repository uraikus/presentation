import React from 'react'
import Slides from '../slides/slides.js'
import BackgroundChooser from './background-chooser.js'

class Viewer extends React.Component {
  render () {
    let state = this.props.state
    let selected = state.slides.find(slide => slide.id === state.activeSlide)
    let selectedIndex = state.slides.indexOf(selected)
    let slide = state.slides[selectedIndex]
    return (
      <div id='slide-viewer' style={{ backgroundImage: `url(${Slides[slide.img]})` }}>
        <BackgroundChooser state={this.props.state} setState={this.props.setState} />
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
