/*
    Filename:    yahtzee-count-score-card.cy.js.js
    Student:     Dustin Oliver, Garrett Thomson
    Course:      COSA 195 (Systems Project)
    Date:        2026-05-01
    Purpose:     Test yahtzee count score card Component
*/
import renderYahtzeeScoreCard from "../../src/components/yahtzee-score-card.js";

describe("score card", () => {
  it("categories are empty on load", () => {
    //render the component by itself in the /support/component-index.html
    const sharedParams = {
      dice: [1, 2, 3, 4, 5],
      rolls: [],
      totalScore: 0,
      scoreCardComplete: false,
      validateRolls: function () {},
    };

    cy.mount(renderYahtzeeScoreCard, sharedParams);

    // click the button 3 times and ensure count matches what is expected  (except the last time)
    for (let i = 0; i < 12; i++) {
      //OPTIONAL explicitly declare the expected text
      const expectedInnerText = ``;

      cy.get(".catInput").eq(i).should("have.value", expectedInnerText);
    }
  });

  it("allows user to select highlighted category", () => {
    const sharedParams = {
      dice: [1, 2, 3, 4, 5],
      rolls: [1],
      totalScore: 0,
      scoreCardComplete: false,
      validateRolls: function () {
        console.log("sdakjlghsdf");
      },
      autoGameLogic: true,
      selectCategory: function () {
        console.log("called selectCategory");
      },
    };

    cy.mount(renderYahtzeeScoreCard, { params: sharedParams });

    cy.get(".container").should("exist");

    cy.get("#Ones").should("be.disabled");

    cy.get("#LargeStraight").should("not.be.disabled").click();

    // cy.window().then((win) => {
    //   cy.spy(win.console, "log").as("consoleLog");
    // });

    //cy.get("@consoleLog").should("be.calledWith", "called selectCategory");

    cy.get(`#LargeStraight`).should("have.value", 1);
  });
});
