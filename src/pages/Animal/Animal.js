import React, { Component } from 'react';
import { Select, Button } from '../../components';
import './Animal.css';

class Animal extends Component {
  constructor(props) {
    super(props);
    this.state= {
      animal: 'gato',
    }
  }
  render() {
    return (
      <div className="animal">
        <h1>Escolha um animal:</h1>
        <Select label="Escolha um animal" onChange={ (e) => this.setState({ animal: e.target.value }) } />
        <Button label="Próxima" to="/manchete" />
      </div>
    );
  }
}

export default Animal;
