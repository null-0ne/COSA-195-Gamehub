"use strict";

export default function renderCrapsPage(param) {
  document.querySelector("body").innerHTML +=
    "<section id='mainSection' class='container'></section>";

  document.getElementById("mainSection").innerHTML +=
    "<div id='row1' class='row'></div>";
  document.getElementById("mainSection").innerHTML +=
    "<div id='row2' class='row'></div>";
  document.getElementById("mainSection").innerHTML +=
    "<div id='row3' class='row'></div>";

  document.getElementById("row2").innerHTML +=
    "<div id='r2c1' class='col'></div>";
  document.getElementById("row2").innerHTML +=
    "<div id='r2c2' class='col'>Ahdskjghadlfkjghadfljk</div>";
}

let winCount = 0;
let diceArray = [0, 0];
let gamesPlayed;
let lossCount = 0;
//let continue;

function rollDice(diceArray) {
  let dieAnimation = setInterval(function () {
    for (let i = 0; i < diceArray.length; i++) {
      die = Math.floor(Math.random() + 1 * 6);
      document
        .getElementById("dieImg" + i)
        .setAttribute(
          "src",
          "../public/images/img-" + diceArray[i] + "-die.svg",
        );
    }
  }, 100);

  let stopAnimation = setTimeout(function () {
    clearInterval(dieAnimation);
  }, 1000);
}
