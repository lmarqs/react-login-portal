import { combineReducers } from "redux";

import { alert } from "./alert.reducer";
import { authentication } from "./authentication.reducer";
import { registration } from "./registration.reducer";

const rootReducer = combineReducers({
  alert,
  authentication,
  registration,
});

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer;
