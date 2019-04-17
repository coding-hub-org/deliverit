import React, {Component} from 'react';
import {injectStripe, CardExpiryElement, CardCVCElement, CardNumberElement, PostalCodeElement} from 'react-stripe-elements';
import './CheckoutForm.css';

class CheckoutForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {complete: false};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(ev) {
        ev.preventDefault();
        // User clicked submit
        let {token} = await this.props.stripe.createToken({name: "Name"});
        let response = await fetch("http://localhost:3000/charge", {
            method: "POST",
            headers: {"Content-Type": "text/plain"},
            body: token.id
        });

        if (response.ok) {
            console.log("Purchase Complete!")
            this.setState({complete: true});
        }

    }

    render() {
        if (this.state.complete) return <h1>Purchase Complete</h1>;
        return (
            <div className="checkout-form-component">
                <form onSubmit={this.handleSubmit}>
                    <label>
                    Card number
                    <CardNumberElement/>
                    </label>
                    <label>
                    Expiration date
                    <CardExpiryElement />
                    </label>
                    <section className="checkout-form-component--details">
                        <label>
                        CVC
                        <CardCVCElement/>
                        </label>
                        <label>
                        Postal code
                        <PostalCodeElement/>
                        </label>
                    </section>
                    <button>PURCHASE</button>
                </form>
            </div>
        );
    }
  }
  export default injectStripe(CheckoutForm);