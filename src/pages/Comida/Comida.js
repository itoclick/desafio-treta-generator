import React, { Component } from 'react';
import { Button } from '../../components';
import './Comida.css';

class Comida extends Component {
  constructor(props) {
    super(props);
    this.state= {
      comida: '',
    }
  }

  render() {
    const { comida } = this.state;

    return (
      <div className="comida">
        <h1>Escolha o pior:</h1>
        <div className="comida-opcoes">
          <Button className={ comida === 'açaí' ? 'escolhida' : 'opcao' } label="Açaí" value="açaí" onClick={ (e) => this.setState({ comida: e.target.value }) } />
          <Button className={ comida === 'sushi' ? 'escolhida' : 'opcao' } label="Sushi" value="sushi" onClick={ (e) => this.setState({ comida: e.target.value }) } />
          <Button className={ comida === 'sopa' ? 'escolhida' : 'opcao' } label="Sopa" value="sopa" onClick={ (e) => this.setState({ comida: e.target.value }) } />
        </div>
        <Button label="Próxima" to="/animal" />
      </div>
    );
  }
}

export default Comida;
