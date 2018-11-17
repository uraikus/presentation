/* global db, churchID */

import React from 'react'
import Slides from '../slides/slides.js'

class Viewer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      body: '',
      img: ''
    }
    db.collection('live-slides').doc(churchID)
      .onSnapshot(doc => {
        this.setState(doc.data())
      })
  }
  render () {
    document.body.style.backgroundImage = `url(${Slides[this.state.img]})`
    return (
      <div>
        <input className='title' readOnly value={this.state.title} />
        <textarea className='body' readOnly value={this.state.body} />
      </div>
    )
  }
}

export default Viewer
