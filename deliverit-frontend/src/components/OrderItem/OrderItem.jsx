import React from "react";
import "./OrderItem.css";
import Item from "../../assets/item_sample_img.png";

const OrderItem = ({ info }) => {
	return (
		<div className="order-item-component">
			<img src={Item} alt="shopping item" />
			<p>{info.name}</p>
			<p className="order-item-component--quantity">1</p>
			<p>US$ {info.price.toFixed(2)}</p>
			<hr className="order-item-component--divider" />
		</div>
	);
};

export default OrderItem;
