import React from "react";

import "./LoginRegisterHeader.css";
import Logo from "../../assets/logo.png";


const LoginRegisterHeader = props => {
  return (
    <div className="LoginRegisterHeader">
      <img className="Registerlogo" src={Logo} alt="" />
      <div className="FormWrapperGrid">
        <div className="FormGrid">

        </div>
      </div>
    </div>
    
  );
};

export default LoginRegisterHeader;
