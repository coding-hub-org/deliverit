import React from "react";
import "./CardPlace.css";

// Import images
import testImage from "../../assets/food-sample-img.png";
import starImage from "../../assets/star-img.png";

const CardPlace = ({ place }) => {
  return (
    <div className={"card-place-component"}>
      <section className={"card-place-component--image"}>
        <img src={place.imageUrl} alt="" />
      </section>
      <section className={"card-place-component--content"}>
        <div className={"card-place-component--content__big"}>
          <p>{place.storeName}</p>
          <div>
            <p>{place.ratings}</p>
            <img src={starImage} alt="" />
          </div>
        </div>
        <div className={"card-place-component--content__small"}>
          <p>3.2 miles</p>
          <p>Delivery $2.50</p>
        </div>
      </section>
    </div>
  );
};

export default CardPlace;
