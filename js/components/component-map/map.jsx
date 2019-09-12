import React, {Component} from 'react';

import './map-style.scss';


class Map extends Component {
  constructor(props){
    super(props)
  }
    render() {
      const active = this.props ? "fadeOut" : "fadeIn";
      console.log(this.props)
      return (
        <div className={active}>Hello
        </div>
        
      )
    }
  }

export default Map