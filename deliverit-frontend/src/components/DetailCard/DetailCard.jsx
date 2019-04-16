import React from "react";
import "./DetailCard.css";

const DetailCard = ({ menu }) => {
	return (
		<div className="detail-card-component">
			<p className="detail-card-component--title">{menu.dish}</p>
			<p>{menu.description.substr(0, 80)}</p>
			<p className="detail-card-component--price">$ {menu.price.toFixed(2)}</p>
		</div>
	);
};

export default DetailCard;
