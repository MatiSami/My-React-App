import React, { Component } from "react";

import "./welcome-page.scss";
import Map from "../../components/component-map/map.jsx";

class  WelcomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeWelcomPage: true
    };
    this.handleStartClick = this.handleStartClick.bind(this)  
  }

  handleStartClick = () => {
    // console.log("Start clicked!");
    this.setState(prevState => ({
      activeWelcomPage: !prevState.activeWelcomPage
    }));
    // console.log(this.state.activeWelcomPage);
  };

  render() {
let active = this.state.activeWelcomPage;

    return (
      <>
      <div className={active ? "fadeIn" : "fadeOut"}>
          <div className="main-page">
            <div className="main-page-btn"
                onClick={this.handleStartClick}
            >
              Zaczynajmy
            </div>
          </div>
          </div>
        <Map visibility={active}/>  
      </>
    );
  }
}


export default WelcomePage;
