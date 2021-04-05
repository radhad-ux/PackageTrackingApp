import React from "react";
import logo from "../../assets/logo.jpg";


export default function Header()  {
    return (
        
    <header className="header">
        <div classname="main-text">
        <h1>Yellow Corporation</h1>
        <img
        className="logo"
        src={logo}
        alt="Logo with package icon and words Yellow Co. on it"
        />
       </div>
    </header>
    );
};
