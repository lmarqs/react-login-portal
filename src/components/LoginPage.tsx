import React from "react";
import { Link } from "react-router-dom";
import { connect, MapStateToPropsParam, MapDispatchToProps } from "react-redux";

import { userActions } from "../actions";
import { AppState } from "../reducers";

import { Input, Label } from "./atoms";
import { Field } from "./molecules";

interface OwnProps {
}

type StateProps = {
  loggingIn: boolean;
};

type DispatchProps = {
  login: typeof userActions.login;
}

type Props = OwnProps & StateProps & DispatchProps;

interface State {
  username: string;
  password: string;
  submitted: boolean;
}

class LoginPage extends React.Component<Props, State> {
  public state: State = {
    username: "",
    password: "",
    submitted: false,
  };

  private handleUsernameChange = (e: React.SyntheticEvent<HTMLInputElement>) =>
    this.setState({ username: e.currentTarget.value });

  private handlePasswordChange = (e: React.SyntheticEvent<HTMLInputElement>) =>
    this.setState({ password: e.currentTarget.value });

  private handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    this.setState({ submitted: true });
    const { username, password } = this.state;
    if (username && password) {
      this.props.login(username, password);
    }
  };

  render() {
    const { username, password, submitted } = this.state;

    return (
      <div className="col-md-6 col-md-offset-3">
        <h2>Login</h2>
        <form name="form" onSubmit={this.handleSubmit}>
          <Field hasError={submitted && !username} error="Username is required">
            <Label htmlFor="username">Username</Label>
            <Input type="text" id="username" className="username" onChange={this.handleUsernameChange} value={username} />
          </Field>
          <Field hasError={submitted && !password} error="Password is required">
            <Label htmlFor="password">Password</Label>
            <Input type="password" id="password" className="password" onChange={this.handlePasswordChange} value={password} />
          </Field>
          <div className="form-group">
            <button className="btn btn-primary">Login</button>
            <Link to="/register" className="btn btn-link">Register</Link>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps: MapStateToPropsParam<StateProps, OwnProps, AppState> = state => {
  const { loggingIn } = state.authentication;
  return { loggingIn };
};

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = {
  login: userActions.login,
};

const ConnectedLoginPage = connect(mapStateToProps, mapDispatchToProps)(LoginPage);

export { ConnectedLoginPage as LoginPage };
export { LoginPage as TestLoginPage };
