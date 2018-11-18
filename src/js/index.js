/* globals firebase, db */
import './components/editor/editor.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import SlideSelector from './components/editor/slide-selector.js'
import Viewer from './components/editor/slide-viewer.js'
import Sidebar from './components/editor/sidebar.js'
const UUID = require('uuid/v4')

firebase.auth().onAuthStateChanged(user => {
  if (!user) {
    window.open('/login', '_top')
  } else {
    let renderer = document.createElement('div')
    document.body.appendChild(renderer)
    ReactDOM.render((
      <Editor />
    ), renderer)
  }
})

class Editor extends React.Component {
  constructor (props) {
    super(props)
    this.state = null
    window.onkeydown = ev => {
      if (ev.key === 'ArrowUp') {
        let index = this.state.slides.indexOf(this.state.slides.find(slide => slide.id === this.state.activeSlide))
        if (index > 0) this.setState({ activeSlide: this.state.slides[index - 1].id })
      } else if (ev.key === 'ArrowDown') {
        let index = this.state.slides.indexOf(this.state.slides.find(slide => slide.id === this.state.activeSlide))
        if (index < this.state.slides.length - 1) this.setState({ activeSlide: this.state.slides[index + 1].id })
      }
    }
    db.collection('user-slides').doc(firebase.auth().getUid()).get().then(doc => {
      if (doc.data()) {
        this.setState(doc.data())
      } else {
        let firstSlide = UUID()
        this.setState({
          activeSlide: firstSlide,
          slides: [{ title: '', body: '', img: 'bricks', id: firstSlide }]
        })
      }
    })
  }

  render () {
    if (this.state !== null) db.collection('user-slides').doc(firebase.auth().getUid()).set(this.state)
    return (
      <React.Fragment>
        {(this.state === null && 'Loading...') || [
          <SlideSelector parent={this} key='0-1' />,
          <Viewer state={this.state} setState={this.setState.bind(this)} key='0-2' />,
          <Sidebar state={this.state} setState={this.setState.bind(this)} key='0-3' />
        ]}
      </React.Fragment>
    )
  }
}
