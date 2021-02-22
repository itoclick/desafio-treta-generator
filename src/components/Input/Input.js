import React, { Component } from 'react';
import './Input.css';

class Input extends Component {
  render() {
    const { onChange, value, label } = this.props;
    return (
      <label htmlFor="input-name" className="input">
        { label }
        <input type="text" id="input-name" value={ value } onChange={ onChange } />
      </label>
    );
  }
}

export default Input;
