import React from 'react';
import './Footer.css';

// Import images
import Logo from '../../assets/logo.png';

const Footer = () => {
    return (
        <div className={'footer-component'}>
            <img src={Logo} alt=""/>
            <section className={'footer-component--join'}>
                <h3>JOIN US</h3>
                <a href="#">About Delivery</a>
                <a href="#">Meet the team</a>
            </section>
        </div>       
    );
}

export default Footer;