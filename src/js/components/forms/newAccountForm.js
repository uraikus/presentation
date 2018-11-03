import React from 'react'

class NewAccountForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      verifyPassword: '',
      displayname: ''
    }
  }

  render () {
    return (
      <React.Fragment>
        <h1>Create Account</h1>
        <div>
          <sup>Email</sup>
          <input type='email' placeholder='email' onChange={ev => this.setState({ email: ev.target.value })} value={this.state.email} />
        </div>
        <div>
          <sup>Password</sup>
          <input type='password' placeholder='password' onChange={ev => this.setState({ password: ev.target.value })} value={this.state.password} />
        </div>
        <div>
          <sup>Verify Password</sup>
          <input type='password' placeholder='verify password' onChange={ev => this.setState({ verifyPassword: ev.target.value })} value={this.state.verifyPassword} />
        </div>
        <div>
          <sup>Display Name</sup>
          <input type='displayname' placeholder='displayname' onChange={ev => this.setState({ displayname: ev.target.value })} value={this.state.displayname} />
        </div>
        <div>
          <input type='button' value='Login' />
        </div>
      </React.Fragment>
    )
  }
}

export default NewAccountForm
