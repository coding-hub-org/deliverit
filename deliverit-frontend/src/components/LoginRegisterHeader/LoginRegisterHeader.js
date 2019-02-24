import React from "react";

import "./LoginRegisterHeader.css";
import Logo from "../../assets/logo.png";


const LoginRegisterHeader = props => {
  return (
    <div className="LoginRegisterHeader">
      <img src={Logo} alt="" />
    </div>
    
  );
};

export default LoginRegisterHeader;
