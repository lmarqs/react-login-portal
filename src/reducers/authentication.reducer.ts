import { UserConstants, AuthActionTypes } from "../constants";
import { User } from "../types";

const user = JSON.parse(localStorage.getItem("user") || 'null');

const initialState: AuthenticationState = { loggingIn: false, loggedIn: true, user };

export type AuthenticationState = {
  loggedIn: boolean;
  loggingIn: boolean;
  user: User | null;
};

export function authentication(state: AuthenticationState = initialState, action: AuthActionTypes): AuthenticationState {
  switch (action.type) {
    case UserConstants.LOGIN_REQUEST:
      return { loggingIn: true, loggedIn: false, user: null };
    case UserConstants.LOGIN_SUCCESS:
      return { loggingIn: false, loggedIn: false, user: action.user };
    case UserConstants.LOGIN_FAILURE:
    case UserConstants.LOGOUT:
      return { loggingIn: false, loggedIn: false, user: null };
    default:
      return state;
  }
}
