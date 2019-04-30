import React, { useState, useEffect } from "react";
import { Elements, StripeProvider } from "react-stripe-elements";

import "./CheckoutSection.css";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";
import Footer from "../../components/Footer/Footer";
import { Helmet } from "react-helmet";
import OrderDetail from "../../components/OrderDetail/OrderDetail";

export const CheckoutContext = React.createContext();

export const CheckoutProvider = props => {
  const [cardName] = useState(null);
  const [cardNumber] = useState(null);
  const [cardDate] = useState(null);
  const [cardCode] = useState(null);
  const [testList, setTestList] = useState([]);
  const [subTotal] = useState(0);
  const [deliveryFee] = useState(100);
  const [total] = useState(0);
  const [taxes] = useState(0.8);

  const addToCart = data => {
    setTestList([
      ...testList,
      { id: "001", name: data.itemName, quantity: 1, price: data.price }
    ]);
  };

  const allStates = {
    cardName,
    cardNumber,
    cardDate,
    cardCode,
    testList,
    subTotal,
    deliveryFee,
    total,
    taxes
  };

  return (
    <CheckoutContext.Provider
      value={{
        state: allStates,
        addToCart: addToCart
      }}
    >
      {props.children}
    </CheckoutContext.Provider>
  );
};

const CheckoutSection = () => {
  const [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:3000/users?email=jgaurav6@gmail.com", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        return res.json();
      })
      .then(userDetails => {
        setUserDetails(userDetails);
      });
  }, []);

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
                  {userDetails.fullName === undefined
                    ? ""
                    : userDetails.addresses.map(addr => (
                        <div>
                          <p>
                            {userDetails.fullName === undefined
                              ? ""
                              : userDetails.fullName}
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
};

export default CheckoutSection;
