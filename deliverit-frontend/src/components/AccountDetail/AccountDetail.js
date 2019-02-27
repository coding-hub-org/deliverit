import React, { Component } from "react";
import "./AccountDetail.css";

class AccountDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="user-profile-section-detail">
        <div className="user-profile-section-detail-title">
          <p>{this.props.title}</p>
        </div>
        <div className="user-profile-section-detail-value">
          <p>{this.props.value}</p>
        </div>
      </div>
    );
  }
}

export default AccountDetail;
