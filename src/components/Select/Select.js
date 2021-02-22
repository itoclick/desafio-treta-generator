import React, { Component } from 'react';
import './Select.css';

class Select extends Component {
  render() {
    const { onChange, label } = this.props;
    return (
      <label htmlFor="input-select" className="select">
        { label }
        <select id="input-select" onChange={ onChange }>
          <option value="gato">Gato</option>
          <option value="cachorro">Cachorro</option>
        </select>
      </label>
    );
  }
}

export default Select;
