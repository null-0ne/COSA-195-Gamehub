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
/**
 * Render function to inject content into an HTML element
 * @param {*} element - HTML element target container
 * @param {*} params - optional values, objects or functions needed to render on the page
 */
export default function renderYahtzeeCountPage(
  element = document.createElement("div") /*default - new div element*/,
  params = { title: "Yahtzee count" } /*default*/,
) {
  // set the content of the element
  element.innerHTML = `
    <div>
        <h1><img src="/sp.jpg" class="logo vanilla" alt="Saskpolytech logo" />
        ${params.title}</h1>
        <div class="">
        <h2>SaskPolytech Yahtzee Count</h2>
          <div class='d-flex justify-content-end pt-3'>
    <div id='divHelp'></div>
    </div>
    </div>
        </div>
          <div class="row">
            <div class="col-8 border border-secondary rounded grey ">
              <div class="gameplay">
              </div>
              <div class="text-center pt-5">
                <h1>SCORE: <span id="updateScore">0</span></h1>
              </div>
            </div>
            <div class="col-4  score-form">
            </div>
          </div>
        </div>
    </div>
    `;
    renderHelpSlider(document.getElementById("divHelp"),{text: `<p>Yahtzee Count
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
</ul>`})

  const sharedParams = {
    totalScore: 0,
    submitScores: function () {
      postScores(this.totalScore, "yahtzee-count", 1, "john@saskpolytech.ca");
    },
    scoreSpan: document.getElementById("updateScore"),
  };

  renderGameplaySection(document.querySelector(`.gameplay`), sharedParams);
  renderYahtzeeScoreCard(document.querySelector(`.score-form`), sharedParams);
  let inputOnes = element.querySelectorAll(".catInput");
  for (let input of inputOnes) {
    input.addEventListener("change", function () {
      sharedParams.scoreSpan.innerHTML = sharedParams.totalScore;
    });
  }
  //return the element in case it is needed for further logic
  return element;
}
