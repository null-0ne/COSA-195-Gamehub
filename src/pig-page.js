import { postScores } from "./lib/score-service.js";
import renderHelpSlider from "./components/help-slider.js";
import renderDiceRoll from "./components/dice-roll.js";

/**
 * Render function to inject content into an HTML element
 * @param {*} element - HTML element target container
 * @param {*} params - optional values, objects or functions needed to render on the page
 */
export default function renderPigPage(
  element = document.createElement("div") /*default - new div element*/,
  params = { title: "Pig Solitaire" } /*default*/,
) {
  // set the content of the element
  element.innerHTML = `
    <div>
        
        <div class="">
        <h2>SaskPolytech Pig Solitaire</h2>
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
  renderHelpSlider(document.getElementById("divHelp"), {
    text: `<p>Yahtzee Count
    is a dice game where players try to get certain patterns of dice in the
    smallest number of rolls.
     </p>
    
<p>Basic Rules:</p>
<ul>
<li>lorem ipsum</li>
<li>lorem ipsum</li>
<li>lorem ipsum</li>
<li>lorem ipsum</li>
<li>lorem ipsum</li>
<li>lorem ipsum</li>
<li>lorem ipsum</li>
<li>lorem ipsum</li>
<li>lorem ipsum</li>
<li>lorem ipsum</li>
<li>lorem ipsum</li>
<li>lorem ipsum</li>
<li>lorem ipsum</li>
<li>lorem ipsum</li>
<li>lorem ipsum</li>
<li>lorem ipsum</li>
<li>lorem ipsum</li>
</ul>`,
  });

  const sharedParams = {
    totalScore: 0,
    submitScores: function () {
      postScores(
        this.totalScore,
        "pig-solitaire",
        sessionStorage.getItem("id"),
        sessionStorage.getItem("email"),
      );
    },
    scoreSpan: document.getElementById("updateScore"),
    dice: [1],
    lockable: false,
    rollCount: 0,
    finishedRolling: function () {
      let currentscore = document.querySelector("#curr-score").innerHTML;

      let currentRoll = parseInt(
        document
          .querySelector(".lockable-dice")
          .src.charAt(
            document.querySelector(".lockable-dice").src.lastIndexOf("e") + 1,
          ),
      );

      if (currentRoll === 1) {
        if (parseInt(document.querySelector("#curr-score").innerHTML) === 0) {
          this.scoreSpan.innerHTML = 0;
        } else {
          document.querySelector("#curr-score").innerHTML = 0;
        }
      } else {
        document.querySelector("#curr-score").innerHTML =
          parseInt(currentscore) +
          parseInt(
            document
              .querySelector(".lockable-dice")
              .src.charAt(
                document.querySelector(".lockable-dice").src.lastIndexOf("e") +
                  1,
              ),
          );
      }
    },
  };
  element.innerHTML += `<h1>CURRENT SCORE: <span id="curr-score">0</span></h1>`;
  element.innerHTML += `<button id="bank">BANK</button>`;

  document.querySelector("#bank").addEventListener("click", function () {
    console.log("RAN");
    document.getElementById("updateScore").innerHTML = parseInt(
      document.querySelector("#curr-score").innerHTML,
    );
    document.querySelector("#curr-score").innerHTML = 0;
  });
  //renderGameplaySection(document.querySelector(`.gameplay`), sharedParams);
  renderDiceRoll(document.querySelector(`.gameplay`), sharedParams);

  //return the element in case it is needed for further logic
  return element;
}
