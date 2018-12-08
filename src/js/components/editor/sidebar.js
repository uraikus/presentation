/* global firebase, location, FileReader */

import './sidebar.scss'
import React from 'react'
import BackgroundChooser from './background-chooser.js'
import signOutImage from './sign-out-light.svg'
import shareImage from './share-square-solid.svg'
import uploadImage from './upload-light.svg'
import cogImage from './cog-solid.svg'

function Sidebar (props) {
  return (
    <div id='sidebar'>
      <BackgroundChooser state={props.state} setState={props.setState} />
      <img id='upload-img-button' title='Upload custom background...' src={uploadImage} onClick={() => document.getElementById('file-uploader').click()} />
      <input type='file' id='file-uploader' accept='image/*' onChange={() => loadCustomBackground(props.setState)} />
      <div id='display-style'>
        <img src={cogImage} />
        <div>
          <span>
            <b>w/ Header</b>
            <b className='middle-borders'>Only Body</b>
            <b>No Text</b>
          </span>
        </div>
      </div>
      <div id='share-button'>
        <img src={shareImage} />
        <input readOnly value={`${location.origin}/live.html?${firebase.auth().getUid()}`} />
      </div>
      <img id='sign-out-button' title='Sign out...' src={signOutImage} onClick={() => firebase.auth().signOut()} />
    </div>
  )
}

function loadCustomBackground (setState) {
  let imgInput = document.getElementById('file-uploader')
  if (imgInput.files[0] === undefined) return false
  let fileReader = new FileReader()
  fileReader.onload = ev => {
    if (ev.target.result.length < 1048487) {
      setState(prevState => {
        let curSlide = prevState.slides.find(slide => slide.id === prevState.activeSlide)
        curSlide.img = ev.target.result
        return prevState
      })
    } else window.alert('Image too big!')
    imgInput.value = ''
  }
  fileReader.readAsDataURL(imgInput.files[0])
}

export default Sidebar
