import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

type Props = React.PropsWithChildren<RouteProps>

export const PrivateRoute = ({ children, ...rest }: Props) => (
  <Route {...rest} render={props => (
    localStorage.getItem('user')
      ? children
      : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
  )} />
);
