import React from "react";
import "./OrderDetail.css";
import OrderItem from "../OrderItem/OrderItem";

const OrderDetail = ({ items }) => {
	const orderList = items.map(test => {
		return <OrderItem info={test} />;
	});

	return <div className="order-detail-component">{orderList}</div>;
};

export default OrderDetail;
