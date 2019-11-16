export enum AlertActionType {
  SUCCESS = 'ALERT_SUCCESS',
  ERROR = 'ALERT_ERROR',
  CLEAR = 'ALERT_CLEAR'
}

export type AlertMessage = string;

interface AlertSuccessAction {
  type: AlertActionType.SUCCESS;
  message: AlertMessage;
}

interface AlertErrorAction {
  type: typeof AlertActionType.ERROR;
  message: AlertMessage;
}

interface AlertClearAction {
  type: typeof AlertActionType.CLEAR;
}

export type AlertActionTypes = AlertSuccessAction | AlertErrorAction | AlertClearAction;
