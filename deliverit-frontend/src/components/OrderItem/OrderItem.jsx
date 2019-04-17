import React from "react";
import "./OrderItem.css";
import Item from "../../assets/item_sample_img.png";

const OrderItem = () => {
	return (
		<div className="order-item-component">
			<img src={Item} alt="shopping item" />
			<p>Toothbrush</p>
			<p className="order-item-component--quantity">1</p>
			<p>US$ 10.20</p>
			<hr className="order-item-component--divider" />
		</div>
	);
};

export default OrderItem;
