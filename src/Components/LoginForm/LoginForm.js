import React, { Component } from 'react'
import AuthApiService from '../../services/auth-api-service'
import { Button, Input } from '../Utils/Utils'
import APIContext from '../../APIContext'

export default class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
    
  }

  state = { error:  null }

  static contextType = APIContext;

  handleSubmitJwtAuth = ev => {
    
    ev.preventDefault()
    this.setState({error: null})
    const {user_name, password} = ev.target

    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value
    })
      .then(res => {
        user_name.value = ''
        password.value = ''
        
        this.props.onLoginSuccess();  
        
        
      })
      .catch(res => {
        this.setState({error: res.error})
     })
  }

  render() {
    const { error } = this.state
    return (
      <form
        className='LoginForm'
        onSubmit={this.handleSubmitJwtAuth}
      >
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <div className='user_name'>
          <label htmlFor='LoginForm_user_name'>
            User name
          </label>
          <Input
            required
            name='user_name'
            id='LoginForm__user_name'>
          </Input>
        </div>
        <div className='password'>
          <label htmlFor='LoginForm_password'>
            Password
          </label>
          <Input
            required
            name='password'
            type='password'
            id='LoginForm_password'>
          </Input>
        </div>
        <Button type='submit'>
          Login
        </Button>
      </form>
    )
  }
}
