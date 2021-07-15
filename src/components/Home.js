import React from 'react'
import {Animated} from "react-animated-css";

import '../App.css'

function Home() {
  return (
    <div className="banner-image vh-100 d-flex justify-content-center align-items-center" id="home">
        <div className="content text-white">
          <Animated animationIn="fadeIn" animationInDuration={1000} isVisible={true}>
            <h1 className= "intro shadow text-uppercase display-3 mb-4 fw-bold">Bienvenue sur mon portfolio</h1>
          </Animated>
          
          <Animated animationIn="fadeInLeft" animationInDuration={3000} isVisible={true}>
            <h2 className="shadow display-5 fw-bolder">Je suis Michaël, un développeur informatique.</h2>
          </Animated>
        </div>
      
    </div>
  );
}

export default Home;
