import React, { Component } from 'react';
import './Manchete.css';

class Manchete extends Component {
  constructor(props) {
    super(props);
    this.state= {
      nome: 'não tem, adicione o redux',
      preferencia: 'não tem, adicione o redux',
      comida: 'não tem, adicione o redux',
      animal: 'não tem, adicione o redux',
    }
  }

  render() {
    const { nome, preferencia, comida, animal } = this.state;
    return (
      <div className="manchete">
        <h1>GERANDO A TRETA</h1>
        Em entrevista internacional, <strong>{ nome }</strong> teve que debater sobre a discussão mais acirrada do século, é biscoito ou bolacha? <strong>{ nome }</strong> foi direto na canela dizendo que o certo é <strong>{ preferencia }</strong>! E ainda complementou que <strong>{comida === 'sopa' ? 'sopa não é janta' : `${ comida } é ruim` }</strong> e que nem seu <strong>{ animal }</strong> come!
      </div>
    );
  }
}

export default Manchete;
