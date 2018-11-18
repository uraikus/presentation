/* global firebase, location */

import './sidebar.scss'
import React from 'react'
import BackgroundChooser from './background-chooser.js'
import signOutImage from './sign-out-light.svg'
import shareImage from './share-square-solid.svg'

class Sidebar extends React.Component {
  render () {
    return (
      <div id='sidebar'>
        <BackgroundChooser state={this.props.state} setState={this.props.setState} />
        <div id='share-button'>
          <img src={shareImage} />
          <input readOnly value={`${location.origin}/live.html?${firebase.auth().getUid()}`} />
        </div>
        <img id='sign-out-button' title='Sign out...' src={signOutImage} onClick={() => firebase.auth().signOut()} />
      </div>
    )
  }
}

export default Sidebar
