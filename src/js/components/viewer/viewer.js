/* global db, churchID */

import React from 'react'
import Slides from './slides.js'

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
        <h1 id='title'>{this.state.title}</h1>
        <div id='body'>{this.state.body}</div>
      </div>
    )
  }
}

export default Viewer
