import { AlertActionType, AlertActionTypes, AlertMessage } from '../constants';

type AlertActionCreator<M = AlertMessage> = (message: M) => AlertActionTypes;

const success: AlertActionCreator = (message) => ({
  type: AlertActionType.SUCCESS,
  message: String(message),
});

const error: AlertActionCreator = (message) => ({
  type: AlertActionType.ERROR,
  message: String(message),
});


const clear: AlertActionCreator<void> = () => ({
  type: AlertActionType.CLEAR,
});

export const alertActions = {
  success,
  error,
  clear,
};
