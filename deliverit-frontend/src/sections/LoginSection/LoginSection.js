import React, {Component} from 'react';
import LoginImage from '../../assets/login-img.svg';
import LogoImage from '../../assets/logo.png';
// Add style file
import './LoginSection.css';

class LoginSection extends Component {
    render() {
        return (
            <div className="login-section">
                <div className="login-section--left">
                    <img src={LogoImage} alt="DeliverIt logo"/>
                    <div className="login-section--left__middle">
                        <h1>LOGIN</h1>
                        <p>Welcome back! Log in to start your delivery</p>
                        <form>
                            <p>Username</p>
                            <input type="text" id="username" name="username" placeholder="Username"/> 
                            <p>Password</p>
                            <input type="password" name="password" placeholder="Password"/><br/>
                            <button>LOGIN</button>
                        </form>
                        <p>Forgot your password? <a href="/">Click here</a></p>
                    </div>
                    <p>Don't have an account yet? <a href="/">Register here</a></p>
                </div>
                <div className="login-section--right">
                    <img src={LoginImage} alt="Delivery guy img"/>  
                </div>
            </div>
        );
    }
}

export default LoginSection;