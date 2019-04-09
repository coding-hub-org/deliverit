import React, {Component} from 'react';
import LoginImage from '../../assets/login-img.svg';
import LogoImage from '../../assets/logo.svg';
import Footer from '../../components/Footer/Footer';
import { withRouter } from 'react-router-dom';
import { withFirebase } from '../../components/Firebase';
import { compose } from 'recompose';
import { SignUpLink } from '../SignUpSection/SignUpSection';
import * as ROUTES from '../../constants/routes';

// Add style file
import './LoginSection.css';

const LoginSection = () => (
    <div className="login-section">
        <div className="login-section--wrapper">
            <div className="login-section--left">
                <img src={LogoImage} alt="DeliverIt logo"/>
                <div className="login-section--left__middle">
                    <h1>LOGIN</h1>
                    <p>Welcome back! Log in to start your delivery</p>
                    <SignInForm />
                    <SignUpLink />
                </div>
            </div>
            <div className="login-section--right">
                <div className="login-section--right">
                    <img src={LoginImage} alt="Delivery guy img"/>  
                </div>
            </div>
        </div>
        <Footer/>
    </div>
);

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        // this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === '' || email === '';

    return (
      <form onSubmit={this.onSubmit}>
        <p>Username</p>
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />

        <p>Password</p>
        <input
          name="password"
          value={password}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />

        <button disabled={isInvalid} type="submit">
          LOGIN
        </button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase);

withRouter(withFirebase(SignInForm));

export default LoginSection;

export { SignInForm };
