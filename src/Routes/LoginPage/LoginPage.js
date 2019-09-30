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

  handleLoginSuccess = () => {    
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/'
    history.push(destination)
    this.setState({error:null}) 
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
