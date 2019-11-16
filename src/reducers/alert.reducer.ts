import { AlertActionType, AlertActionTypes, AlertMessage } from '../constants';

type AlertState = {
  type: 'alert-success' | 'alert-danger';
  message: AlertMessage;
} | {};

export function alert(state: AlertState = {}, action: AlertActionTypes): AlertState {
  switch (action.type) {
    case AlertActionType.SUCCESS:
      return { type: 'alert-success', message: action.message };
    case AlertActionType.ERROR:
      return { type: 'alert-danger', message: action.message };
    case AlertActionType.CLEAR:
      return {};
    default:
      return state;
  }
}
