import React from 'react'
import { loginAccount } from './accountActions.js'

class LoginForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      error: ''
    }
    this.login = this.login.bind(this)
  }

  login (ev) {
    if (ev.key === 'Enter') {
      let noError = true
      loginAccount(this.state)
        .catch(err => {
          noError = false
          this.setState({ error: err.message })
        })
        .then(() => {
          if (noError === true) window.open('/', '_top')
        })
    }
  }

  render () {
    return (
      <div className='form'>
        <h1>Login</h1>
        <div>
          <sup>Email</sup>
          <input type='email' placeholder='email' onChange={ev => this.setState({ email: ev.target.value })} value={this.state.email} onKeyDown={this.login} />
        </div>
        <div>
          <sup>Password</sup>
          <input type='password' placeholder='password' onChange={ev => this.setState({ password: ev.target.value })} value={this.state.password} onKeyDown={this.login} />
        </div>
        <div className='error'>{this.state.error}</div>
        <div>
          <input type='button' value='Login' onClick={() => this.login({ key: 'Enter' })} />
        </div>
      </div>
    )
  }
}

export default LoginForm
