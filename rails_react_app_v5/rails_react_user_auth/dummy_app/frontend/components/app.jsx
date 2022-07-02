// React
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Styling
import { Reset } from 'styled-reset';

// Components
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import SplashPageContainer from './splashpage/splashpage_container';
import HomePageContainer from './homepage/homepage_container';

import { AuthRoute, ProtectedRoute } from '../util/route_util';



export const App = () => {
  return (
    <div className='main'>
      <Reset />
      <Switch>
        <Route exact path='/' component={SplashPageContainer} />
        <AuthRoute path='/signup' component={SignupFormContainer} />
        <AuthRoute path='/login' component={LoginFormContainer} />
        <ProtectedRoute path='/users/show' component={HomePageContainer} />
      </Switch>
    </div>
  )
}