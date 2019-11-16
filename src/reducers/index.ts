import { combineReducers } from "redux";

import { alert, AlertState } from "./alert.reducer";
import { authentication, AuthenticationState } from "./authentication.reducer";
import { registration, RegistrationState } from "./registration.reducer";

export interface AppState {
  alert: AlertState;
  authentication: AuthenticationState;
  registration: RegistrationState;
}

export const rootReducer = combineReducers<AppState>({
  alert,
  authentication,
  registration,
});
