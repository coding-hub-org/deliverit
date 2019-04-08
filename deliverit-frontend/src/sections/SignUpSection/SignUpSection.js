import React, { Component } from 'react';
import { withFirebase } from '../../components/Firebase'
import * as ROUTES from '../../constants/routes';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import './SignUpSection.css';
import Footer from '../../components/Footer/Footer';
import RegisterImage from '../../assets/register-img.svg';
import LogoImage from '../../assets/logo.svg';

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
};

const SignUpSection = () => (
    <div className="signup-section">
        <div className="signup-section--wrapper">
            <div className="signup-section--left">
                <img src={LogoImage} alt="DeliverIt logo"/>
                <div className="signup-section--left__middle">
                    <h1>SIGN UP</h1>
                    <p>Welcome back! Log in to start your delivery</p>
                    <SignUpForm />
                </div>
            </div>
            <div className="signup-section--right">
                <div className="signup-section--right">
                    <img src={RegisterImage} alt="Delivery guy img"/>  
                </div>
            </div>
        </div>
        <Footer/>
    </div>
);

class SignUpFormBase extends Component {
    state = { ...INITIAL_STATE };

    onSubmit = event => {
        const { username, email, passwordOne } = this.state;

        this.props.firebase
        .doCreateUserWithEmailAndPassword(email, passwordOne)
        .then(authUser => {
            this.setState({ ...INITIAL_STATE });
            this.props.history.push(ROUTES.HOME);
        })
        .catch(error => {
            this.setState({ error });
        });
        event.preventDefault();
    }

    onChange = event => {
        this.setState({ 
            [event.target.name]: event.target.value 
        });
    };
    

    render() {
        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            error,
        } = this.state; 
        
        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            username === '';

        
        return (
            <form onSubmit={this.onSubmit}>
                <p>Username</p>
                <input
                    name="username"
                    value={username}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Full Name"
                />
                <p>Email</p>
                <input
                    name="email"
                    value={email}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Email Address"
                />
                <p>Password</p>
                <input
                    name="passwordOne"
                    value={passwordOne}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Password"
                />
                <p>Confirm Password</p>
                <input
                    name="passwordTwo"
                    value={passwordTwo}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Confirm Password"
                />
                <button disabled={isInvalid} type="submit">
                    Sign Up
                </button>
                {error && <p>{error.message}</p>}
            </form>
        );
    }
}

const SignUpLink = () => (
    <p>
        Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
    </p>
);

const SignUpForm = compose(
    withRouter,
    withFirebase,
  )(SignUpFormBase);
  
export default SignUpSection;

export { SignUpForm, SignUpLink };