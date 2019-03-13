import React from "react";
import "./DeliveryDetailForm.css";
import Title from "../Title/Title";

const DeliveryDetailForm = props => {
  return (
    <div className="delivery-detail-form-component">
      <Title title="DELIVERY DETAILS" />
      <div className="delivery-detail-form-component__form">
        <div>{props.clientName}</div>
        <div>{props.email}</div>
        <div>{props.address1}</div>
        <div>{props.address2}</div>
        <div>{props.address3}</div>
      </div>
    </div>
  );
};

export default DeliveryDetailForm;
