/*
    Filename:    gameplay-section.cy.js.js
    Student:     
    Course:      COSA 195 (Systems Project)
    Date:        2026-05-01
    Purpose:     Test Gameplay-sectionComponent
*/
import renderGameplaySection from "../../src/components/gameplay-section.js";

describe("gameplay-section component test", () => {
  it("shows text", () => {
    
    const sharedParams = {
      totalScore: 0,
      submitScores: function () {},
      scoreSpan: document.createElement("span"),
    };

    cy.mount(renderGameplaySection, sharedParams);

    // click the button 3 times and ensure count matches what is expected  (except the last time)
    
      //OPTIONAL explicitly declare the expected text
        const expectedInnerText1 = `Current Roll:`;
        const expectedInnerText2 = `Roll Number: 1`;
        const expectedInnerText3 = `22:00`;
      //find the button and ensure innerText 'have.text' matches expected then click to increment the count
      cy.get(".cr").should("have.text",expectedInnerText1);
      cy.get("#numRoll").should("have.text",expectedInnerText2);
      cy.get("#time").should("have.text",expectedInnerText3);
    
  });
});
