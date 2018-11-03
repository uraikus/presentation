/* global firebase */

import './components/forms/forms.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import LoginForm from './components/forms/loginForm.js'
import NewAccountForm from './components/forms/newAccountForm.js'

if (firebase.auth().currentUser !== null) {
  window.open('index.html', '_top')
}

class Form extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      activeTab: 0
    }
  }
  render () {
    return (
      <div>
        <div className='tabs'>
          <span onClick={() => this.setState({ activeTab: 0 })}>Login</span>
          <span onClick={() => this.setState({ activeTab: 1 })}>Create Account</span>
        </div>
        {this.state.activeTab === 0 && <LoginForm />}
        {this.state.activeTab === 1 && <NewAccountForm />}
      </div>
    )
  }
}

let renderer = document.createElement('div')
document.body.appendChild(renderer)
ReactDOM.render(<Form />, renderer)
