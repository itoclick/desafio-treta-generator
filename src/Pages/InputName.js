import React from 'react';
import Button from '../Components/Button';

class InputName extends React.Component {

  render() {
    return (
      <div>
        <label>
          <h1>Digite um nome: </h1>  
          <input type="text" />
          <Button />
        </label>  
      </div>
    );
  }
}

export default InputName;