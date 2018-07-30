import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";

import React from 'react';

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to='/' activeClassName="is-active" exact={true}>HomePage</NavLink>
        <NavLink to='/portfolio' activeClassName="is-active">Portofolio</NavLink>
        <NavLink to='/edit' activeClassName="is-active">Edit</NavLink>
        <NavLink to='/help' activeClassName="is-active">Help</NavLink>
    </header>
)

export default Header;