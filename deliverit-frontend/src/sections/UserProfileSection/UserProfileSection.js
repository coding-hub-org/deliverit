import React, { Component } from "react";
import StarIcon from "../../assets/star.svg";
import TempPicture from "../../assets/register-img.svg";
import "./UserProfileSection.css";
import FlatButton from "../../components/FlatButton/FlatButton";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import PropTypes from "prop-types";

class UserProfileSection extends Component {
  generateStars = () => {
    let stars = [];
    for (var i = 0; i < Math.round(this.props.overallRating || 0); ++i) {
      stars.push(
        <img className="user-profile-section--rating-star" src={StarIcon} />
      );
    }
    return stars;
  };

  render() {
    return (
      <div className="user-profile">
        <div className="user-profile-navbar">
          <Header />
        </div>
        <div className="user-profile-section">
          <div className="user-profile-section--title">
            <h1>Account</h1>
          </div>
          <div className="user-profile-section--photo">
            <img
              className="user-profile-section--photo-frame"
              src={TempPicture}
            />
            <div className="user-profile-section-button--wrapper">
              <FlatButton title="Change Photo" />
            </div>
          </div>
          <div className="user-profile-section--content">
            <div className="user-profile-section--rating">
              <div className="user-profile-section--rating-wrapper">
                <div className="user-profile-section--rating-title">
                  <h3>Rating</h3>
                </div>
                <div className="user-profile-section--rating-overall-wrapper">
                  <div className="user-profile-section--rating-overall">
                    <p>{this.props.overallRating || "?"}</p>
                  </div>
                  <div className="user-profile-section--rating-stars">
                    {this.generateStars()}
                  </div>
                </div>
              </div>
              <div className="user-profile-section--stats-wrapper">
                <div className="user-profile-section--stats-deliveries">
                  <div className="user-profile-section--rating-title">
                    <h3>Deliveries</h3>
                  </div>
                  <div className="user-profile-section--rating-overall">
                    <p>{this.props.deliveryCount || "?"}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="user-profile-section--account-information">
              <div className="user-profile-section--name">
                <h2>Hung Nguyen</h2>
              </div>
              <AccountInformationHeader title="Account Details" />
              <Divider />
              <div className="user-profile-section-details">
                <AccountDetail
                  title="Email"
                  value={this.props.email || "Empty"}
                />
                <AccountDetail
                  title="Phone"
                  value={this.props.phone || "Empty"}
                />
              </div>
              <AccountInformationHeader title="Addresses" />
              <Divider />
              <div className="user-profile-section-button--wrapper">
                <FlatButton className="align-left" title="Add Address" />
              </div>
              <AccountInformationHeader title="Payments" />
              <Divider />
              <div className="user-profile-section-button--wrapper">
                <FlatButton className="align-left" title="Add Payment Method" />
              </div>
              <div className="user-profile-section-payment" />
              <AccountInformationHeader title="Password" />
              <Divider />
              <div className="user-profile-section--password">
                <input
                  className="user-profile-section--password-input"
                  type="password"
                  placeholder="New Password"
                />
                <input
                  className="user-profile-section--password-input"
                  type="password"
                  placeholder="Confirm Password"
                />
              </div>
              <div className="user-profile-section-button--wrapper">
                <FlatButton className="align-left" title="Change Password" />
              </div>
            </div>
          </div>
        </div>
        <div className="user-profile-footer">
          <Footer />
        </div>
      </div>
    );
  }
}

UserProfileSection.propTypes = {
  overallRating: PropTypes.number.isRequired,
  userName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  deliveryCount: PropTypes.number.isRequired
};

var AccountInformationHeader = props => {
  return (
    <div className="user-profile-section--account-information-header">
      <h3>{props.title}</h3>
    </div>
  );
};

var AccountDetail = props => {
  return (
    <div className="user-profile-section--detail">
      <div className="user-profile-section--detail-title">
        <p>{props.title}</p>
      </div>
      <div className="user-profile-section--detail-value">
        <p>{props.value}</p>
      </div>
    </div>
  );
};

const Divider = props => {
  return <div className="user-profile-section--divider" />;
};

export default UserProfileSection;
