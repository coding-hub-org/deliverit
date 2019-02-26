import React, { Component } from "react";
import StarIcon from "../../assets/star.svg";
import TempPicture from "../../assets/register-img.svg";
import "./UserProfileSection.css";
import AccountDetail from "../../components/AccountDetail/AccountDetail";
import FlatButton from "../../components/FlatButton/FlatButton";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

class UserProfileSection extends Component {
  render() {
    return (
      <div className="user-profile">
        <div className="user-profile-navbar">
          <Navbar />
        </div>
        <div className="user-profile-footer">
          <Footer />
        </div>
        <div className="user-profile-section">
          <div className="user-profile-section-title">
            <h1>Account</h1>
          </div>
          <div className="user-profile-section-photo">
            <img
              className="user-profile-section-photo-frame"
              src={TempPicture}
            />
            <div className="user-profile-section-button-wrapper">
              <FlatButton title="Change Photo" />
            </div>
          </div>
          <div className="user-profile-section-content">
            <div className="user-profile-section-rating">
              <div classname="user-profile-section-rating-wrapper">
                <div className="user-profile-section-rating-title">
                  <h3>Rating</h3>
                </div>
                <div className="user-profile-section-rating-overall-wrapper">
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
              <div className="user-profile-section-stats-wrapper">
                <div className="user-profile-section-stats-deliveries">
                  <div className="user-profile-section-rating-title">
                    <h3>Deliveries</h3>
                  </div>
                  <div className="user-profile-section-rating-overall">
                    <p>69</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="user-profile-section-account-information">
              <div className="user-profile-section-name">
                <h2>Hung Nguyen</h2>
              </div>
              <AccountInformationHeader title="Account Details" />
              <Divider />
              <div className="user-profile-section-details">
                <AccountDetail title="Email" value="hnguy011@plattsburgh.edu" />
                <AccountDetail title="Phone" value="xxx-xxxx-xxx" />
              </div>
              <AccountInformationHeader title="Addresses" />
              <Divider />
              <div className="user-profile-section-button-wrapper">
                <FlatButton className="align-left" title="Add Address" />
              </div>
              <AccountInformationHeader title="Payments" />
              <Divider />
              <div className="user-profile-section-button-wrapper">
                <FlatButton className="align-left" title="Add Payment Method" />
              </div>
              <div className="user-profile-section-payment" />
              <AccountInformationHeader title="Password" />
              <Divider />
              <div className="user-profile-section-password">
                <input
                  className="user-profile-section-password-input"
                  type="password"
                  placeholder="New Password"
                />
                <input
                  className="user-profile-section-password-input"
                  type="password"
                  placeholder="Confirm Password"
                />
              </div>
              <div className="user-profile-section-button-wrapper">
                <FlatButton className="align-left" title="Change Password" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function AccountInformationHeader(props) {
  return (
    <div className="user-profile-section-account-information-header">
      <h3>{props.title}</h3>
    </div>
  );
}

const Divider = props => {
  return <div className="user-profile-section-divider" />;
};

export default UserProfileSection;
