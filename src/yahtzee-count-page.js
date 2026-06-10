/*
 Filename:    yahtzee-count-page.js
 Student:     Riley Sane, Sucha Singh
 Course:      COSA 195 (Systems Project)
 Date:        2026-05-01
 Purpose:     Yahtzee count page
              Acts like a "Page" and can be used in the router in app.js
*/
import { postScores } from "./lib/score-service.js";
import renderYahtzeeScoreCard from "./components/yahtzee-score-card.js";
import renderGameplaySection from "./components/gameplay-section.js";
import renderHelpSlider from "./components/help-slider.js";
import renderDiceRoll from "./components/dice-roll.js";
/**
 * Render function to inject content into an HTML element
 * @param {*} element - HTML element target container
 * @param {*} params - optional values, objects or functions needed to render on the page
 */
export default function renderYahtzeeCountPage(
  element = document.createElement("div") /*default - new div element*/,
  params = { title: "yahtzee count" } /*default*/,
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
            <div class="col-6 border border-secondary rounded grey ">
              <div class="gameplay">
              </div>
              <div class="text-center py-5">
                <h1>Current Rolls: <span id="updateScore">0</span></h1>
              </div>
            </div>
            <div class="col-6 padding-lg border border-secondary rounded grey score-form">
            </div>
            <div class="col text-center">
          <button id="btnSubmit" class="btn btn-primary">Submit Score</button>
          <button id="btnReset" onclick="window.location.reload()" class="btn btn-primary">Reset</button>
          </div>
          </div>
        </div>
    </div>
    `;
  renderHelpSlider(document.getElementById("divHelp"), {
    text: `<p>Yahtzee Count
    is a dice game where players try to get certain patterns of dice in the
    smallest number of rolls.
     </p>
    <p>Have you ever played Yahtzee and been disappointed to not get
a Yahtzee or some other combination of dice? Then Yahtzee
Count is for you. In this game, you must get all possible dice
combinations (including a Yahtzee) and try to do so with the
smallest number of rules.</p>
<p>Basic Rules:</p>
<ul>
<li>The player starts by rolling five dice, counting one roll. </li>
<li>If the dice make up a desired combination, the player can
select that combination. The number of rolls will be recorded for
that combination. Desired combinations include: </li>
<li>Ones (must have at least three) </li>
<li>Twos (must have at least three)</li>
<li>Threes (must have at least three) </li>
<li>Fours (must have at least three) </li>
<li>Fives (must have at least three) </li>
<li>Sixes (must have at least three) </li>
<li>Three of a kind (any) </li>
<li>Four of a kind (any) </li>
<li>Full house – three of one kind and two of another </li>
<li>Small straight – at least four numbers in sequence </li>
<li>Large straight – five numbers in sequence</li>
<li>Free (any combination of dice) </li>
<li>Yahtzee (five of a kind) </li>
<li>If the dice do not make up a desired combination or the player
chooses not to play that combination, they can set aside zero to
four dice that will no longer be rolled. They then roll the remaining
dice, counting another roll. They can continue this process for as
long as they want.</li>
<li>When all the possible combinations have been selected, the 
game is over. The number of rolls for each combination is totaled
to get the final score (lower scores are better). </li>
</ul>`,
  });
  document.getElementById("btnSubmit").disabled = true;
  const diceElement = document.querySelector(`.gameplay`);
  const scoreCardElement = document.querySelector(`.score-form`);

  const sharedParams = {
    rolls: [],
    totalScore: 0,
    scoreCardComplete: false,

    scoreSpan: document.getElementById("updateScore"),

    validateRolls: function () {},

    selectCategory: function () {
      document.getElementById("updateScore").innerHTML = "0";
      this.dice = [1, 2, 3, 4, 5];
      renderDiceRoll(diceElement, this);
    },

    dice: [1, 2, 3, 4, 5],
    lockable: true,
    finishedRolling: function () {
      this.rolls.push(1);
      document.getElementById("updateScore").innerHTML = this.rolls.reduce(
        (a, b) => a + b,
        0,
      );

      this.validateRolls();

      if (sharedParams.scoreCardComplete) {
        document.getElementById("btnSubmit").disabled = false;
      }
    },
  };

  renderDiceRoll(diceElement, sharedParams);

  renderYahtzeeScoreCard(scoreCardElement, sharedParams);

  function submitScores() {
    postScores(
      sharedParams.totalScore,
      "yahtzee-count",
      sessionStorage.getItem("id"),
      sessionStorage.getItem("email"),
    );

    sharedParams.scoreCardComplete = false;
  }

  document.getElementById("btnSubmit").addEventListener("click", submitScores);

  //return the element in case it is needed for further logic
  return element;
}
