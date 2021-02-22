import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Radio, Button } from '../components';
import './Preferencia.css';
import { setPreference } from '../store/actions/actions';

class Preferencia extends Component {
  constructor(props) {
    super(props);
    //podemos recuperar da store? sim, mas precisa?
    this.state= {
      preferencia: this.props.preferencia,
    }
  }

  render() {
    const { nome, preferencia } = this.state;
    console.log('preferencia', preferencia)

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

const mapStateToProps = (state) => ({
  preferencia: state.forms.preferencia,
});

const mapDispatchToProps = (dispatch) => ({
  setPreferencia: (data) => dispatch(setPreference(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Preferencia);
