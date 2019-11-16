import { AlertActionType, AlertActionTypes, AlertMessage } from '../constants';

type AlertActionCreator<P = AlertMessage> = (p: P) => AlertActionTypes;

const success: AlertActionCreator = (message) => ({
  type: AlertActionType.SUCCESS,
  message,
});

const error: AlertActionCreator = (message) => ({
  type: AlertActionType.ERROR,
  message,
});


const clear: AlertActionCreator = () => ({
  type: AlertActionType.CLEAR,
});

export const alertActions = {
  success,
  error,
  clear,
};
