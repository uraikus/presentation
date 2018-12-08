/* global db, churchID */

import React from 'react'
import Slides from '../slides/slides.js'

class Viewer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      body: '',
      img: 'blue'
    }
    db.collection('live-slides').doc(churchID)
      .onSnapshot(doc => {
        this.setState(doc.data())
      })
  }
  render () {
    let img = Slides[this.state.img] ? `url(${Slides[this.state.img]})` : `url(${this.state.img})`
    return (
      <div id='slide-viewer' style={{ backgroundImage: img }} className={this.state.className || ''}>
        <input className='title' readOnly value={this.state.title} />
        <textarea className='body' readOnly value={this.state.body} />
      </div>
    )
  }
}

export default Viewer
