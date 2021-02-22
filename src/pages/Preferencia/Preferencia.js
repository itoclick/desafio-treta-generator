import React, { Component } from 'react';
import { Radio, Button } from '../../components';
import './Preferencia.css';

class Preferencia extends Component {
  constructor(props) {
    super(props);
    this.state= {
      preferencia: 'bolacha',
    }
  }

  render() {
    return (
      <div className="preferencia">
        <h1>Escolha o certo:</h1>
        <div className="options">
          <Radio label="Biscoito" id="biscoito" htmlFor="biscoito" value="biscoito" onChange={ (e) => this.setState({ preferencia: e.target.value }) }/>
          <Radio label="Bolacha" id="bolacha" htmlFor="bolacha" value="bolacha" onChange={ (e) => this.setState({ preferencia: e.target.value }) } />
        </div>
        <Button label="Próxima" to="/comida" />
      </div>
    );
  }
}

export default Preferencia;
