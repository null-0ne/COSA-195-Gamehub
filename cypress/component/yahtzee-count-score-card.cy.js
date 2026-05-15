/*
    Filename:    countercy.js
    Student:     
    Course:      COSA 195 (Systems Project)
    Date:        2026-05-01
    Purpose:     Test Counter Component
*/
import renderYahtzeeScoreCard from "../../src/components/yahtzee-score-card.js";

describe("score card component test", () => {
  it("updates score when a score is entered into a category", () => {
    //render the component by itself in the /support/component-index.html
    cy.mount(renderYahtzeeScoreCard);

    // click the button 3 times and ensure count matches what is expected  (except the last time)
    for (let i = 0; i < 12; i++) {
      //OPTIONAL explicitly declare the expected text
      const expectedInnerText = `${i}`;

      //find the button and ensure innerText 'have.text' matches expected then click to increment the count
      cy.get(".catInput").eq(i).type(expectedInnerText);
      cy.get(".catInput").eq(i).should("have.text", expectedInnerText);
    }
  });
});
