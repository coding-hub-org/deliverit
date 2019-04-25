import React, { useState, useEffect } from "react";
import StarIcon from "../../assets/star.svg";
import TempPicture from "../../assets/register-img.svg";
import "./UserProfileSection.css";
import FlatButton from "../../components/FlatButton/FlatButton";
import Footer from "../../components/Footer/Footer";
// import PropTypes from "prop-types";
import { AuthUserContext } from "../../components/Session";
import DialogBox from "../../components/DialogBox/DialogBox";

const UserProfileSection = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <UserProfileSectionContent user={authUser} /> : null
      }
    </AuthUserContext.Consumer>
  </div>
);

const UserProfileSectionContent = props => {
  const [user, setUser] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [disableScrollStyle] = useState({
    overflowY: "hidden"
  });

  const closeDialog = e => {
    setDialogOpen(false);
    fetchData();
  };

  const handleClick = e => {
    e.preventDefault();
  };

  const generateStars = () => {
    let stars = [];
    for (var i = 0; i < Math.round(props.overallRating || 0); ++i) {
      stars.push(
        <img
          alt="stars"
          className="user-profile-section--rating-star"
          src={StarIcon}
        />
      );
    }
    return stars;
  };

  const handleAddressUpdate = e => {
    e.preventDefault();
    setDialogOpen(true);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(`http://127.0.0.1:3000/users?email=${props.user.email}`, {
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
        setUser(myJson);
      });
  };

  return (
    <div className="user-profile" style={dialogOpen ? disableScrollStyle : {}}>
      <div className="user-profile-navbar" />
      {dialogOpen ? (
        <DialogBox
          close={closeDialog}
          function="UPDATE"
          title="Update Address"
          email={props.user.email}
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
            alt="stars"
            className="user-profile-section--photo-frame"
            src={
              user.imageURL === "" || user.imageURL === undefined
                ? TempPicture
                : user.imageURL
            }
          />
          <div className="user-profile-section-button--wrapper">
            <FlatButton onClick={handleClick} title="Change Photo" />
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
                  <p>{user.ratings === 0 ? "N/A" : user.ratings}</p>
                </div>
                <div className="user-profile-section--rating-stars">
                  {generateStars()}
                </div>
              </div>
            </div>
            <div className="user-profile-section--stats-wrapper">
              <div className="user-profile-section--stats-deliveries">
                <div className="user-profile-section--rating-title">
                  <h3>Deliveries</h3>
                </div>
                <div className="user-profile-section--rating-overall">
                  <p>{user.delivery}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="user-profile-section--account-information">
            <div className="user-profile-section--name">
              <h2>{user.fullName}</h2>
            </div>
            <AccountInformationHeader title="Account Details" />
            <hr />
            <div className="user-profile-section-details">
              <AccountDetail title="Email" value={user.email || "Empty"} />
              <AccountDetail title="Phone" value={user.phoneNum || "Empty"} />
            </div>
            <AccountInformationHeader title="Addresses" />
            <hr />
            <div />
            {user.addresses === undefined ? (
              <p />
            ) : (
              user.addresses.map(addr => (
                <AccountDetail
                  key={addr.address}
                  title="Address"
                  value={addr.address}
                />
              ))
            )}
            <div className="user-profile-section-button--wrapper">
              {user.addresses === undefined || user.addresses.length === 0 ? (
                <FlatButton className="align-left" title="Add Address" />
              ) : (
                <FlatButton
                  onClick={handleAddressUpdate}
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
              <form>
                <input
                  className="user-profile-section--password-input"
                  type="password"
                  autoComplete="new-password"
                  placeholder="New Password"
                />
                <input
                  className="user-profile-section--password-input"
                  type="password"
                  autoComplete="new-password"
                  placeholder="Confirm Password"
                />
              </form>
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
};

UserProfileSection.propTypes = {
  // overallRating: PropTypes.number.isRequired,
  // userName: PropTypes.string.isRequired,
  // email: PropTypes.string.isRequired,
  // phone: PropTypes.string.isRequired,
  // deliveryCount: PropTypes.number.isRequired
};

const AccountInformationHeader = props => {
  return (
    <div className="user-profile-section--account-information-header">
      <h3>{props.title}</h3>
    </div>
  );
};

const AccountDetail = props => {
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
