import React, { Component } from 'react'
import { Button, Input, Required } from '../Utils/Utils'
import AuthApiService from '../../services/auth-api-service';

export default class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {}
  }

  state = { error: null }

  handleSubmit = ev => {
    ev.preventDefault()
    const { nick_name, user_name, password } = ev.target

    this.setState({ error: null})
    AuthApiService.postUser({
      user_name: user_name.value,
      password: password.value,
      nickname: nick_name.value,
    })
      .then(user => {
        nick_name.value = ''
        user_name.value = ''
        password.value = ''
        this.props.onRegistrationSuccess()
      })
      .catch(res => {
        this.setState({error: res.error.message})
      })
    
  }

  render() {
    const { error } = this.state
    return (
      <form
        className='RegistrationForm'
        onSubmit={this.handleSubmit}
      >
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <div className='user_name'>
          <label htmlFor='RegistrationForm_user_name'>
            User name <Required />
          </label>
          <Input
            name='user_name'
            type='text'
            required
            id='RegistrationForm_user_name'>
          </Input>
        </div>
        <div className='password'>
          <label htmlFor='RegistrationForm_password'>
            Password <Required />
          </label>
          <Input
            name='password'
            type='password'
            required
            id='RegistrationForm_password'>
          </Input>
        </div>
        <div className='nick_name'>
          <label htmlFor='RegistrationForm_nick_name'>
            Nickname
          </label>
          <Input
            name='nick_name'
            type='text'
            required
            id='RegistrationForm__nick_name'>
          </Input>
        </div>
        <Button type='submit'>
          Register
        </Button>
      </form>
    )
  }
}
