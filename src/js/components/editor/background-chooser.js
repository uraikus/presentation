import './background-chooser.scss'
import React from 'react'
import Slides from '../slides/slides.js'

class BackgroundChooser extends React.Component {
  render () {
    let state = this.props.state
    let curImg = state.slides.find(slide => slide.id === state.activeSlide).img
    return (
      <div id='background-chooser'>
        {Object.keys(Slides).map(key => {
          let style = {
            display: key === curImg ? 'block' : ''
          }
          return <img style={style} key={key} src={Slides[key]} onClick={() => {
            this.props.setState(prevState => {
              prevState.slides.find(slide => slide.id === state.activeSlide).img = key
              return prevState
            })
          }} />
        })}
      </div>
    )
  }
}

export default BackgroundChooser
