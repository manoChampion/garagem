import React, { Component } from 'react';


import './styles.css';

export default class ShowCar extends Component {

    render() {
        return (
            <div className="container car-container">
                <div className="card car-info">
                    <div className="card-title">
                        <p>Carroceria</p>
                    </div>
                    <div className="card-body">
                        <img src="/images/cars/pick-up.svg" alt="car-icon" />
                    </div>
                </div>
                <div className="card">
                    <div className="card-title">
                        <p>Marca</p>
                    </div>
                    <div className="card-body">
                        <p className="text">Toyota</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-title">
                        <p>Modelo</p>
                    </div>
                    <div className="card-body">
                        <p className="text">Hilux</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-title">
                        <p>Ano</p>
                    </div>
                    <div className="card-body">
                        <p className="text">2020</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-title">
                        <p>Motor</p>
                    </div>
                    <div className="card-body">
                        <p className="text">3.3</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-title">
                        <p>Combustível</p>
                    </div>
                    <div className="card-body">
                        <p className="text">Diesel</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-title">
                        <p>Proprietário</p>
                    </div>
                    <div className="card-body">
                        <p className="text">Aderson A. S.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-title">
                        <p>Telefone</p>
                    </div>
                    <div className="card-body">
                        <p className="text">Confidencial</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-title">
                        <p>Placa</p>
                    </div>
                    <div className="card-body">
                        <p className="text">ADR-6969</p>
                    </div>
                </div>
            </div>
        );
    }
}