import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

class Button extends Component {
  render() {
    const { onClick, to, label, value, className } = this.props;
    return (
      <Link to={ to }>
        <button className={ `button ${className}` } type="button" value={ value } onClick={ onClick }>
          { label }
        </button>
      </Link>
    );
  }
}

Button.defaultProps = {
  className: 'button',
  to: ''
};

export default Button;
