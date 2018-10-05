import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";

import React from 'react';

const Header = () => (
    <header className="header">
        <div className="content-container">
            <Link className="header__title" to="/">
                <h1>Expensify</h1>
            </Link>
        </div>
    </header>
)

export default Header;