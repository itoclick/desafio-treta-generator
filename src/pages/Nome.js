import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, Button } from '../components';
import './Nome.css';
import { setName } from '../store/actions/actions';

class Nome extends Component {
  constructor() {
    super();

    this.state = {
      nome: '',
    }
  }

  render() {
    const { nome } = this.state;
    const { setName } = this.props;

    return (
      <div className="nome">
        <h1>Digite um nome:</h1>
        <Input value={ nome } onChange={ (e) => this.setState({ nome: e.target.value }) } />
        <Button label="Próxima" to="/preferencia" onClick={ () => setName(nome) } />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setName: (data) => dispatch(setName(data)),
});


export default connect(null, mapDispatchToProps)(Nome);
