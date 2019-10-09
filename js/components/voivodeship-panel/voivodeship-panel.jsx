import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom'

// import img from "../../../assets/arms/dolnoslaskie.svg";
import img0 from "../../../assets/arms/pomorskie.png";
import img1 from "../../../assets/arms/swietokrzyskie.png";

import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
  } from 'react-router-dom';


import "../voivodeship-panel/voivodeship-panel.scss"

class VoivodeshipPanel extends Component {
    constructor(props){
        super(props)  
        this.state = {
            id : this.props.match.params.id,
            voivodeship : "",
            population : "",
            area: "",
            description: "",
            arms : ""
        }

        this.getState = this.getState.bind(this);
    }

  
    //  getInfo(id){
    //     fetch("http://localhost:3000/voivodeship").then( resp => resp.json())
    //     .then(obj => {
    //         console.log(obj[id].title)
    //         console.log(obj[id].arms)

    //         this.setState({
    //             voivodeship : obj[id].title,
    //             population : obj[id].population,
    //             area : obj[id].area,
    //             description : obj[id].description,
    //             arms: obj[id].arms
    //         })
    //     })
    // }

    componentDidMount(){
          let  id = this.state.id;
        console.log(id)
        fetch("http://localhost:3000/voivodeship").then( resp => resp.json())
        .then(obj => {
            console.log(obj[id].title)
            console.log(obj[id].arms)

            this.setState({
                voivodeship : obj[id].title,
                population : obj[id].population,
                area : obj[id].area,
                description : obj[id].description,
                arms: obj[id].arms
            })
        })
    }

    getInfo = ( id ) => {
        let counter = id
        if( counter <= 15){
          fetch("http://localhost:3000/voivodeship").then( resp => resp.json())
        .then(obj => {
            console.log(obj[id].title)
            console.log(obj[id].arms)

            this.setState({
                voivodeship : obj[id].title,
                population : obj[id].population,
                area : obj[id].area,
                description : obj[id].description,
                arms: obj[id].arms
            })
        })  
    } else {
        counter = 0
        this.setState({
            id : -1
        })

    }
  }
    
    nextVoivode(){
        let newId = this.getState();
        this.setState({
            id : newId
        })
        this.getInfo(newId);
    }

    getState() {
        var i = (parseInt(this.state.id) + 1);
        if(i > 15)
            return 0;
        return i;
    }
   
      
    render(){
        const url = this.state.arms       
        return (
            <>
            <div>
                <div className="voivodeship-title-bg2"></div>
                <div className="voivodeship-title-bg"></div>
                <div className="voivodeship-title">
                    <h1>Województwo: </h1> 
                    <div className="voivodeship-title_name">
                      {this.state.voivodeship} 
                    </div>
                   
                </div>
                
                <div className="circle-data-population">
                    <h2>Liczba mieszkańców:</h2>
                    <div>
                     {this.state.population} 
                    </div>   
                </div>
                
                <div className="circle-data-area">
                   <h2>Powerzchnia województwa:</h2> 
                     <div>
                         {this.state.area} km <span>2</span>
                     </div>  
                </div>

              <div className="arms">
                <div className="data-arms" style={{backgroundImage: `url( ${url} )`,
                backgroundSize: 'contain', 
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'       
                     }}> 
                </div> 
                </div>
                <div className="voicodeship-data-desc">
                    <div>
                        <h4>Kilka słów o: </h4> 
                    </div>
                    <div className="voicodeship-data-desc__text">
                        <p>{this.state.description}</p>
                    </div>
                </div>              
            </div>


            <Link to={"/map"} className="back-btn"> Powrót do mapy</Link>

            <NavLink className="next-btn" to={"/voivodeship/" + this.getState()}
                onClick={e => this.nextVoivode(e)}
            >Następne województwo</NavLink>

            </>
        )
    }
}
export default VoivodeshipPanel