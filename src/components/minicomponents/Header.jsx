import React from "react";
import logo from "../../assets/logo.jpg";


export default function Header()  {
    return (
    <header className="header">
        <img
        className="logo"
        src={logo}
        alt="Logo with package icon and words Yellow Co. on it"
        />
    </header>
    );
};
