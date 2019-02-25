import React, { Component } from "react";
import StarIcon from "../../assets/star.svg";
import "./UserProfileSection.css";

class UserProfileSection extends Component {
  render() {
    return (
      <div className="user-profile">
        <div className="user-profile-navbar">NavBar</div>
        <div className="user-profile-footer">Footer</div>
        <div className="user-profile-section">
          <div className="user-profile-section-title">
            <h1>Account</h1>
          </div>
          <div className="user-profile-section-photo">
            <div className="user-profile-section-photo-frame" />
            <button className="user-profile-section-photo-button">
              Change Photo
            </button>
          </div>
          <div className="user-profile-section-content">
            <div className="user-profile-section-rating">
              <div className="user-profile-section-rating-title">
                <h3>Rating</h3>
              </div>
              <div className="user-profile-section-rating-stats-wrapper">
                <div className="user-profile-section-rating-overall">
                  <p>8.9</p>
                </div>
                <div className="user-profile-section-rating-stars">
                  <img
                    className="user-profile-section-rating-star"
                    src={StarIcon}
                  />
                  <img
                    className="user-profile-section-rating-star"
                    src={StarIcon}
                  />
                  <img
                    className="user-profile-section-rating-star"
                    src={StarIcon}
                  />
                </div>
              </div>
            </div>
            <div className="user-profile-section-stats" />
            <div className="user-profile-section-account-information">
              <div className="user-profile-section-name" />
              <div className="user-profile-section-details" />
              <div className="user-profile-section-address" />
              <div className="user-profile-section-payment" />
              <div className="user-profile-section-password" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfileSection;
