import { postScores } from "./lib/score-service.js";
import renderGameplaySection from "./components/gameplay-section.js";
import renderPigScorecard from "./components/pig-score-card.js";
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
        ${params.title}</h1>
        <div class="">
          <div class='d-flex justify-content-end pt-3'>
    <div id='divHelp'></div>
    </div>
    </div>
        </div>
          <div class="row">
            <div class="col-8 boder border-secondary rounded grey ">
              <div class="gameplay">
              </div>
              <div class="text-center pt-5">
                <h1>Points: <span id="updateScore">0</span></h1>
                <h1>Number of Rolls: <span id="updateRolls">0</span></h1>
              </div>
            </div>
            <div class="col-4 border border-secondary rounded grey score-form align-items-center d-flex flex-wrap">
            </div>
            <div>
              <h1 >BANKED SCORE: <span id="bankedScore">0</span></h1>
              <button class="btn btn-primary" id="btnSubmit" type="button" >Submit Score</button>
              <button class="btn btn-primary" id="btnReset" type="button" >Reset Game</button>
            </div>
          </div>
        </div>
    </div>
    `;
  renderHelpSlider(document.getElementById("divHelp"), {
    text: `<p>
     </p>
    <p></p>
<p>Basic Rules:</p>
<ul>
<li></li>
<li></li>
</ul>`,
  });

  let lastRoll = 0;
  let numRolled = 0;
  let bankedPoints = 0;
  let bankCount = 0;

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
    dice: [1],
    lockable: false,
    rollCount: 0,
    finishedRolling: function () {
      this.rollCount++;
      document.getElementById("updateRolls").innerHTML = this.rollCount;
      lastRoll = numRolled;
      numRolled = parseInt(
        document
          .querySelector(".lockable-dice")
          .src.charAt(
            document.querySelector(".lockable-dice").src.lastIndexOf("e") + 1,
          ),
      );

      document.getElementById("lastRolled").src =
        "images/dice" + lastRoll + ".png";

      if (numRolled === 1) {
        this.scoreSpan.innerHTML = 0;
        if(lastRoll === 1)
        {
          bankedPoints = 0;
          document.getElementById("bankedScore").innerHTML = bankedPoints;
        }
      } else {
        this.scoreSpan.innerHTML =
          parseInt(this.scoreSpan.innerHTML) + numRolled;
      }
    },
    scoreSpan: document.getElementById("updateScore"),
  };

  

  renderDiceRoll(document.querySelector(`.gameplay`), sharedParams);
  
  document.querySelector("#btnBank").addEventListener("click", bankPoints);
  console.log(sharedParams.rollCount * bankCount);
  document.querySelector("#btnSubmit").addEventListener("click", submitScore);

  function bankPoints() {
    if(sharedParams.rollCount > 0 && parseInt(sharedParams.scoreSpan.innerHTML) > 0)
    {
      bankedPoints += parseInt(sharedParams.scoreSpan.innerHTML);
      sharedParams.scoreSpan.innerHTML = 0;
      // console.log(bankedPoints);
      document.getElementById("bankedScore").innerHTML = bankedPoints;
      bankCount++;
    }
  }

  function submitScore()
  {
    postScores(sharedParams.rollCount * bankCount, "pig-solitaire", sessionStorage.getItem("id"), sessionStorage.getItem("email"))
  }

  //   renderGameplaySection(document.querySelector(`.gameplay`), sharedParams);
  renderPigScorecard(document.querySelector(`.score-form`), sharedParams);
  return element;
}
