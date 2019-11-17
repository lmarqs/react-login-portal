import { AlertActionType, AlertActionTypes, AlertMessage } from '../constants';

export type AlertState = {
  type: 'alert-success' | 'alert-danger';
  message: AlertMessage;
} | null;

export function alert(state: AlertState = null, action: AlertActionTypes): AlertState {
  switch (action.type) {
    case AlertActionType.SUCCESS:
      return { type: 'alert-success', message: action.message };
    case AlertActionType.ERROR:
      return { type: 'alert-danger', message: action.message };
    case AlertActionType.CLEAR:
      return null;
    default:
      return state;
  }
}
