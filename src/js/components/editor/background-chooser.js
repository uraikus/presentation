import React from 'react'
import Slides from '../slides/slides.js'

class BackgroundChooser extends React.Component {
  render () {
    let state = this.props.state
    let curImg = state.slides.find(slide => slide.id === state.activeSlide).img
    let img = Slides[curImg] ? `url(${Slides[curImg]})` : `url(${curImg})`
    return (
      <div id='background-chooser' style={{ backgroundImage: img }}>
        {Object.keys(Slides).map(key => {
          return <img key={key} src={Slides[key]} onClick={() => {
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
