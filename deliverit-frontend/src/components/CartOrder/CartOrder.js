import React, { Component } from "react";
import "./CartOrder.css";
import ItemTag from '../ItemTag/ItemTag';
import Title from '../Title/Title';


const CartOrder = (props) =>{
    const itemList=props.listOfItem.map(item => {
        return (
        <ItemTag name={item.name} 
        quantity={item.quantity}
        price={item.price * item.quantity}
         />);
    })
    return (
        <div className="cart-order-component" >
            <Title title="YOUR ORDER"/>
            {itemList}
        </div>
    );
}
export default CartOrder;
