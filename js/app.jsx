import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import './style.scss';

import Map from './components/component-map/map.jsx';
import WelcomePage from './components/welcome-page/welcome-page.jsx'

  class App extends Component {
    render() {
      return (
          <WelcomePage/>
      )
    }
  }

    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
