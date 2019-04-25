import React from "react";
import "./DetailCard.css";
import { CheckoutContext } from "../../sections/CheckoutSection/CheckoutSection";

const DetailCard = ({ menu }) => {
  // console.log(menu);
  return (
    <CheckoutContext.Consumer>
      {context => (
        <div
          onClick={() => context.addToCart(menu)}
          className="detail-card-component"
        >
          <p className="detail-card-component--title">{menu.itemName}</p>
          <p>{menu.description.substr(0, 80)}</p>
          <p className="detail-card-component--price">
            $ {menu.price.toFixed(2)}
          </p>
        </div>
      )}
    </CheckoutContext.Consumer>
  );
};

export default DetailCard;
