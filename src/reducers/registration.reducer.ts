import { UserConstants, RegisterActionTypes } from "../constants";

export type RegistrationState = {
  registering: boolean;
};

export function registration(state: RegistrationState = { registering: false }, action: RegisterActionTypes): RegistrationState {
  switch (action.type) {
    case UserConstants.REGISTER_REQUEST:
      return { registering: true };
    case UserConstants.REGISTER_SUCCESS:
    case UserConstants.REGISTER_FAILURE:
      return { registering: false };
    default:
      return state;
  }
}
