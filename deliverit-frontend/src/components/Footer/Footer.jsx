import React from 'react';
import './Footer.css';

// Import images
import Logo from '../../assets/logo.png';
import Facebook from '../../assets/facebook-img.svg';
import Github from '../../assets/github-img.svg';
import Instagram from '../../assets/instagram-img.svg';
import LinkedIn from '../../assets/linkedin-img.svg';


const Footer = () => {
    return (
        <div className={'footer-component'}>
            <div className={'footer-component--wrapper'}>
                <div className={'footer-component--wrapper__top'}>
                    <img src={Logo} alt=""/>
                    <section className={'footer-component--join'}>
                        <h2>JOIN US</h2>
                        <a href="#">About Delivery</a>
                        <a href="#">Meet the team</a>
                        <a href="#">Careers</a>
                    </section>
                    <section className={'footer-component--help'}>
                        <h2>HELP</h2>
                        <a href="#">FAQ</a>
                        <a href="#">Contact us</a>
                    </section>
                    <section className={'footer-component--legal'}>
                        <h2>LEGAL</h2>
                        <a href="#">Terms & conditions</a>
                        <a href="#">Privacy policy</a>
                    </section>
                    <section className={'footer-component--follow'}>
                        <h2>FOLLOW US</h2>
                        <a href="#"><img src={Instagram} alt=""/> Instagram</a>
                        <a href="#"><img src={Github} alt=""/>Github</a>
                        <a href="#"><img src={LinkedIn} alt=""/>Linkedin</a>
                        <a href="#"><img src={Facebook} alt=""/>Facebook</a>
                    </section>
                </div>
                <hr/>
                <div className={'footer-component--wrapper__bottom'}>
                    <p>© 2019 Deliverit | Coding Hub</p>
                </div>
            </div>
        </div>       
    );
}

export default Footer;