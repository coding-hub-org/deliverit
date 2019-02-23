import React, {Component} from 'react';
import './PaymentForm.css';
import Title from '../Title/Title';

const PaymentForm = (props)=>
{
    const handleChange = (e)=>
    {
        props.handleChange(e);
        console.log("change");
    }
    const handleSubmit = (e)=>
    {
        props.handleSubmit(e);
        console.log("submit");
    }
    return(
        <div className="payment-form-component">
            <Title title="PAYMENT DETAILS"/>
            <form className="payment-form-component__form" onSubmit={handleSubmit}>
                <label htmlFor="cardName">NAME ON CARD</label>
                <input type="text" id="cardName" onChange={handleChange}/>
                <label htmlFor="cardNumber">CARD NUMBER</label>
                <input type="text" id="cardNumber" onChange={handleChange}/>
                <div className="payment-form-component__form__authentication">
                    <div>
                        <label htmlFor="cardDate">EXPIRATION DATE</label>
                        <input type="date" id="cardDate" onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="cardCode">CVV CODE</label>
                        <input type="text" id="cardCode" onChange={handleChange}/>
                    </div>
                </div>
                <button>PURCHASE</button>
            </form>
        </div>
    );
}
export default PaymentForm;