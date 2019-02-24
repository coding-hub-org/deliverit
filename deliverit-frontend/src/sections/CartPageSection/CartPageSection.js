import React, {Component} from 'react';
import './CartPageSection.css'
import Footer from '../../components/Footer/Footer';
import CartOrder from '../../components/CartOrder/CartOrder';
import DeliveryDetailForm from '../../components/DeliveryDetailForm/DeliveryDetailForm';
import PaymentForm from '../../components/PaymentForm/PaymentForm';
import Title from '../../components/Title/Title';


class CartPageSection extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cardName : null,
            cardNumber : null,
            cardDate : null,
            cardCode : null,
            testList: [
                {id: "001", name :"Gaurav" , quantity : 1, price: 1},
                {id: "002",name :"Logo", quantity: 2, price :100},
                {id: "003", name :"Logo", quantity: 2, price :100},
                {id: "004", name :"Logo", quantity: 2, price :100},
                {id: "005", name :"Logo", quantity: 2, price :100},
                {id: "006", name :"Logo", quantity: 2, price :100},
                {id: "007", name :"Logo", quantity: 2, price :100},
                {id: "8", name :"Logo", quantity: 2, price :100},
                {id: "9", name :"Logo", quantity: 2, price :100},
                {id: "10", name :"Logo", quantity: 2, price :100},
                {id: "11", name :"Logo", quantity: 2, price :100}
              ],
              subTotal: 0,
              deliveryFee: 100,
              total:0,
              taxes:0.8
        }
    }

    

    componentDidMount(){
        this.setState({subTotal:0}); 
        var tax=0.08;    
        console.log("LIFE");
        var newSubTotal=0;
        this.state.testList.forEach((item) => {
            console.log(item.price, item.quantity);
            newSubTotal += this.state.subTotal + item.price * item.quantity;
        });
        let newTaxes=(newSubTotal*tax);
        let newTotal=newTaxes+this.state.deliveryFee+newSubTotal;
        console.log("NEW TAXES :",newTaxes);
        this.setState(
            {
                subTotal: newSubTotal,
                taxes: newTaxes,
                total: newTotal
            }
        )
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
        console.log("This is life " + this.state.subTotal);
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
                    <CartOrder listOfItem={this.state.testList}/>        
                    <div className="cart-page-section__body__order__summary">
                        <div >
                            {"SUBTOTAL"}
                        </div>
                        <div className="cart-page-section__value">
                            {(this.state.subTotal).toFixed(2)+"$"}
                        </div>
                        <div></div>
                        <div>
                            {"TAXES"}
                        </div>
                        <div className="cart-page-section__value">
                            {(this.state.taxes).toFixed(2)+"$"}
                        </div>
                        <div></div>
                        <div>
                            {"DELIVERY FEE"}
                        </div>
                        <div className="cart-page-section__value">
                            {(this.state.deliveryFee).toFixed(2)+"$"}
                        </div>
                        <div></div>
                        <div>
                            {"TOTAL"}
                        </div>
                        <div className="cart-page-section__value">
                            {(this.state.total).toFixed(2)+"$"} 
                        </div>
                        <div></div>
                    </div>
                </div>
                
            </div>
        </div>
        );
    }
}

export default CartPageSection;