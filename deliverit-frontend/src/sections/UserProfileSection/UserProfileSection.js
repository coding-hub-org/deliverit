import React, { Component } from "react";
import StarIcon from "../../assets/star.svg";
import TempPicture from "../../assets/register-img.svg";
import "./UserProfileSection.css";
import FlatButton from "../../components/FlatButton/FlatButton";
import Footer from "../../components/Footer/Footer";
import PropTypes from "prop-types";
import { Image } from "cloudinary-react";
import DialogBox from "../../components/DialogBox/DialogBox";

class UserProfileSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      dialogOpen: false,
      disableScrollStyle: {
        overflowY: "hidden"
      }
    };
  }

  closeDialog = e => {
    this.setState({ dialogOpen: false });
    this.fetchData();
  };

  handleClick = e => {
    e.preventDefault();
  };

  generateStars = () => {
    let stars = [];
    for (var i = 0; i < Math.round(this.props.overallRating || 0); ++i) {
      stars.push(
        <img className="user-profile-section--rating-star" src={StarIcon} />
      );
    }
    return stars;
  };

  handleAddressUpdate = e => {
    e.preventDefault();
    this.setState({ dialogOpen: true });
  };

  componentDidMount = () => {
    this.fetchData();
  };

  fetchData() {
    fetch("http://127.0.0.1:3000/users?email=jgaurav6@gmail.com", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        return res.json();
      })
      .then(myJson => {
        this.setState({ user: myJson });
      });
  }

  render() {
    return (
      <div
        className="user-profile"
        style={this.state.dialogOpen ? this.state.disableScrollStyle : {}}
      >
        <div className="user-profile-navbar" />
        {this.state.dialogOpen ? (
          <DialogBox
            close={this.closeDialog}
            function="UPDATE"
            title="Update Address"
          />
        ) : (
          <span />
        )}
        <div className="user-profile-section">
          <div className="user-profile-section--title">
            <h1>Account</h1>
          </div>
          <div className="user-profile-section--photo">
            <img
              className="user-profile-section--photo-frame"
              src={
                this.state.user.imageURL === "" ||
                this.state.user.imageURL === undefined
                  ? TempPicture
                  : this.state.user.imageURL
              }
            />
            <div className="user-profile-section-button--wrapper">
              <FlatButton onClick={this.handleClick} title="Change Photo" />
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
                    <p>
                      {this.state.user.ratings === 0
                        ? "N/A"
                        : this.state.user.ratings}
                    </p>
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
                    <p>{this.state.user.delivery}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="user-profile-section--account-information">
              <div className="user-profile-section--name">
                <h2>{this.state.user.fullName}</h2>
              </div>
              <AccountInformationHeader title="Account Details" />
              <hr />
              <div className="user-profile-section-details">
                <AccountDetail
                  title="Email"
                  value={this.state.user.email || "Empty"}
                />
                <AccountDetail
                  title="Phone"
                  value={this.state.user.phoneNum || "Empty"}
                />
              </div>
              <AccountInformationHeader title="Addresses" />
              <hr />
              <div />
              {this.state.user.addresses === undefined ? (
                <p />
              ) : (
                this.state.user.addresses.map(addr => (
                  <AccountDetail title="Address" value={addr.address} />
                ))
              )}
              <div className="user-profile-section-button--wrapper">
                {this.state.user.addresses === undefined ||
                this.state.user.addresses.length === 0 ? (
                  <FlatButton className="align-left" title="Add Address" />
                ) : (
                  <FlatButton
                    onClick={this.handleAddressUpdate}
                    className="align-left"
                    title="Update Address"
                  />
                )}
              </div>
              <AccountInformationHeader title="Payments" />
              <hr />
              <div className="user-profile-section-button--wrapper">
                <FlatButton className="align-left" title="Add Payment Method" />
              </div>
              <div className="user-profile-section-payment" />
              <AccountInformationHeader title="Password" />
              <hr />
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

export default UserProfileSection;
