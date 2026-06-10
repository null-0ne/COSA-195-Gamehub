import renderPigScorecard from "../../src/components/pig-score-card.js";

describe("Pig score card test", () => {
  it("Score card loads all elements properly", () => {
    cy.mount(renderPigScorecard, { params: {} });
    cy.get("#prevRoll").invoke("text").should("contain", "Previous Roll:")
    cy.get("#lastRolled").invoke("attr", "src").should("contain", "images/dice0.png")

  });
});
