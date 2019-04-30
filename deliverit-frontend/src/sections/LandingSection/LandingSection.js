import React from "react";
import LandingPageImage from "../../assets/landing-page.png";
import "./LandingSection.css";
import FlatButton from "../../components/FlatButton/FlatButton";
import * as ROUTES from "../../constants/routes";
import { Link } from "react-router-dom";
import SelectStore from "../../assets/select_store.png";
import SelectItem from "../../assets/select_item.png";
import PlaceOrder from "../../assets/place_order.png";
import PersonHoldingPhone from "../../assets/person_holding_phone.png";

const LandingSection = () => {
  return (
    <div className="landing-section">
      <div className="landing-section_row1">
        <img
          className="landing-section_row1--image"
          src={LandingPageImage}
          alt=""
        />
        <div className="landing-section_row1--description">
          <h1>Now, </h1>
          <h1>You can get anything you order</h1>
          <h1>
            within{" "}
            <span className="landing-section_row1--description-blue">
              HOURS!
            </span>
          </h1>
          <h3>
            Request an item to be delivered by people near you who are in stores
            your item is in.
          </h3>
          <div className="landing-section_row1--button">
            <Link to={ROUTES.HOME} className="link">
              <FlatButton title="Order Now" />
            </Link>
          </div>
        </div>
      </div>
      <div className="landing-section_row2">
        <h1>How it works</h1>
        <h2>
          Deliver It works with the community by notifying app users about your
          need and allowing them to accept your request to earn incentive
        </h2>
        <div className="landing-section_row2--grid">
          <div className="landing-section_row2--grid-select_store">
            <img src={SelectStore} alt="" />
            <h3>SELECT THE STORE</h3>
            <h4>
              Select the store if you can find it or go for a custom request if
              the store is not listed
            </h4>
          </div>
          <div className="landing-section_row2--grid-select_item">
            <img src={SelectItem} alt="" />
            <h3>SELECT THE ITEM</h3>
            <h4>
              Select the item you want, or add a custom item request if your
              item is not there
            </h4>
          </div>
          <div className="landing-section_row2--grid-place_order">
            <img src={PlaceOrder} alt="" />
            <h3>PLACE AN ORDER</h3>
            <h4>Place the order and wait till someone accepts your order</h4>
          </div>
        </div>
      </div>
      <div className="landing-section_row3">
        <div className="landing-section_row3-description">
          <h3>Available for your smartphone</h3>
          <h4>
            Download the Deliver It app today and place and view your orders
            from anywhere.
          </h4>
          {/* <DownloadButtonGooglePlay />
          <DownloadButtonAppStore /> */}
        </div>
        <div className="landing-section_row3-image">
          <img src={PersonHoldingPhone} alt="" />
        </div>
      </div>
    </div>
  );
};

export default LandingSection;
