import React, { Component } from 'react';
import axios from 'axios';
import api from '../../services/api';


import './styles.css';

export default class FormCustomer extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value =  target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = async(event) => {
        event.preventDefault();
         try {
            const response = await api.post('/customers', this.state);
            this.props.responseAPI(response);
        } catch (error) {
            console.log(error);
        }
    }

    getCep = async(event) => {
        console.log("hey")

        if (event.target.value.length === 8) {
            try {
                const { data } = await axios.get(`https://api.postmon.com.br/v1/cep/${event.target.value}`);
                document.querySelector("input[name=city]").value = data.cidade;
                document.querySelector("input[name=city]").readOnly = true;
                document.querySelector("input[name=street]").value = data.logradouro;
                document.querySelector("input[name=street]").readOnly = true;
                document.querySelector("#address_div").style.display = "block";

                this.setState({ cep_data: data })
                
            } catch (error) {
                console.error(error);
            }
            
        } else if (event.target.value.length === 0) {
            document.querySelector("#address_div").style.display = "none";
            document.querySelector("input[name=city]").value = '';
            document.querySelector("input[name=street]").value = '';
        }
    }

    changePerson = event => {
        if (event.target.checked) {
            document.querySelector("input[name=full_name]").previousElementSibling.textContent = "Razão Social";
            document.querySelector("input[name=cpf]").previousElementSibling.textContent = "CNPJ";
        } else {
            document.querySelector("input[name=full_name]").previousElementSibling.textContent = "Nome Completo";
            document.querySelector("input[name=cpf]").previousElementSibling.textContent = "CPF";
        }
    }
    render() {
        return (
            <div className="container">
                <form className="form" onSubmit={this.handleSubmit}>
                <div className="form-group">
                        <label>Produtor Rural?</label>
                        <input type="checkbox" name="producer" onChange={ e => { this.changePerson(e); this.handleInputChange(e); } } /> Sim
                    </div>
                    <div className="form-group">
                        <label>Pessoa Jurídica?</label>
                        <input type="checkbox" name="company" onChange={ e => { this.changePerson(e); this.handleInputChange(e); } } /> Sim
                    </div>
                    <div className="form-group">
                        <label>Nome Completo</label>
                        <input type="text" name="full_name" onChange={this.handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label>CPF</label>
                        <input type="text" name="cpf" onChange={this.handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label>Telefone</label>
                        <input type="text" name="phone" onChange={this.handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label>E-mail</label>
                        <input type="text" name="email" onChange={this.handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label>CEP</label>
                        <input type="text" name="cep" maxLength="8" onChange={ e => { this.getCep(e); this.handleInputChange(e); } } />
                    </div>
                    <div id="address_div">
                        <div className="form-group">
                            <label>Cidade</label>
                            <input type="text" name="city" onChange={this.handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label>Rua</label>
                            <input type="text" name="street" onChange={this.handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label>Número</label>
                            <input type="text" name="number" onChange={this.handleInputChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <button type="submit">Cadastrar</button>
                    </div>
                </form>
            </div>
       );
    }
}