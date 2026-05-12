/*
 Filename:    yahtzee-count-page.js
 Student:     Riley Sane, 
 Course:      COSA 195 (Systems Project)
 Date:        2026-05-01
 Purpose:     Counter Page Component
              Acts like a "Page" and can be used in the router in app.js
*/
import renderYahtzeeCount from "./components/yahtzee-score-card.js";
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
        <div class="score-form">
            
        </div>
    </div>
    `;

  // pass by reference object to send as params agruement to multiple components
  const sharedParams = {
    count: 0,
    incr: function () {
      this.count++;
    },
  };

  //return the element in case it is needed for further logic
  return element;
}
