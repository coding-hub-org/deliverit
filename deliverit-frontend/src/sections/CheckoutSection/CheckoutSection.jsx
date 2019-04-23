import React, { Component } from "react";
import { Elements, StripeProvider } from "react-stripe-elements";

import "./CheckoutSection.css";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";
import Footer from "../../components/Footer/Footer";
import { Helmet } from "react-helmet";
import OrderDetail from "../../components/OrderDetail/OrderDetail";

export const CheckoutContext = React.createContext();

export class CheckoutProvider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cardName: null,
			cardNumber: null,
			cardDate: null,
			cardCode: null,
			testList: [{ id: "001", name: "Gaurav", quantity: 1, price: 1 }],
			subTotal: 0,
			deliveryFee: 100,
			total: 0,
			taxes: 0.8
		};

		this.addToCart = this.addToCart.bind(this);
	}

	addToCart(data) {
		this.setState({
			testList: [
				...this.state.testList,
				{ id: "001", name: data.dish, quantity: 1, price: data.price }
			]
		});
	}

	render() {
		return (
			<CheckoutContext.Provider
				value={{
					state: this.state,
					addToCart: this.addToCart
				}}
			>
				{this.props.children}
			</CheckoutContext.Provider>
		);
	}
}

class CheckoutSection extends Component {
    constructor(props) {
      super(props);
      this.state = {
          userDetails: [];
      }
    }
    
    componentDidMount = () => {
    fetch("http://127.0.0.1:3000/users?email=jgaurav6@gmail.com", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        return res.json();
        // console.log(res.json());
      })
      .then(userDetails => {
        this.setState({ userDetails });
        // console.log(JSON.stringify(myJson));
        console.log(this.state);
      });
  };
    
	render() {
		return (
			<CheckoutContext.Consumer>
				{context => (
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
                    {this.state.userDetails.fullName === undefined
                  ? ""
                  : this.state.userDetails.addresses.map(addr => (
                      <div>
                        <p>
                          {this.state.userDetails.fullName === undefined
                            ? ""
                            : this.state.userDetails.fullName}
                        </p>
                        <p>
                          {addr.address}
                          <br />
                          <br />
                        </p>
                      </div>
                    ))}
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
									<OrderDetail items={context.state.testList} />
								</div>
							</div>
							<Footer />
						</div>
					</StripeProvider>
				)}
			</CheckoutContext.Consumer>
		);
	}
}

export default CheckoutSection;
