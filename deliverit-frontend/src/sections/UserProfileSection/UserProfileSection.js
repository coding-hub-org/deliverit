import React, { Component } from "react";
import "./UserProfileSection.css";

class UserProfileSection extends Component {
  render() {
    return (
      <div className="user-profile">
        <div className="user-profile-navbar">NavBar</div>
        <div className="user-profile-footer">Footer</div>
        <div className="user-profile-section">
          <div className="user-profile-section-title" />
          <div className="user-profile-section-photo" />
          <div className="user-profile-section-content">
            <div className="user-profile-section-rating" />
            <div className="user-profile-section-stats" />
            <div className="user-profile-section-account-information">
              <div className="user-profile-section-title" />
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
