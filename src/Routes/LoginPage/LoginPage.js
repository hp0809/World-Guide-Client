import React, { Component } from 'react'
import LoginForm from '../../Components/LoginForm/LoginForm'
import { Section } from '../../Components/Utils/Utils'
import APIContext from '../../APIContext'

export default class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  state = {error:null}

  handleLoginSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/'
    this.setState({error:null})
    history.push(destination)
    console.log(window.localStorage)
    
  }

  render() {
    return (
      <APIContext.Consumer>
        {value => {
          return <Section className='LoginPage'>
                  <h2>Login</h2>
                  <LoginForm
                    onLoginSuccess={this.handleLoginSuccess}
                  />
                </Section>
        }}
        
      </APIContext.Consumer>
    )
  }
}