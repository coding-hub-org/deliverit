import React, {Component} from 'react';
import './CartPageSection.css'
import Footer from '../../components/Footer/Footer';
import CartOrder from '../../components/CartOrder/CartOrder';
import DeliveryDetailForm from '../../components/DeliveryDetailForm/DeliveryDetailForm';
import PaymentForm from '../../components/PaymentForm/PaymentForm';
import Title from '../../components/Title/Title';

var testList=[
    {name :"Gaurav" , quantity : 1, price: 1},
    {name :"Logo", quantity: 2, price :100},
    {name :"Logo", quantity: 2, price :100},
    {name :"Logo", quantity: 2, price :100},
    {name :"Logo", quantity: 2, price :100},
    {name :"Logo", quantity: 2, price :100},
    {name :"Logo", quantity: 2, price :100},
    {name :"Logo", quantity: 2, price :100},
    {name :"Logo", quantity: 2, price :100},
    {name :"Logo", quantity: 2, price :100},
    {name :"Logo", quantity: 2, price :100}
  ]
class CartPageSection extends Component {
    state = {
        cardName : null,
        cardNumber : null,
        cardDate : null,
        cardCode : null
    }
    handleSubmitForm = (e) =>
    {
        //Do the sumbit here
    }
    handleChangeForm =(e) =>
    {
        this.setState(
            {
                [e.target.id] : e.target.value
            }
        );
    }
    render() {
        return (
        <div className="cart-page-section">
            <Title title="Checkout"/>
            <div className="cart-page-section__body">
                <div className="cart-page-section__body__detail">
                    <DeliveryDetailForm 
                    clientName="Gaurav Jayasawal" 
                    address1="Mason Hall, Room 209"
                    address2="Plattsburgh, NY 12901"
                    address3="USA"
                    email="jgaurav6@gmail.com"
                    />
                    <PaymentForm handleChange={this.handleChangeForm} handleSubmit={this.handleSubmitForm}/>
                </div>
                <div  className="cart-page-section__body__order"> 
                    <CartOrder listOfItem={testList}/>        
                    <div className="cart-page-section__body__order__summary">
                        
                    </div>
                </div>
                
            </div>
        </div>
        );
    }
}

export default CartPageSection;