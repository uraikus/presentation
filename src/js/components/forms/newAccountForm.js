import React from 'react'
import { createAccount } from './accountActions.js'

class NewAccountForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      verifyPassword: '',
      displayname: '',
      error: ''
    }
    this.createAcc = this.createAcc.bind(this)
  }

  createAcc (ev) {
    if (ev.key === 'Enter') {
      createAccount(this.state)
        .catch(err => {
          this.setState({ error: err.message })
        })
    }
  }

  render () {
    return (
      <div className='form'>
        <h1>Create Account</h1>
        <div>
          <sup>Email</sup>
          <input type='email' placeholder='email' onChange={ev => this.setState({ email: ev.target.value })} value={this.state.email} onKeyDown={this.createAcc} />
        </div>
        <div>
          <sup>Password</sup>
          <input type='password' placeholder='password' onChange={ev => this.setState({ password: ev.target.value })} value={this.state.password} onKeyDown={this.createAcc} />
        </div>
        <div>
          <sup>Verify Password</sup>
          <input type='password' placeholder='verify password' onChange={ev => this.setState({ verifyPassword: ev.target.value })} value={this.state.verifyPassword} onKeyDown={this.createAcc} />
        </div>
        <div>
          <sup>Display Name</sup>
          <input type='displayname' placeholder='displayname' onChange={ev => this.setState({ displayname: ev.target.value })} value={this.state.displayname} onKeyDown={this.createAcc} />
        </div>
        <div className='error'>{this.state.error}</div>
        <div>
          <input type='button' value='Create Account' onClick={() => this.createAcc({ key: 'Enter' })} />
        </div>
      </div>
    )
  }
}

export default NewAccountForm
