import React, { Component } from 'react';
import cookieMonster from './images/cookieMonster.jpg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>THE TRETA HAS BEGUN!</h1>
        <img src={cookieMonster} alt="o certo é bolacha"/>
      </div>
    );
  }
}

export default App;
