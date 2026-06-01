"use strict";

/*
 Filename:    craps-page.js
 Student:     Samuel & Garrett
 Course:      COSA 195 (Systems Project)
 Date:        2026-05-28
 Purpose:     The page to play the Craps game
*/

import { postScores } from "./lib/score-service";
import renderHelpSlider from "./components/help-slider.js";
import renderDiceRoll from "./components/dice-roll.js";

/**renders the craps page
 *
 * @param {} param
 */
export default function renderCrapsPage(
  element = document.createElement("div"),
  params = { title: "Craps" },
) {
  // set the content of the element
  element.innerHTML = `
    <div>
      <div class='d-flex justify-content-end pt-3'>
        <div id='divHelp'></div>
      </div>
    </div>
        </div>
          <div class="row">
            <div class="col-5 m-1 border border-secondary rounded grey "> 
            <p class="text-black fst-italic fw-bold">Current Roll:</p>
              <div class="gameplay">
              </div>
              <div class="text-center pt-5">
                <h1>SCORE: <span id="updateScore">0</span></h1>
              </div>
            </div>
            <div class="last-roll-container col-5 m-1 border border-secondary rounded grey">
            </div>
          </div>
        </div>
    </div>
    
    `;

  renderHelpSlider(document.getElementById("divHelp"), {
    text: `<p>Craps is a dice game played in casinos. The objective of the game is to roll two dices in the effort to roll a 7 or 11 to win the game. If you roll a 2, 3, or 12 you lose the game. <br><br>
        If you roll anything else, that number becomes your point, you will then continue to roll until you roll the same point value and win the game or you roll a 7 and lose the game.<br><br>
        In the instance of a win, you will be prompted to answer a question, if you answer correctly you will be rewarded the win, if the answer is wrong, you will lose the game.</p>`,
  });

  const sharedParams = {
    totalScore: 0,
    submitScores: function () {
      postScores(this.totalScore, "craps", 1, "john@saskpolytech.ca");
    },
    scoreSpan: document.getElementById("updateScore"),
  };

  // Load dice:
  renderDiceRoll(document.querySelector(`.gameplay`), {
    dice: [1, 2],
    lockable: false,
    point: 0,
    finishedRolling: function () {
      console.log("finished");
    },
  });
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

/**
 * animates the dice rolling,
 * calls calculateRound to determine if the game is complete
 *
 * @param {} diceArray
 * @returns
 */
function rollDice(diceArray) {
  if (gameState === false || isRolling) {
    return;
  }
  isRolling = true;

  //show last roll under last roll
  document.getElementById("img3").src = `/images/dice${diceArray[0]}.png`;
  document.getElementById("img4").src = `/images/dice${diceArray[1]}.png`;

  let dieAnimation = setInterval(function () {
    for (let i = 0; i < diceArray.length; i++) {
      diceArray[i] = Math.floor(Math.random() * 6 + 1);

      document.getElementById("img" + (i + 1)).src =
        "images/dice" + diceArray[i] + ".png";
    }
  }, 100);

  let stopAnimation = setTimeout(function () {
    clearInterval(dieAnimation);
    isRolling = false;

    let currRollSum = diceArray.reduce((acc, val) => acc + val, 0);
    console.log(currRollSum);

    calculateRound(currRollSum);
  }, 1000);
}

/**
 * calculates whether the game is completed or not after each roll
 * @param {} currRollSum //the current roll that was just completed
 */
function calculateRound(currRollSum) {
  //if first roll of the game
  if (gamePoint == -1) {
    //if losing value
    if (currRollSum == 2 || currRollSum == 3 || currRollSum == 12) {
      gameState = false;
      didWin = false;
    } else if (currRollSum == 7 || currRollSum == 11) {
      //if game is won value
      gameState = false;
      didWin = true;
    } else {
      //if game isnt done, set the point
      gamePoint = currRollSum;
      document.getElementById("gameColRow15").innerHTML =
        `<p class =" fs-1 mt-5">Point: ${gamePoint}</p>`;
    }
  } else {
    //if not first roll of the game
    if (currRollSum === 7) {
      //loss
      gameState = false;
      didWin = false;
    } else if (currRollSum === gamePoint) {
      gameState = false;
      didWin = true;
    }
    //otherwise, user keeps rolling
  }

  updateGame(diceArray, currRollSum);
  if (gameState === false) {
    updateSession(didWin);
  }
}

/**
 * increases wincount, losscount, and gamesplayed respectively
 * happens when a game is completed
 *
 * @param {} didWin //true if game ended in a win, else false
 */
function updateSession(didWin) {
  btnSubmit.setAttribute("class", "visible");
  btnReset.setAttribute("class", "visible");
  if (didWin) {
    winCount++;
    document.getElementById("gameColRow35").innerText = "You Won!";
  } else {
    lossCount++;
    document.getElementById("gameColRow35").innerText = "You Lost!";
  }
  gamesPlayed++;

  document.getElementById("statsColRow21").innerText = "Wins: " + winCount;
  document.getElementById("statsColRow31").innerText = "Losses: " + lossCount;
  document.getElementById("statsColRow41").innerText =
    "Games Played: " + gamesPlayed;

  btnSubmit.setAttribute("class", "visible");
}

/**
 * updates the current and last roll score
 *
 * @param {} dArr //roll data
 * @param {*} currSum current roll score
 */
function updateGame(dArr, currSum) {
  document.getElementById("gameColRow44").innerText =
    document.getElementById("gameColRow24").innerText;
  document.getElementById("gameColRow24").innerText = `= ${currSum}`;
}

function resetGame() {
  img1.src = "/images/dice0.png";
  img2.src = "/images/dice0.png";
  img3.src = "/images/dice0.png";
  img4.src = "/images/dice0.png";

  gamePoint = -1;
  isRolling = false;
  gameState = true;
  document.getElementById("gameColRow24").innerText = "=0";
  document.getElementById("gameColRow44").innerText = "=0";
  btnReset.setAttribute("class", "invisible");
  document.getElementById("gameColRow35").innerText = "";
  document.getElementById("gameColRow15").innerHTML =
    `<p class =" fs-1 mt-5">Point: </p>`;
}

/**
 * submits user score win/loss ratio
 * to the JSON database
 */
async function submitRatio() {
  btnSubmit.setAttribute("class", "invisible");
  let gameRatio = winCount / gamesPlayed;

  let userId = sessionStorage.getItem("userId");
  if (userId === null) {
    userId = Math.floor(Math.random() * 1000000 + 1);
  }

  let userEmail = sessionStorage.getItem("userEmail");
  if (userEmail === null) {
    userEmail = Math.floor(Math.random() * 1000000 + 1) + "@example.com";
  }

  await postScores(gameRatio, "craps", userId, userEmail);
}

/**
 * helper method for quickly adding attributes
 *
 * @param {} elem
 * @param {*} name
 * @param {*} val
 * @returns
 */
function addAttribute(elem, name, val) {
  let currentVal = elem.getAttribute(name);
  if (currentVal === null) {
    elem.setAttribute(name, val);
    return;
  }
  elem.setAttribute(name, currentVal + " " + val);
}
