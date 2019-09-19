import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import UserService from '../../services/user-service'
import IdleService from '../../services/idle-service'
import CountryDetails from '../../services/country-details-service'
import LanguageService from '../../services/language-service'
import PlacesService from '../../services/places-service'
import './Header.css'

export default class Header extends Component {
  state = { error: null}

  handleLogoutClick = () => {
    TokenService.clearAuthToken()
    UserService.clearUserInfo()
    TokenService.clearCallbackBeforeExpiry()
    IdleService.unRegisterIdleResets()
    this.setState({error: null})
  }

  handleClick = () => {
    CountryDetails.clearCountryDetails();
    LanguageService.clearLanguageInfo();
    PlacesService.clearPlaceInfo();
    
}

  renderLogoutLink() {
    return (
      <div className='Header_logged-in'>
        <Link
          onClick={this.handleLogoutClick}
          to='/'>
          Logout
        </Link>
      </div>
    )
  }

  renderLoginLink() {
    
    return (
      <div className='Header_not-logged-in'>
        <Link
          to='/login'>
          Log in
        </Link>
        <Link
          to='/register'>
          Register
        </Link>
      </div>
    )
  }

  render() {
    return <>
      <nav className='Header'>
        <h1>
          <Link to='/'
            onClick={this.handleClick}>
            World Guide
          </Link>
        </h1>
       
        
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </nav>
    </>
  }
}
