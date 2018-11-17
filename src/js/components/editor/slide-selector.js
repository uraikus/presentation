import React from 'react'
import Slides from '../slides/slides.js'
const UUID = require('uuid/v4')

class SlideSelector extends React.Component {
  constructor (props) {
    super(props)
    this.setState = this.setState.bind(props.parent)
    this.props = props
  }

  render () {
    return (
      <div id='slide-selector'>
        {this.props.parent.state.slides.map((slide, index) => {
          let style = {
            backgroundImage: `url(${Slides[slide.img]})`,
            outline: slide.id === this.props.parent.state.activeSlide ? '3px solid green' : ''
          }
          return (
            <div className='slide' style={style} key={slide.id} onClick={() => selectSlide(this.props.parent, slide.id)}>
              <span className='delete-slide' onClick={ev => deleteSlide.bind(this)(ev, index)}>X</span>
              <input className='title' readOnly value={slide.title} />
              <textarea className='body' readOnly value={slide.body} />
            </div>
          )
        })}
        <div id='new-slide' onClick={addBlankSlide.bind(this)}>
          <span>+ Add Slide</span>
        </div>
      </div>
    )
  }
}

function selectSlide (state, key) {
  state.setState({ activeSlide: key })
}

function deleteSlide (ev, index) {
  ev.stopPropagation()
  this.props.parent.setState(oldState => {
    let deadSlide = oldState.slides[index]
    oldState.slides.splice(index, 1)
    if (deadSlide.id === oldState.activeSlide) {
      let activeIndex = (index - 1) >= 0 ? (index - 1) : 0
      oldState.slides[0] = oldState.slides[0] || {
        title: '',
        body: '',
        img: 'blue',
        id: UUID()
      }
      oldState.activeSlide = oldState.slides[activeIndex].id
    }
    return oldState
  })
}

function addBlankSlide (insertIndex) {
  insertIndex = typeof insertIndex === 'number' ? insertIndex : this.props.parent.state.slides.length
  this.props.parent.setState(oldState => {
    oldState.slides.splice(insertIndex, 0, {
      img: insertIndex !== 0 ? oldState.slides[insertIndex - 1].img : 'blue',
      title: '',
      body: '',
      id: UUID()
    })
    return oldState
  })
}

export default SlideSelector
