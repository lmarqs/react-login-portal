import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...rest }: RouteProps) => (
  <Route {...rest} render={props => (
    localStorage.getItem('user')
      ? Component && <Component {...props} />
      : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
  )} />
);
