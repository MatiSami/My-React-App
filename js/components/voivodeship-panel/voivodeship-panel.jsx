import React, { Component } from "react";
import ReactDOM from 'react-dom';

import "../voivodeship-panel/voivodeship-panel.scss"

class VoivodeshipPanel extends Component {
    constructor(props){
        super(props)
       console.log(this.props.match.params.id);   
    }
      
    render(){


        const voivodeship = this.props.match.params.id
        return (
            <div>
                <h1>Panel województwa: {voivodeship}</h1>
            </div>
        )
    }
}
export default VoivodeshipPanel