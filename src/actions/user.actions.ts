import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { AppState } from '../reducers';
import { alertActions } from './alert.actions';
import { User } from "../types";
import { UserConstants } from "../constants";
import { userService } from "../services";
import { history } from "../helpers";

type AppThunkAction = ThunkAction<Promise<void>, AppState, null, AnyAction>;

const login = (username: string, password: string): AppThunkAction => {

  return async dispatch => {
    dispatch(request({ username }));

    try {
      const user = await userService.login(username, password);
      dispatch(success(user));
      history.push('/');
    } catch (e) {
      dispatch(failure());
      dispatch(alertActions.error(e));
    }
  };

  function request(user: User) {
    return { type: UserConstants.LOGIN_REQUEST, user };
  }

  function success(user: User) {
    return { type: UserConstants.LOGIN_SUCCESS, user };
  }

  function failure() {
    return { type: UserConstants.LOGIN_FAILURE };
  }
};

const logout = () => {
  userService.logout();
  return { type: UserConstants.LOGOUT };
};

const register = (user: User): AppThunkAction => {
  return async dispatch => {
    dispatch(request(user));

    try {
      await userService.register(user);
      dispatch(success(user));
      history.push('/');
    } catch (e) {
      dispatch(failure());
      dispatch(alertActions.error(e));
    }
  };


  function request(user: User) {
    return { type: UserConstants.REGISTER_REQUEST, user };
  }
  function success(user: User) {
    return { type: UserConstants.REGISTER_SUCCESS, user };
  }
  function failure() {
    return { type: UserConstants.REGISTER_FAILURE };
  }
};


export const userActions = {
  login,
  logout,
  register,
};
