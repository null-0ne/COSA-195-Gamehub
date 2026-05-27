/*
    Filename:    yahtzee-count-score-card.cy.js.js
    Student:     Riley Sane, Sucha Singh
    Course:      COSA 195 (Systems Project)
    Date:        2026-05-01
    Purpose:     Test yahtzee count score card Component
*/
import renderYahtzeeScoreCard from "../../src/components/yahtzee-score-card.js";

describe("score card component test", () => {
  it("updates score when a score is entered into a category", () => {
    //render the component by itself in the /support/component-index.html
    const sharedParams = {
      totalScore: 0,
      submitScores: function () {},
      scoreSpan: document.createElement("span"),
    };

    cy.mount(renderYahtzeeScoreCard, sharedParams);

    // click the button 3 times and ensure count matches what is expected  (except the last time)
    for (let i = 0; i < 12; i++) {
      //OPTIONAL explicitly declare the expected text
      const expectedInnerText = `${i}`;

      //find the button and ensure innerText 'have.text' matches expected then click to increment the count
      cy.get(".catInput").eq(i).type(expectedInnerText);
      cy.get(".catInput").eq(i).should("have.value", expectedInnerText);
    }
  });
});
