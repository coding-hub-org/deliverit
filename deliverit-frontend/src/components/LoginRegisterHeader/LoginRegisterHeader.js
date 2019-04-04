import React from "react";

import "./LoginRegisterHeader.css";
import Logo from "../../assets/logo.svg";


const LoginRegisterHeader = props => {
  return (
    <div className="LoginRegisterHeader">
      <img className="Registerlogo" src={Logo} alt="" />
    </div>
  );
};

export default LoginRegisterHeader;
