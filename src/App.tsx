import React from "react";
import { Route, Router, Redirect, Switch } from "react-router-dom";
import { connect, MapStateToPropsParam, MapDispatchToProps } from "react-redux";

import "./App.css";

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
        <div className="col-sm-8 col-sm-offset-2">
          <Router history={history}>
            <Switch>
              <PrivateRoute exact path="/" component={HomePage} />
              <Route exact path="/login" component={LoginPage} />
              <Route path="/register" component={RegisterPage} />
              <Redirect from="*" to="/" />
            </Switch>
          </Router>
        </div>
        <Snackbar show={!!alert}>
          {alert && (
            <Alert onDismiss={this.onDismissAlert} type={alert.type}>{alert.message}</Alert>
          )}
        </Snackbar>
      </div >
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
