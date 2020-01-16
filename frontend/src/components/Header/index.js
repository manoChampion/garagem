import React from 'react';
import { NavLink } from 'react-router-dom';

import './styles.css';

const Header = () => (

    <header id="main-header">
        <h1>
        <NavLink exact activeClassName="active" to="/">GARAGEM</NavLink>
        </h1>
    </header>

);

export default Header;