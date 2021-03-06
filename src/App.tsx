import React from "react";
import { Route, Router } from "react-router-dom";
import { connect, MapStateToPropsParam, MapDispatchToProps } from "react-redux";

import { history } from "./helpers";
import { alertActions } from "./actions";
import { AppState } from "./reducers";

import { PrivateRoute } from "./PrivateRoute.js";
import { HomePage } from "./components/HomePage";
import { LoginPage } from "./components/LoginPage";
import { RegisterPage } from "./components/RegisterPage";
import { Snackbar } from "./Snackbar";
import { Alert } from "./components/molecules";


interface OwnProps {

}

interface StateProps {
  alert: AppState["alert"];
}

interface DispatchProps {
  dismissAlert: typeof alertActions.clear;
}

type Props = OwnProps & StateProps & DispatchProps;

interface State {

}

class App extends React.Component<Props, State> {
  public componentDidMount() {
    history.listen(() => this.onDismissAlert());
  }

  private onDismissAlert = () => this.props.dismissAlert();

  public render() {

    const { alert } = this.props;

    return (
      <div className="container">
        <Router history={history}>
          <div className="col-sm-8 col-sm-offset-2">
            <PrivateRoute exact path="/" component={HomePage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/register" component={RegisterPage} />
          </div>
        </Router>
        <Snackbar show={!!alert}>
          {alert && (
            <Alert onDismiss={this.onDismissAlert} type={alert.type}>{alert.message}</Alert>
          )}
        </Snackbar>
      </div>
    );
  }
}


const mapStateToProps: MapStateToPropsParam<StateProps, OwnProps, AppState> = state => {
  const { alert } = state;
  return { alert };
};

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = {
  dismissAlert: alertActions.clear,
};


const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export { ConnectedApp as App };
