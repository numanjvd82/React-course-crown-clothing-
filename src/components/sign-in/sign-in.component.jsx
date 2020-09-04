import React from 'react';

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ email: '', password: '' });
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>Already Have an Account! Sign In</h2>
        <span>Sign In with your Credentials</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="Email"
            required
          />

          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <div className="button-div">
            <Button type="submit">Sign In</Button>
            <Button onClick={signInWithGoogle} googleSignIn>
              Sign In with Google
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
