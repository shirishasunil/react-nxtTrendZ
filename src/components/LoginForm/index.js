import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', showSubmitError: false, errorMessage: ''}

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  renderInputNameFiled = () => {
    const {username} = this.state
    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          id="username"
          type="text"
          value={username}
          className="username-input-filed"
          onChange={this.onChangeUsername}
          placeholder="Username"
        />
      </>
    )
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  renderInputPasswordFiled = () => {
    const {password} = this.state
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          id="password"
          type="password"
          value={password}
          className="username-input-filed"
          onChange={this.onChangePassword}
          placeholder="Password"
        />
      </>
    )
  }

  OnSubmitSuccuss = () => {
    console.log(this.props)
    const {history} = this.props
    history.replace('/')
  }

  OnFailureSubmit = errorMsg => {
    console.log(errorMsg)
    this.setState({showSubmitError: true, errorMessage: errorMsg})
  }

  onSubmitLogin = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    console.log(response)
    if (response.ok === true) {
      this.OnSubmitSuccuss()
    } else {
      this.OnFailureSubmit(data.error_msg)
    }
  }

  render() {
    const {showSubmitError, errorMessage} = this.state
    return (
      <div className="login-form-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="website-form-logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="website-login-image"
        />
        <form className="form-container" onSubmit={this.onSubmitLogin}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="website-logo-desktop"
          />
          <div className="input-container">{this.renderInputNameFiled()}</div>
          <div className="input-container">
            {this.renderInputPasswordFiled()}
          </div>
          <button type="submit" className="button">
            Login
          </button>
          {showSubmitError && <p className="error-msg">*{errorMessage}</p>}
        </form>
      </div>
    )
  }
}
export default LoginForm
