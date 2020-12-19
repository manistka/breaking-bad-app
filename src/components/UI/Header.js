import React from "react";
import logo from "../../images/logo.png";

import classes from "./Header.module.scss";

const Header = () => {
    return (
        <header className={classes.Header}>
            <img src={logo} alt="" />
        </header>
    );
};

export default Header;
