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
        <h1 className="FormLabel">Register</h1>
        <form action="">
          <input type="text" id="FullName"/>
          <input type="tel" name="" id="Phone"/>
          <input type="email" name="" id="Email"/>
          <input type="text" id="NextPhone"/>
          <input type="password" name="" id="Password"/>
          <input type="password" name="" id="ConfirmPassword"/>
        </form>
       
        </div>
        <img className="FormLogo" src={FormImage} alt=""/>
      </div>
    </div>
    
  );
};

export default RegisterCustomerSection;
