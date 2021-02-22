import React, { Component } from 'react';

class Radio extends Component {
  render() {
    const { value, onChange, label, checked, htmlFor, id } = this.props;
    return (
      <label htmlFor={ htmlFor }>
        { label }
        <input
          type="radio"
          name="preferencia"
          value={ value }
          id={ id }
          onChange={ onChange }
          checked={ checked }
        />
      </label>
    );
  }
}

export default Radio;
