import React, { Component } from "react";
import "./CartOrder.css";
import ItemTag from '../ItemTag/ItemTag';
import Title from '../Title/Title';


const CartOrder = (props) =>{

    const itemList=props.listOfItem.map(item => {
        return (
        <ItemTag key={item.id} name={item.name} 
        quantity={item.quantity}
        price={item.price * item.quantity}
         />);
    })
    
    return (
        <div>
        <Title title="YOUR ORDER"/>
        <div className="cart-order-component" >
            {itemList}
        </div>
        </div>
    );
}
export default CartOrder;
