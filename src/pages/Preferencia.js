import React, { Component } from 'react';
import { Radio, Button } from '../components';
import './Preferencia.css';

class Preferencia extends Component {
  constructor(props) {
    super(props);
    const { nome } = this.props.location.state;
    this.state= {
      nome,
      preferencia: 'bolacha',
    }
  }

  render() {
    const { nome, preferencia } = this.state;

    return (
      <div className="preferencia">
        <h1>Escolha o certo:</h1>
        <div className="options">
          <Radio label="Biscoito" id="biscoito" htmlFor="biscoito" value="biscoito" onChange={ (e) => this.setState({ preferencia: e.target.value }) }/>
          <Radio label="Bolacha" id="bolacha" htmlFor="bolacha" value="bolacha" onChange={ (e) => this.setState({ preferencia: e.target.value }) } />
        </div>
        <Button label="Próxima" to={ { pathname: "/comida", state: { nome, preferencia } }} />
      </div>
    );
  }
}

export default Preferencia;
