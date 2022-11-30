import React, { useState } from "react";
import { ReactFloatingBalloons } from "../react-floating-balloons-main";
import swal from 'sweetalert';

var Randomtitle = [
  ["Bag"],
  ["School"],
  ["Student"],
  ["Class"],
  ["Teacher"],
  ["Friend"],
  ["Tiger"],
  ["Sir"],
  ["Pencil"],
  ["Mobile"]
];

var Showtitle = Randomtitle[Math.floor(Math.random()*Randomtitle.length)];
var Showtitle1 = Randomtitle[Math.floor(Math.random()*Randomtitle.length)];
var Showtitle2 = Randomtitle[Math.floor(Math.random()*Randomtitle.length)];
var Showtitle3 = Randomtitle[Math.floor(Math.random()*Randomtitle.length)];
var Showtitle4 = Randomtitle[Math.floor(Math.random()*Randomtitle.length)];
var Showtitle5 = Randomtitle[Math.floor(Math.random()*Randomtitle.length)];



function Game() {
    const supportsTouch = "ontouchstart" in window || navigator.msMaxTouchPoints;




 
  
    return (
      
      <div id="main-wrapper">
            {/* <div id="canvas"> */}
{/*             
            <div id="score-label">
                Score: <span id="score-count">0</span>
            </div> */}


      <div className="Game" style={{fontFamily: "sans-serif",
        textAlign: "center"}}>
        <h1>Score: 🎈</h1>
        {/* {supportsTouch ? (
          <h2>Click the balloons to pop 💥</h2>
        ) : (
          <h2>Double Click the balloons to pop 💥</h2>
        )} */}
        <ReactFloatingBalloons
          // count={10}
          msgText= {Showtitle}
          delay={1}
          // colors={["yellow", "purple", "blue", "green", "orange"]}
          // popVolumeLevel={0.1}
        />
        <ReactFloatingBalloons msgText= {Showtitle1} delay={15}/>
        <ReactFloatingBalloons msgText= {Showtitle2} delay={30}/> 
        <ReactFloatingBalloons msgText= {Showtitle3} delay={45}/>
        <ReactFloatingBalloons msgText= {Showtitle4} delay={60}/>
        <ReactFloatingBalloons msgText= {Showtitle5} delay={75}/>
        
        

      {/* </div> */}
        


      </div>
      </div>
    );
  }

export default Game;
