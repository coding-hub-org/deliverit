import React, { Component } from "react";
import {Elements, StripeProvider} from 'react-stripe-elements';

import "./CheckoutSection.css"; 
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";

class CheckoutSection extends Component {
    constructor(props) {
    super(props);
    this.state = {
        cardName: null,
        cardNumber: null,
        cardDate: null,
        cardCode: null,
        testList: [
        { id: "001", name: "Gaurav", quantity: 1, price: 1 },
        { id: "002", name: "Gaurav", quantity: 1, price: 1 },
        { id: "003", name: "Gaurav", quantity: 1, price: 1 },
        { id: "004", name: "Gaurav", quantity: 1, price: 1 },
        { id: "005", name: "Gaurav", quantity: 1, price: 1 },
        { id: "006", name: "Gaurav", quantity: 1, price: 1 },
        { id: "007", name: "Gaurav", quantity: 1, price: 1 },
        { id: "008", name: "Gaurav", quantity: 1, price: 1 },
        { id: "009", name: "Gaurav", quantity: 1, price: 1 },
        { id: "010", name: "Gaurav", quantity: 1, price: 1 },
        { id: "011", name: "Gaurav", quantity: 1, price: 1 },
        { id: "012", name: "Gaurav", quantity: 1, price: 1 },
        { id: "013", name: "Gaurav", quantity: 1, price: 1 },
        { id: "014", name: "Gaurav", quantity: 1, price: 1 },
        { id: "015", name: "Logo", quantity: 2, price: 100 }
        ],
        subTotal: 0,
        deliveryFee: 100,
        total: 0,
        taxes: 0.8
    };
    }

    render() {
        return (
            <StripeProvider apiKey="pk_test_u1NsnlMIu7B2ps8EUDI4N2xS00AAT2yzuu">
                <div>
                    <h1>React Stripe Elements Example</h1>
                    <Elements>
                        <CheckoutForm/>
                    </Elements>
                </div>
            </StripeProvider>
        )
    }
}

export default CheckoutSection;
