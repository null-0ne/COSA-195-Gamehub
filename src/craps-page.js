"use strict";

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
        addAttribute(gameDiv, "class", "col");
        addAttribute(gameDiv, "class", "bg-light");
        addAttribute(gameDiv, "id", "gameCol");

     let statsDiv = document.createElement("div");
        addAttribute(statsDiv, "class", "col");
        addAttribute(statsDiv, "id", "statsCol");

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

    //four rows 2 columns(inside each row) for stats column
     for (let i = 1; i < 5; i++) {
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
    addAttribute(img1, "class", "w-75");
    document.getElementById("gameColRow21").append(img1);

    let img2 = document.createElement("img");
    img2.src = "/images/dice0.png"
    addAttribute(img2, "id", "img2" );
    addAttribute(img2, "class", "w-75");
    document.getElementById("gameColRow23").append(img2);

    let img3 = document.createElement("img");
    img3.src = "/images/dice0.png"
    addAttribute(img3, "id", "img3" );
    addAttribute(img3, "class", "w-75");
    document.getElementById("gameColRow41").append(img3);

    let img4 = document.createElement("img");
    img4.src = "/images/dice0.png"
    addAttribute(img4, "id", "img4" );
    addAttribute(img4, "class", "w-75");
    document.getElementById("gameColRow43").append(img4);

    //Add text to the game section
    document.getElementById("gameColRow11").innerText = "Current Roll:";
     document.getElementById("gameColRow15").innerText = "Point:";
      document.getElementById("gameColRow31").innerText = "Last Roll: ";

     document.getElementById("gameColRow22").innerText = "+" ;//TODO: MAKE THEM REAL ELEMENTS
      document.getElementById("gameColRow42").innerText = "+";

      document.getElementById("gameColRow24").innerText = "= 8";
     document.getElementById("gameColRow44").innerText = "= 12";

     //Add button to roll
     let btnRoll = document.createElement("button");
     addAttribute(btnRoll, "id", "btnRoll");
     btnRoll.innerText = "Roll Dice"
     document.getElementById("gameColRow25").append(btnRoll);

    //session statistics
    document.getElementById("statsColRow11").innerText = "Session Scores"
     document.getElementById("statsColRow21").innerText = "Wins: 0"
      document.getElementById("statsColRow31").innerText = "Losses: 0"
       document.getElementById("statsColRow41").innerText = "Games Played: 0"
}

//Global Variables

let gamePoint = -1;
let winCount = 0;
let diceArray = [0, 0];
let gamesPlayed = 0;
let lossCount = 0;
let gameState = true; //win + loss is false, continuing is true
let didWin;

window.addEventListener("load", function(){
  document.getElementById("btnRoll").addEventListener("click", function(){
  rollDice(diceArray);
})

})

function rollDice(diceArray) {
  if(gameState === false){
    return;
  }
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

        let currRollSum = diceArray.reduce((acc, val) => acc+ val, 0);
    console.log(currRollSum);

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
    

    }, 1000);

    
}

function updateSession(didWin){
        if(didWin){
          winCount ++;
        }else{
          lossCount ++;
        }
        gamesPlayed ++;

        document.getElementById("statsColRow21").innerText = "Wins: " + winCount;
      document.getElementById("statsColRow31").innerText = "Losses: " + lossCount;
       document.getElementById("statsColRow41").innerText = "Games Played: " + gamesPlayed;
  }

function updateGame(dArray, currSum){
    document.getElementById("gameColRow44").innerText =  document.getElementById("gameColRow24").innerText;
     document.getElementById("gameColRow24").innerText = `= ${currSum}`;

     
     

}

function addAttribute(elem, name, val) {
    let currentVal = elem.getAttribute(name);
    if (currentVal === null) {
        elem.setAttribute(name, val);
        return;
    }
    elem.setAttribute(name, currentVal + " " + val);
}
