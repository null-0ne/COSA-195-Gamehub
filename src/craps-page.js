"use strict";

import { submitScore } from "./lib/score-service";
//import {renderRollSec} from "./components/renderRollSection";
import {addAttribute} from "./components/addAttribute";

export default function renderCrapsPage(param) {


     let body = document.querySelector("body");

     //Three rows of the page
    for (let i = 1; i < 4; i++) {
        let dRow = document.createElement("div");
        addAttribute(dRow, "class", "row");
        addAttribute(dRow, "id", "mainRow" + i);
        body.append(dRow);
    }

    //2 columns for the game and statistics
    let gameDiv = document.createElement("div");
        addAttribute(gameDiv, "class", "col-8");
        addAttribute(gameDiv, "class", "bg-light");
        addAttribute(gameDiv, "id", "gameCol");

     let statsDiv = document.createElement("div");
        addAttribute(statsDiv, "class", "col-3");
        addAttribute(statsDiv, "id", "statsCol");
         addAttribute(statsDiv, "class", "bg-light");
         addAttribute(statsDiv, "class", "ms-3");
        

      document.getElementById("mainRow2").append(gameDiv);
      document.getElementById("mainRow2").append(statsDiv);

    //four rows and 5 columns(inside each row) for game column
     for (let i = 1; i < 5; i++) {
        let dRow = document.createElement("div");
        addAttribute(dRow, "class", "row");
        addAttribute(dRow, "id", "gameRow" + i);
        gameDiv.append(dRow);
        for(let k=1; k< 6; k++){
          let dCol = document.createElement("div");
          addAttribute(dCol, "class", "col");
          addAttribute(dCol, "id", ("gameColRow" + i) + k);
          dRow.append(dCol);
        }
    }

    //five rows 2 columns(inside each row) for stats column
     for (let i = 1; i < 6; i++) {
        let dRow = document.createElement("div");
        addAttribute(dRow, "class", "row");
        addAttribute(dRow, "id", "statsRow" + i);
        statsDiv.append(dRow);

        for(let k=1; k< 2; k++){
          let dCol = document.createElement("div");
          addAttribute(dCol, "class", "col");
          addAttribute(dCol, "id", ("statsColRow" + i) + k);
          dRow.append(dCol);
        }
    }

    //create image elements
    let img1 = document.createElement("img");
    img1.src = "/images/dice0.png"
    addAttribute(img1, "id", "img1" );
   // addAttribute(img1, "class", "w-75");
    document.getElementById("gameColRow21").append(img1);

    let img2 = document.createElement("img");
    img2.src = "/images/dice0.png"
    addAttribute(img2, "id", "img2" );
   // addAttribute(img2, "class", "w-75");
    document.getElementById("gameColRow23").append(img2);

    let img3 = document.createElement("img");
    img3.src = "/images/dice0.png"
    addAttribute(img3, "id", "img3" );
    //addAttribute(img3, "class", "w-75");
    document.getElementById("gameColRow41").append(img3);

    let img4 = document.createElement("img");
    img4.src = "/images/dice0.png"
    addAttribute(img4, "id", "img4" );
    //addAttribute(img4, "class", "w-75");
    document.getElementById("gameColRow43").append(img4);

    //Add text to the game section
    document.getElementById("gameColRow11").innerText = "Current Roll:";
     document.getElementById("gameColRow15").innerText = "Point:";
      document.getElementById("gameColRow31").innerText = "Last Roll: ";

     document.getElementById("gameColRow22").innerText = "+" ;//TODO: MAKE THEM REAL ELEMENTS
      document.getElementById("gameColRow42").innerText = "+";

      document.getElementById("gameColRow24").innerText = "= 0";
     document.getElementById("gameColRow44").innerText = "= 0";

     //Add buttons 
     let btnRoll = document.createElement("button");
     addAttribute(btnRoll, "id", "btnRoll");
      addAttribute(btnRoll, "class", "visible");
     btnRoll.innerText = "Roll Dice";
     document.getElementById("gameColRow25").append(btnRoll);


let btnReset = document.createElement("button");
     addAttribute(btnReset, "id", "btnReset");
     addAttribute(btnReset, "class", "invisible");
     btnReset.innerText = "Reset Game"
     document.getElementById("gameColRow45").append(btnReset);

  let btnSubmit = document.createElement("button");
     addAttribute(btnSubmit, "id", "btnSubmit");
     addAttribute(btnSubmit, "class", "invisible");
      btnSubmit.innerText = "Submit Score "
      document.getElementById("statsColRow51").append(btnSubmit);
      

    //session statistics
    document.getElementById("statsColRow11").innerText = "Session Scores"
     document.getElementById("statsColRow21").innerText = "Wins: 0"
      document.getElementById("statsColRow31").innerText = "Losses: 0"
       document.getElementById("statsColRow41").innerText = "Games Played: 0"
}

//Global Variables




let isRolling = false;
let gamePoint = -1;
let winCount = 0;
let diceArray = [0, 0];
let gamesPlayed = 0;
let lossCount = 0;
let gameState = true; //win + loss is false, continuing is true
let didWin;

//button event listeners
window.addEventListener("load", function(){

  document.getElementById("btnRoll").addEventListener("click", function(){
  rollDice(diceArray); });

   document.getElementById("btnReset").addEventListener("click", resetGame);

   document.getElementById("btnSubmit").addEventListener("click", submitRatio);


});

function rollDice(diceArray) {
  if(gameState === false || isRolling){
    return;
  }
  isRolling = true;

  //show last roll under last roll
  document.getElementById("img3").src = `/images/dice${diceArray[0]}.png`
  document.getElementById("img4").src = `/images/dice${diceArray[1]}.png`

    let dieAnimation = setInterval(function () {
        for (let i = 0; i < diceArray.length; i++) {
            diceArray[i] = Math.floor(Math.random() *6 + 1);

                document
                .getElementById("img" + (i+1))
                .src =
                    "images/dice" + diceArray[i] + ".png";
                
            }
           
        },
        100);

    let stopAnimation = setTimeout(function () {
        clearInterval(dieAnimation);
        isRolling = false;

        let currRollSum = diceArray.reduce((acc, val) => acc+ val, 0);
    console.log(currRollSum);
 
      calculateRound(currRollSum);

    }, 1000);

    
}

function calculateRound(currRollSum){
     //if first roll of the game
    if(gamePoint == -1){
      
      //if losing value
      if(currRollSum == 2 || currRollSum == 3 || currRollSum == 12){
        gameState = false;
        didWin = false;
        
      }else if(currRollSum == 7 || currRollSum == 11 ){  //if game is won value
        gameState = false; 
        didWin = true;
       
       
      }else{ //if game isnt done, set the point
          gamePoint = currRollSum;
          document.getElementById("gameColRow15").innerText = "Point: " + gamePoint;
    }
    }else{ //if not first roll of the game
      if(currRollSum === 7){ //loss
         gameState = false;
         didWin = false;
        
      }else if(currRollSum === gamePoint){
         gameState = false;
        didWin = true;
        
      }
      //otherwise, user keeps rolling

    }

    updateGame(diceArray, currRollSum);
    if(gameState === false)
    {
        updateSession(didWin);
    }
    
    
}

function updateSession(didWin){
      btnSubmit.setAttribute("class", "visible");
        btnReset.setAttribute("class", "visible") ;
        if(didWin){
          winCount ++;
          document.getElementById("gameColRow35").innerText = "You Won!"
        }else{
          lossCount ++;
          document.getElementById("gameColRow35").innerText = "You Lost!"
        }
        gamesPlayed ++;

        document.getElementById("statsColRow21").innerText = "Wins: " + winCount;
      document.getElementById("statsColRow31").innerText = "Losses: " + lossCount;
       document.getElementById("statsColRow41").innerText = "Games Played: " + gamesPlayed;

       btnSubmit.setAttribute("class", "visible");
  }

function updateGame(dArray, currSum){
    document.getElementById("gameColRow44").innerText =  document.getElementById("gameColRow24").innerText;
     document.getElementById("gameColRow24").innerText = `= ${currSum}`;


}

function resetGame(){
   img1.src = "/images/dice0.png";
   img2.src = "/images/dice0.png";
   img3.src = "/images/dice0.png";
   img4.src = "/images/dice0.png";

   gamePoint = 0;
   isRolling = false;
   gameState = true;
   document.getElementById("gameColRow24").innerText = "=0";
    document.getElementById("gameColRow44").innerText = "=0";
     btnReset.setAttribute("class", "invisible") ;
      document.getElementById("gameColRow35").innerText = "";
  
}



/**
 * submits user score win/loss ratio
 * to the database
 */
function submitRatio(){

  
  btnSubmit.setAttribute("class", "invisible");
  let gameRatio = winCount/gamesPlayed;

  let userId = sessionStorage.getItem("userId");
  if(userId === null){
    userId = Math.floor(Math.random()* 1000000 + 1);
  }

  let userEmail = sessionStorage.getItem("userEmail");
  if(userEmail === null){
    userEmail = (Math.floor(Math.random()* 1000000 + 1)) + "@example.com";
  }

//  let info = {user: userId, email: userEmail, gameTitle: "craps", score: gameRatio};

 // function(() =>{})
   // submitRatio(info);
  

  submitScore(userId, userEmail, "craps", gameRatio);
}


