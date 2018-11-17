/* globals firebase */
import './components/editor/editor.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import SlideSelector from './components/editor/slide-selector.js'
import Viewer from './components/editor/slide-viewer.js'
const UUID = require('uuid/v4')

firebase.auth().onAuthStateChanged(user => {
  if (!user) {
    window.open('/login', '_top')
  }
})

class Editor extends React.Component {
  constructor (props) {
    super(props)
    let firstSlide = UUID()
    this.state = {
      activeSlide: firstSlide,
      slides: [{ title: '', body: '', img: 'bricks', id: firstSlide }]
    }
  }

  render () {
    return (
      <React.Fragment>
        <SlideSelector parent={this} />
        <Viewer state={this.state} setState={this.setState.bind(this)} />
      </React.Fragment>
    )
  }
}

let renderer = document.createElement('div')
document.body.appendChild(renderer)
ReactDOM.render((
  <Editor />
), renderer)
