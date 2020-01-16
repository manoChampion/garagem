import React, { Component } from 'react';

import './styles.css';
import { Link } from 'react-router-dom';

export default class Main extends Component {

    render() {

        return (

            <div className="container">
                <Link className="card" to="/cars">
                    <h1>Toyota - Hilux</h1>
                    <div className="card-image">
                        <img src="/images/cars/pick-up.svg" alt="car-info" />
                    </div>  
                    <p><small>Aderson A. S.</small></p>                  
                </Link>
            </div>

        );

    }

}