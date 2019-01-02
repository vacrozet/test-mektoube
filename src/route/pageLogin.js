import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../css/pageLogin.css'

class pageLogin extends Component {
  constructor (props) {
    super(props)
    this.state = {
      connected: false,
      login: '',
      password: '',
      info: ''
    }
  }
  handleChange (evt) { this.setState({ [evt.target.name]: evt.target.value }) }
  handleConnected () {
    if (this.state.login !== '' && this.state.password !== '') {
      const action = { type: 'CONNECTION', value: [this.state.login, this.state.password] }
      this.props.dispatch(action)
    }
  }
  handleDisconnected () {
    const action = { type: 'CONNECTED_OFF', value: null }
    this.props.dispatch(action)
  }

  render () {
    return (
      <div className='pageLogin'>
        <div className='login-page'>
          <div className='form'>
            {this.props.connected ? (
              <div>
                <div>login: {this.props.info.CONTENT.USER.login}</div>
                <div>email: {this.props.info.CONTENT.USER.email}</div>
                <div>Uuid: {this.props.info.CONTENT.USER.uuid}</div>
                <div>Token: {this.props.info.CONTENT.token}</div>
                <button onClick={this.handleDisconnected.bind(this)}>Logout</button>
              </div>
            ) : (
              <div className='login-form'>
                <input type='text' placeholder='login' name='login' value={this.state.login} onChange={this.handleChange.bind(this)} />
                <input type='password' placeholder='password' name='password' value={this.state.password} onChange={this.handleChange.bind(this)} />
                <button onClick={this.handleConnected.bind(this)}>login</button>
              </div>
            )}
            {this.props.error ? (<div>{this.props.error}</div>) : (null)}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(pageLogin)
