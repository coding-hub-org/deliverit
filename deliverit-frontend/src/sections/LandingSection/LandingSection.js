import React from "react";
import LandingPageImage from "../../assets/landing-page.png";
import "./LandingSection.css";
import FlatButton from "../../components/FlatButton/FlatButton";

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
            <FlatButton title="Order Now" />
          </div>
        </div>
      </div>
      <div className="landing-section_row2">
        <h1>How it works</h1>
        <h2>
          Deliver It works with the community by notifying app users about your
          need and allowing them to accept your request to earn incentive
        </h2>
      </div>
    </div>
  );
};

export default LandingSection;
