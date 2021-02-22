import React, { Component } from 'react';
import { Input, Button } from '../components';
import './Nome.css';

class Nome extends Component {
  constructor() {
    super();

    this.state = {
      nome: '',
    }
  }

  render() {
    const { nome } = this.state

    return (
      <div className="nome">
        <h1>Digite um nome:</h1>
        <Input value={ nome } onChange={ (e) => this.setState({ nome: e.target.value }) } />
        <Button label="Próxima" to={ { pathname: "/preferencia", state: { nome } }} />
      </div>
    );
  }
}

export default Nome;
