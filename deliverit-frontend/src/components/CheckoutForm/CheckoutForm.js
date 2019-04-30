import React, { useState } from "react";
import {
  injectStripe,
  CardExpiryElement,
  CardCVCElement,
  CardNumberElement,
  PostalCodeElement
} from "react-stripe-elements";
import "./CheckoutForm.css";

const CheckoutForm = props => {
  const [complete, setComplete] = useState(false);

  async function handleSubmit(ev) {
    ev.preventDefault();
    // User clicked submit
    let { token } = await props.stripe.createToken({ name: "Name" });
    let response = await fetch("http://localhost:3000/charge", {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: token.id
    });

    if (response.ok) {
      console.log("Purchase Complete!");
      setComplete(true);
    }
  }

  if (complete) return <h1>Purchase Complete</h1>;
  return (
    <div className="checkout-form-component">
      <form onSubmit={handleSubmit}>
        <label>
          Card number
          <CardNumberElement />
        </label>
        <label>
          Expiration date
          <CardExpiryElement />
        </label>
        <section className="checkout-form-component--details">
          <label>
            CVC
            <CardCVCElement />
          </label>
          <label>
            Postal code
            <PostalCodeElement />
          </label>
        </section>
        <button>PURCHASE</button>
      </form>
    </div>
  );
};

export default injectStripe(CheckoutForm);
