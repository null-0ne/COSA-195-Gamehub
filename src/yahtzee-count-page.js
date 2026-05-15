/*
 Filename:    yahtzee-count-page.js
 Student:     Riley Sane, 
 Course:      COSA 195 (Systems Project)
 Date:        2026-05-01
 Purpose:     Counter Page Component
              Acts like a "Page" and can be used in the router in app.js
*/
import { postScores } from "./lib/score-service.js";
import renderYahtzeeScoreCard from "./components/yahtzee-score-card.js";
import renderGameplaySection from "./components/gameplay-section.js";
/**
 * ContactPage Component - Acts like a "Page" and can be used in the router in main.js
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
