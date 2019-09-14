import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';

import './style.scss';

import Map from './components/component-map/map.jsx';
import WelcomePage from './components/welcome-page/welcome-page.jsx'
import VoivodeshipPanel from "./components/voivodeship-panel/voivodeship-panel.jsx"


  class App extends Component {
    render() {
      return (
          <HashRouter>
            <Switch>
              <Route exact path='/' component={WelcomePage} />
              <Route path='/map' component={Map} />
              <Route path='/voivodeship/:id' component={VoivodeshipPanel} />
              {/* <Route component={NotFound} /> */}
            </Switch>
          </HashRouter>
      )
    }
  }

    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
