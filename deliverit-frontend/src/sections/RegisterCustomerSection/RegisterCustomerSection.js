import React from "react";

import FormImage from "../../assets/register-img.svg";
import "./RegisterCustomerSection.css";
import LoginRegisterHeader from "../../components/LoginRegisterHeader/LoginRegisterHeader";


const RegisterCustomerSection = props => {
  return (
    <div className="RegisterCustomerSection">
      <LoginRegisterHeader />
      <div className="FormWrapperGrid">
       
        <div className="FormGrid">
        <p>hi</p>
       
        </div>
        <img src={FormImage} alt=""/>
      </div>
    </div>
    
  );
};

export default RegisterCustomerSection;
