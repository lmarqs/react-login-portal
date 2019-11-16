import { UserConstants, RegisterActionTypes } from "../constants";

export type RegistrationState = {
  registering: true;
} | {};

export function registration(state: RegistrationState = {}, action: RegisterActionTypes): RegistrationState {
  switch (action.type) {
    case UserConstants.REGISTER_REQUEST:
      return { registering: true };
    case UserConstants.REGISTER_SUCCESS:
    case UserConstants.REGISTER_FAILURE:
      return {};
    default:
      return state;
  }
}
