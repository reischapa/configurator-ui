import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Route, Switch} from "react-router";
import I3Configurator from './containers/I3Configurator/I3Configurator';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route component={I3Configurator} />
        </Switch>
      </BrowserRouter>
    );
  }
}
