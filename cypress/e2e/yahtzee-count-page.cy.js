/*
    Filename:    yahtzee-count-page.cy.js
    Student:     Dustin Oliver, Garrett Thomson
    Course:      COSA 195 (Systems Project)
    Date:        2026-05-01
    Purpose:     End To End test Yahtzee Count page
*/
describe("Yahtzee Count page test", () => {
  beforeEach(() => {
    cy.visit(`http://localhost:5173/yahtzee-count`);
  });

  it("Displays dice component with five dice and a roll button", () => {
    cy.get(".lockable-dice")
      .invoke("attr", "src")
      .should("match", /dice[1-6]\.png$/);
    cy.get("#btnRoll").as("button").should("have.length", 1);
  });

  it("Displays score card component with categories and a submit score buttin", () => {
    cy.get(".catInput").invoke("val").should("equal", "");
    cy.get("#btnSubmit").as("button").should("have.length", 1);
  });
});
describe("Visit Site", () => {
  beforeEach(() => {
    cy.visit(`http://localhost:5173/yahtzee-count`);
  });
  it("Help Icon is visible on page Yahtzee Count", () => {
    cy.get("#HelpIcon").should("be.visible");
    cy.get("#offcanvasRightLabel").should("not.be.visible");
    cy.get(".offcanvas-body").should("not.be.visible");
  });

  it("Help Icon When clicked shows rules", () => {
    cy.get("#HelpIcon").should("be.visible");
    cy.get("#offcanvasRightLabel").should("not.be.visible");
    cy.get(".offcanvas-body").should("not.be.visible");
    cy.get("#HelpIcon").click();
    cy.get("#offcanvasRightLabel").should("be.visible");
    cy.get(".offcanvas-body").should("be.visible");
    cy.get(".offcanvas-body").contains(
      "Yahtzee Count is a dice game where players try to get certain patterns of dice in the smallest number of rolls.",
    );
  });

  it("Help Icon Hidden When AnyWhere on page is clicked", () => {
    cy.get("#HelpIcon").should("be.visible");
    cy.get("#offcanvasRightLabel").should("not.be.visible");
    cy.get(".offcanvas-body").should("not.be.visible");
    cy.get("#HelpIcon").click();
    cy.get("#offcanvasRightLabel").should("be.visible");
    cy.get(".offcanvas-body").contains(
      "Yahtzee Count is a dice game where players try to get certain patterns of dice in the smallest number of rolls.",
    );
    cy.get("#app").click();
    cy.get("#offcanvasRightLabel").should("not.be.visible");
    cy.get("#HelpIcon").should("be.visible");
    cy.get(".offcanvas-body").should("not.be.visible");
  });
});
