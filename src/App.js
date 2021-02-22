import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import InputName from './Pages/InputName';


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exatc path="/" component={ InputName } />
        </Switch>
      </Router>
    );
  }
}

export default App;
