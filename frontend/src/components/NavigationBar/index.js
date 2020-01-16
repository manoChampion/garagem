import React from 'react';
import { NavLink } from 'react-router-dom';

import './styles.css';

const NavigationBar = () => (

    <nav className="nav-buttons">
        <ul>
            <li>
                <NavLink exact activeClassName="active" to="/cars/new">
                    <img src="/images/icons/in.svg" alt="entrada"/>
                    Entrada
                </NavLink>
            </li>
            <li>
                <NavLink exact activeClassName="active" to="/">
                    <img src="/images/icons/history.svg" alt="historico"/>
                    Histórico
                </NavLink>
            </li>
            <li>
                <NavLink exact activeClassName="active" to="/">
                    <img src="/images/icons/search.svg" alt="consulta"/>
                    Consulta
                </NavLink>
            </li>
        </ul>
    </nav>

);

export default NavigationBar;