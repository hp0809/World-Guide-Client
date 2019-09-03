import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
//import PrivateRoute from '../Utils/PrivateRoute';
//import PublicOnlyRoute from '../Utils/PublicOnlyRoute';
import LandingPage from '../../Routes/LandingPage/LandingPage'
import LoginPage from '../../Routes/LoginPage/LoginPage';
import RegistrationPage from '../../Routes/RegistrationPage/RegistrationPage';
import CountryPage from '../../Routes/CountryPage/CountryPage'
import NotFoundPage from '../../Routes/NotFoundPage/NotFoundPage';
import Header from '../Header/Header'


//import './App.css';

class App extends Component {
  state = { hasError: false }

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }

  render() {
    return (
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
          <Route
            path={'/login'}
            component={LoginPage}
          />
          <Route
            path={'/register'}
            component={RegistrationPage}
          />
          <Route
            path={'/countryPage/'}
            component={CountryPage}
          />
          <Route
            component={NotFoundPage}
          />
        </Switch>
       </main>
      </div>
    );
  }
}
 export default App;