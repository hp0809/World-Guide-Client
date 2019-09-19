import React, {Component} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
//import PrivateRoute from '../Utils/PrivateRoute';
import PublicOnlyRoute from '../Utils/PublicOnlyRoute';
import LandingPage from '../../Routes/LandingPage/LandingPage'
import LoginPage from '../../Routes/LoginPage/LoginPage';
import RegistrationPage from '../../Routes/RegistrationPage/RegistrationPage';
import CountryPage from '../../Routes/CountryPage/CountryPage'
import NotFoundPage from '../../Routes/NotFoundPage/NotFoundPage';
import Header from '../Header/Header';
import IdleService from '../../services/idle-service'
import TokenService from '../../services/token-service'
import AuthApiService from '../../services/auth-api-service'
import APIContext from '../../APIContext'
import './App.css'


class App extends Component {
  state = {
    hasError: false,
    userInfo: null,
    world_guide_users:[],
    countryName: '',
    map: '',
    flag:'',
    capital:'',
    language:'',
    currency:'',
    hello: '',
    goodbye:'',
    thank_you:'',
    excuse_me:'',
    please:'',
    sorry:'',
    toilet:'',
    english:'',
    cost:'',
    would_like:''
   }
  
  static getDerivedStateFromError(error) {
    console.log(error)
    return { hasError: true}
  }

  componentDidMount() {
    IdleService.setIdleCallback(this.logoutFromIdle)

    if (TokenService.hasAuthToken()) {
      IdleService.regiserIdleTimerResets()
      TokenService.queueCallbackBeforeExpiry(() => {
        AuthApiService.postRefreshToken()
      })
    }
    
  }

  componentWillUnmount() {
    IdleService.unRegisterIdleResets()
    TokenService.clearCallbackBeforeExpiry()
  }

  logoutFromIdle = () => {
    TokenService.clearAuthToken()
    TokenService.clearCallbackBeforeExpiry()
    IdleService.unRegisterIdleResets()
    this.forceUpdate()
  
  }

  handleSetUserInfo = userInfo => { 
    this.setState({ 
      userInfo: userInfo
    })
  }

  render() {
    const value = {
      userInfo: this.state.userInfo,
      world_guide_users: this.state.world_guide_users,
      countryName: this.state.countryName,
      map: this.state.map,
      flag: this.state.flag,
      capital: this.state.capital,
      language: this.state.language,
      currency: this.state.currency,
      hello: this.state.hello,
      goodbye: this.state.goodbye,
      thank_you: this.state.thank_you,
      excuse_me: this.state.excuse_me,
      please: this.state.please,
      sorry: this.state.sorry,
      toilet: this.state.toilet,
      english: this.state.english,
      cost: this.state.cost,
      would_like: this.state.would_like
    }
    return (
      <APIContext.Provider value={value}>
      <div className='App'>
       <header className='App_header'>
         <Header />
       </header>
       <main className='App_main'>
        {this.state.hasError && <p className='red'>There was an error! Oh no!</p>}
        <Switch>
          <Route 
            exact
            path={'/'}
            component={LandingPage}
          />
          
          <PublicOnlyRoute
            path={'/login'}
            component={LoginPage}
          />
          <PublicOnlyRoute
            path={'/register'}
            component={RegistrationPage}
          />
          <Route
            
            path={'/country/:countryName'}
            component={CountryPage}
          />
          <Route path='/404' component={NotFoundPage} />
          <Redirect from='*' to='/404' />
        </Switch>
       </main>
      </div>
      </APIContext.Provider>
    );
  }
}
 export default App;