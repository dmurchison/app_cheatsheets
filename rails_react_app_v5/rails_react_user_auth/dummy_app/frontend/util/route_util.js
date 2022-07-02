
// This file produces 2 routes to specify in the entry.js file for users that -
// are logged in and users who arent.

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

// Meaning the output renders a new session
const Auth = ({ component: Component, path, LoggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
    !LoggedIn ? <Component {...props} /> : <Redirect to="/" />
  )} />
);

// Only available to users who are logged in. (Redirect :19)
const Protected = ({ component: Component, path, LoggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
    LoggedIn ? <Component {...props} /> : <Redirect to="/login" />
  )} />
);


const mapStateToProps = state => (
  {loggedIn: Boolean(state.session.CurrentUserId)}
);

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));