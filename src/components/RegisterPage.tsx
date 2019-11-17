import React from "react";
import { Link } from "react-router-dom";
import { connect, MapStateToPropsParam, MapDispatchToProps } from "react-redux";

import { Input, Label, ProgressIndicator } from "./atoms";
import { Field } from "./molecules";
import { userActions } from "../actions";
import { AppState } from "../reducers";

interface OwnProps {
}

type StateProps = {
  registering?: boolean;
};

type DispatchProps = {
  register?: typeof userActions.register;
}

type Props = OwnProps & StateProps & DispatchProps;

interface State {
  username: string;
  password: string;
  submitted: boolean;
}

class RegisterPage extends React.Component<Props, State> {
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

    if (!this.props.register) {
      return;
    }

    this.setState({ submitted: true });
    const { username, password } = this.state;
    if (username && password) {
      this.props.register({ username, password });
    }
  }

  public render() {
    const { registering } = this.props;
    const { username, password, submitted } = this.state;
    return (
      <div className="col-md-6 col-md-offset-3">
        <h2>Register</h2>
        <form name="form" onSubmit={this.handleSubmit}>
          <Field hasError={submitted && !username} error="Username is required">
            <Label htmlFor="username">Username</Label>
            <Input type="text" id="username" extraClassName="username" onChange={this.handleUsernameChange} value={username} />
          </Field>
          <Field hasError={submitted && !password} error="Password is required">
            <Label htmlFor="password">Password</Label>
            <Input type="password" id="password" extraClassName="password" onChange={this.handlePasswordChange} value={password} />
          </Field>
          <div className="form-group">
            <button className="btn btn-primary">Register</button>
            {registering && <ProgressIndicator height="32" />}
            <Link to="/login" className="btn btn-link">Cancel</Link>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps: MapStateToPropsParam<StateProps, OwnProps, AppState> = state => {
  const { registering } = state.registration;
  return { registering };
};

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = {
  register: userActions.register,
};

const ConnectedRegisterPage = connect(mapStateToProps, mapDispatchToProps)(RegisterPage);

export { ConnectedRegisterPage as RegisterPage };
export { RegisterPage as TestRegisterPage };
