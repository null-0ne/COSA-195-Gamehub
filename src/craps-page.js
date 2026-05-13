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
    img1.src = "/images/dice1.png"
    addAttribute(img1, "id", "img1" );
    addAttribute(img1, "class", "w-75");
    document.getElementById("gameColRow21").append(img1);

    let img2 = document.createElement("img");
    img2.src = "/images/dice1.png"
    addAttribute(img2, "id", "img2" );
    addAttribute(img2, "class", "w-75");
    document.getElementById("gameColRow23").append(img2);

    let img3 = document.createElement("img");
    img3.src = "/images/dice3.png"
    addAttribute(img3, "id", "img3" );
    addAttribute(img3, "class", "w-75");
    document.getElementById("gameColRow31").append(img3);

    let img4 = document.createElement("img");
    img4.src = "/images/dice4.png"
    addAttribute(img4, "id", "img4" );
    addAttribute(img4, "class", "w-75");
    document.getElementById("gameColRow33").append(img4);

    //Add text to the game section
    document.getElementById("gameColRow11").innerText = "Current Roll:";
     document.getElementById("gameColRow15").innerText = "Point:";

     document.getElementById("gameColRow22").innerText = "+" ;//TODO: MAKE THEM REAL ELEMENTS
      document.getElementById("gameColRow32").innerText = "+";

      document.getElementById("gameColRow35").innerText = "= 8";
     document.getElementById("gameColRow45").innerText = "= 12";

     //Add button to roll
     let btnRoll = document.createElement("button");
     addAttribute(btnRoll, "id", "btnRoll");
     btnRoll.innerText = "Click to Roll"
     document.getElementById("gameColRow25").append(btnRoll);


     

}

let winCount = 0;
let diceArray = [0, 0];
let gamesPlayed;
let lossCount = 0;
//let continue;

function rollDice(diceArray) {
    let dieAnimation = setInterval(function () {
        for (let i = 0; i < diceArray.length; i++) {
            die = Math.floor(Math.random() *6 + 1);
            document
                .getElementById("dieImg" + i+1)
                .setAttribute(
                    "src",
                    "../public/images/dice" + diceArray[i] + ".png",
                );
        }
    }, 100);

    let stopAnimation = setTimeout(function () {
        clearInterval(dieAnimation);
    }, 1000);
}

function addAttribute(elem, name, val) {
    let currentVal = elem.getAttribute(name);
    if (currentVal === null) {
        elem.setAttribute(name, val);
        return;
    }
    elem.setAttribute(name, currentVal + " " + val);
}
