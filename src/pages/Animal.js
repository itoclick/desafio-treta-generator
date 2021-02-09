import React, { Component } from 'react';
import { Select, Button } from '../components';
import './Animal.css';

class Animal extends Component {
  constructor(props) {
    super(props);
    const { nome, preferencia, comida } = this.props.location.state;
    this.state= {
      nome,
      preferencia,
      comida,
      animal: 'gato',
    }
  }
  render() {
    const { nome, preferencia, comida, animal } = this.state;
    return (
      <div className="animal">
        <h1>Escolha um animal:</h1>
        <Select label="Escolha um animal" onChange={ (e) => this.setState({ animal: e.target.value }) } />
        <Button label="Próxima" to={{ pathname: "/manchete", state: { nome, preferencia, comida, animal } }} />
      </div>
    );
  }
}

export default Animal;
