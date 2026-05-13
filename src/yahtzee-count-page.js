/*
 Filename:    yahtzee-count-page.js
 Student:     Riley Sane, 
 Course:      COSA 195 (Systems Project)
 Date:        2026-05-01
 Purpose:     Counter Page Component
              Acts like a "Page" and can be used in the router in app.js
*/

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
            <div class="col-8 border border-secondary rounded grey gameplay">
            </div>
            <div class="col-4  score-form">
            </div>
          </div>
        </div>
    </div>
    `;
    renderYahtzeeScoreCard(document.querySelector(`.score-form`));
    renderGameplaySection(document.querySelector(`.gameplay`));
  
  //return the element in case it is needed for further logic
  return element;
}
