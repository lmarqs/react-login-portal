import { UserConstants, AuthActionTypes } from "../constants";
import { User } from "../types";

const user = JSON.parse(localStorage.getItem("user") || '"undefined"');
const initialState: AuthenticationState = user ? { loggedIn: true, user } : {};

export type AuthenticationState = {
  loggedIn?: true;
  loggingIn?: true;
  user?: User;
} | {};

export function authentication(state: AuthenticationState = initialState, action: AuthActionTypes): AuthenticationState {
  switch (action.type) {
    case UserConstants.LOGIN_REQUEST:
      return { loggingIn: true, user: action.user };
    case UserConstants.LOGIN_SUCCESS:
      return { loggedIn: true, user: action.user };
    case UserConstants.LOGIN_FAILURE:
    case UserConstants.LOGOUT:
      return {};
    default:
      return state;
  }
}
