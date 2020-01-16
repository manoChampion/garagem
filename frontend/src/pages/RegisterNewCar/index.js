import React, { Component } from 'react';
import './styles.css';

import FormCustomer from '../../components/FormCustomer';

export default class RegisterNewCar extends Component {

    onChange(data) {
        console.log(data);
    }

    render() {
        return (
            <FormCustomer reponseAPI={this.onChange}/>

       );
    }
}