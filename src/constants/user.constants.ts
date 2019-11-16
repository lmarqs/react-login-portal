import { User } from "../types";

export enum UserConstants {
  REGISTER_REQUEST = 'USERS_REGISTER_REQUEST',
  REGISTER_SUCCESS = 'USERS_REGISTER_SUCCESS',
  REGISTER_FAILURE = 'USERS_REGISTER_FAILURE',

  LOGIN_REQUEST = 'USERS_LOGIN_REQUEST',
  LOGIN_SUCCESS = 'USERS_LOGIN_SUCCESS',
  LOGIN_FAILURE = 'USERS_LOGIN_FAILURE',

  LOGOUT = 'USERS_LOGOUT',
}

interface RegisterRequestAction {
  type: UserConstants.REGISTER_REQUEST;
  user: User;
}

interface RegisterSuccessAction {
  type: typeof UserConstants.REGISTER_SUCCESS;
  user: User;
}

interface RegisterFailureAction {
  type: typeof UserConstants.REGISTER_FAILURE;
}

export type RegisterActionTypes = RegisterRequestAction | RegisterSuccessAction | RegisterFailureAction;


interface LoginRequestAction {
  type: UserConstants.LOGIN_REQUEST;
  user: User;
}

interface LoginSuccessAction {
  type: typeof UserConstants.LOGIN_SUCCESS;
  user: User;
}

interface LoginFailureAction {
  type: typeof UserConstants.LOGIN_FAILURE;
}

interface LogoutAction {
  type: typeof UserConstants.LOGOUT;
}

export type AuthActionTypes = LoginRequestAction | LoginSuccessAction | LoginFailureAction | LogoutAction;
