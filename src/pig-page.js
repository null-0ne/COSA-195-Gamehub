import { postScores } from "./lib/score-service.js";
import renderGameplaySection from "./components/gameplay-section.js";
import renderPigScorecard from "./components/pig-score-card.js";
import renderHelpSlider from "./components/help-slider.js";
import renderDiceRoll from "./components/dice-roll.js";
import { getQuestion } from "./lib/question-service.js";
import {renderTriviaQuestion} from "./components/trivia-question.js"; 
/**
 * Render function to inject content into an HTML element
 * @param {*} element - HTML element target container
 * @param {*} params - optional values, objects or functions needed to render on the page
 */
export default async  function renderPigPage(
  element = document.createElement("div") /*default - new div element*/,
  params = { title: "Pig Solitaire" } /*default*/,
) {
  // set the content of the element
  element.innerHTML = `
    <div>
        
        <div class="">
          <div class='d-flex justify-content-end pt-3'>
    <div id='divHelp'></div>
    </div>
    </div>
        </div>
          <div class="row">
            <div class="col-7 border-secondary rounded grey me-5">
            <h1>Current Roll:</h1>
              <div class="gameplay">
              </div>
              <div class="text-center pt-5">
                <h1>Points: <span id="updateScore">0</span></h1>
                <h1>Number of Rolls: <span id="updateRolls">0</span></h1>
              </div>
            </div>
            <div class="col-4 border border-secondary rounded grey score-form position-relative ms-5 ">
            </div>
            
          </div>
          <div class="d-flex flex-row-reverse">
              <h1 class="me-5">BANKED SCORE: <span id="bankedScore">0</span></h1>
          </div>
          <div class="d-flex flex-row-reverse me-5">
              <button class="btn btn-primary " id="btnReset" type="button" >Reset Game</button>
              <button class="btn btn-primary me-3" data-bs-toggle="modal" data-bs-target="#modalTrivia" id="btnSubmit" type="button" >Submit Score</button>
        <div class="modal fade" id="modalTrivia" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Skill Test Question</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body" id='radio'>

         </div>
    </div>
  </div>
</div>
              <button id="btnBank" class="btn btn-primary me-3">Bank Score</button>
              
          </div>
        </div>
    </div>
    `;

    const qData = await getQuestion();
    renderTriviaQuestion(document.getElementById("radio"), {questions: qData, onCorrect: function(){console.log("correct");submitScore();}, onInCorrect: function(){console.log("incorrect");resetGame();}})
    

  renderHelpSlider(document.getElementById("divHelp"), {
    text: `<p>Pig Solitaire
    is a dice game where the player tries to get a banked score of at least 100
    with the minimum amount of rolls and banking of points.
    </p>
<p>Basic Rules: </br>
Each round, a player repeatedly rolls a dice until a one is rolled or the player "banks" their current dice score</p>
<ul>
<li>If the player rolls a one they lose their unbanked points and have to begin building it up again</li>
<li>If the player rolls any other number, it is added to their turn total and the player's turn continues.</li>
<li>If the player rolls a one twice in a row, they will lose their banked points and have to start all over again.</li>
</ul>
<p><strong>Once a player's score reaches 100+, they win and the game ends. To submit their score they must answer a trivia question.
 Their position on the leaderboard is determined by how many rolls it took for them to win multiplied by the number of banks they used.</strong></p>
`,
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
        if (lastRoll === 1) {
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
 // document.querySelector("#btnSubmit").addEventListener("click", submitScore);

  function bankPoints() {
    if (
      sharedParams.rollCount > 0 &&
      parseInt(sharedParams.scoreSpan.innerHTML) > 0
    ) {
      bankedPoints += parseInt(sharedParams.scoreSpan.innerHTML);
      sharedParams.scoreSpan.innerHTML = 0;
      // console.log(bankedPoints);
      document.getElementById("bankedScore").innerHTML = bankedPoints;
      bankCount++;
    }
  }

  function submitScore() {
    if (bankedPoints + parseInt(sharedParams.scoreSpan.innerHTML) >= 100) {
      postScores(
        bankCount == 0
          ? sharedParams.rollCount
          : sharedParams.rollCount * bankCount,
        "pig-solitaire",
        sessionStorage.getItem("id"),
        sessionStorage.getItem("email"),
      );
      resetGame();
    }
  }

  document.querySelector("#btnReset").addEventListener("click", resetGame);

  function resetGame() {
    lastRoll = 0;
    numRolled = 0;
    bankedPoints = 0;
    bankCount = 0;

    sharedParams.totalScore = 0;
    sharedParams.rollCount = 0;

    document.getElementById("lastRolled").src =
      "images/dice" + lastRoll + ".png";

    sharedParams.scoreSpan.innerHTML = 0;

    document.getElementById("updateRolls").innerHTML = 0;
    document.getElementById("bankedScore").innerHTML = 0;
  }

  //   renderGameplaySection(document.querySelector(`.gameplay`), sharedParams);
  renderPigScorecard(document.querySelector(`.score-form`), sharedParams);


  //trivia code
//    const qData = await getQuestion();
//     renderTriviaQuestion(document.getElementById("Test"), {questions: qData,
//        onCorrect: function(){postScores(this.totalScore, "yahtzee-count", userId, userEmail);}, 
//        onInCorrect: function(){resetGame();}});
//     document.getElementById("subButton").addEventListener("click", function(){
//       console.log(document.querySelector('input[name="fav_language"]:checked').value);
//       console.log("correct:" + qData.correctAnswer);
//     })
  
   // modalElement.modal.show();
  
    function resetGame()
    {
      return;
    }



  return element;
}
