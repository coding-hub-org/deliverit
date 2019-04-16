import React, { Component } from "react";
import { Elements, StripeProvider } from "react-stripe-elements";

import "./CheckoutSection.css";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";
import Footer from "../../components/Footer/Footer";
import { Helmet } from "react-helmet";
import OrderDetail from "../../components/OrderDetail/OrderDetail";

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
				<div className="checkout-section">
					<Helmet>
						<title>DeliverIt | Checkout</title>
					</Helmet>
					<h1>Checkout</h1>
					<div className="checkout-section--wrapper">
						<div className="checkout-section--wrapper__left">
							<div className="checkout-section--wrapper__left--top">
								<h2>DELIVERY DETAILS</h2>
								<hr />
								<p>Gaurav Jayasawal</p>
								<p>Mason Hall, Room 209</p>
								<p>Plattsburgh, NY 12019</p>
								<p>USA</p>
							</div>
							<div className="checkout-section--wrapper__left--bottom">
								<h2>PAYMENT DETAILS</h2>
								<hr />
								<Elements>
									<CheckoutForm />
								</Elements>
							</div>
						</div>
						<div className="checkout-section--wrapper__right">
							<h2>YOUR ORDER</h2>
							<hr />
							<OrderDetail items={this.state.testList} />
						</div>
					</div>
					<Footer />
				</div>
			</StripeProvider>
		);
	}
}

export default CheckoutSection;
