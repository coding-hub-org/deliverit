import React, { Component } from "react";
import "./CartPageSection.css";
import Footer from "../../components/Footer/Footer";
import CartOrder from "../../components/CartOrder/CartOrder";
import DeliveryDetailForm from "../../components/DeliveryDetailForm/DeliveryDetailForm";
import PaymentForm from "../../components/PaymentForm/PaymentForm";
import Title from "../../components/Title/Title";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

class CartPageSection extends Component {
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

  componentDidMount() {
    this.setState({ subTotal: 0 });
    var tax = 0.08;
    console.log("LIFE");
    var newSubTotal = 0;
    this.state.testList.forEach(item => {
      console.log(item.price, item.quantity);
      newSubTotal += this.state.subTotal + item.price * item.quantity;
    });
    let newTaxes = newSubTotal * tax;
    let newTotal = newTaxes + this.state.deliveryFee + newSubTotal;
    console.log("NEW TAXES :", newTaxes);
    this.setState({
      subTotal: newSubTotal,
      taxes: newTaxes,
      total: newTotal
    });
  }

  handleSubmitForm = e => {
    //Do the sumbit here
  };
  handleChangeNumber = () => {};
  handleChangeForm = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  render() {
    return (
      <div className="cart-page-section">
        <div className="cart-page-section__title">
          <div className="section-title-component">Checkout</div>
        </div>
        {/* <div /> */}
        <div className="cart-page-section__body">
          <div className="cart-page-section__body__detail">
            <DeliveryDetailForm
              clientName="Gaurav Jayasawal"
              address1="Mason Hall, Room 209"
              address2="Plattsburgh, NY 12901"
              address3="USA"
              email="jgaurav6@gmail.com"
            />
            <PaymentForm
              handleChange={this.handleChangeForm}
              handleSubmit={this.handleSubmitForm}
            />
          </div>
          <div className="cart-page-section__body__order">
            <CartOrder listOfItem={this.state.testList} />
            <div className="cart-page-section__body__order__summary">
              <div>
                <div className="cart-page-section__value">
                  SUBTOTAL: <span>{"$" + this.state.subTotal.toFixed(2)}</span>
                </div>
                <div className="cart-page-section__value">
                  TAXES: <span>{"$" + this.state.taxes.toFixed(2)}</span>
                </div>
                <div className="cart-page-section__value">
                  DELIVERY FEE:
                  <span>{"$" + this.state.deliveryFee.toFixed(2)}</span>
                </div>
                <div className="cart-page-section__value">
                  TOTAL: <span>{"$" + this.state.total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div /> */}
      </div>
    );
  }
}

export default CartPageSection;
