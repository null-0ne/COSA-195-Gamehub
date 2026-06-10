describe("pig solitaire page test", () => {
  beforeEach(() => {
    cy.visit(`http://localhost:5173/pig-solitaire`);
  });

  it("rolls the die when Roll button is clicked and increments number of rolls", () => {
    cy.get("#btnRoll").click();

    cy.wait(1200);

    cy.get(".lockable-dice")
      .invoke("attr", "src") // retrieving attribute & source
      .should("match", /dice[1-6]\.png$/);
    cy.get("#updateRolls").should("contain", "1");
  });

  it("updates points total or doesn't if you roll a one", () => {
    cy.get("#btnRoll").click();
    cy.wait(1200);
    cy.get(".lockable-dice")
      .invoke("attr", "src")
      .then((image) => {
        console.log(parseInt(image.charAt(12)));
        if (parseInt(image.charAt(12)) === 1) {
          cy.get("#updateScore").should("contain", "0");
        } else {
          cy.get("#updateScore").should("not.contain", "0");
        }
      });
  });

  it("updates banked score when bank score button is press after a few rolls", () => {
    for (let i = 0; i < 2; i++) {
      cy.get("#btnRoll").click();
      cy.wait(1200);
    }

    let score;

    cy.get("#updateScore").then(($scoreNum) => {
      score = $scoreNum.text();

      console.log(score);
      cy.get("#btnBank").click();
      cy.get("#bankedScore").invoke("text").should("contain", score);
      cy.get("#updateScore").invoke("text").should("contain", "0");
    });
  });

  it("reset the game after clicking reset game", () => {
    for (let i = 0; i < 2; i++) {
      cy.get("#btnRoll").click();
      cy.wait(1200);
    }
    cy.get("#btnBank").click();
    for (let i = 0; i < 2; i++) {
      cy.get("#btnRoll").click();
      cy.wait(1200);
    }
    cy.get("#btnReset").click();
    cy.get("#bankedScore").should("contain", "0");
    cy.get("#updateScore").should("contain", "0");
    cy.get("#updateRolls").should("contain", "0");
  });

  it("Updates the previous roll image properly after rolling more than once", () => {
    cy.get("#btnRoll").click();
    cy.wait(1200);
    cy.get(".lockable-dice")
      .invoke("attr", "src")
      .then((image) => {
        let firstNum = image.charAt(12);
        cy.get("#btnRoll").click();
        cy.wait(1200);
        cy.get("#lastRolled").invoke("attr", "src").should("contain", firstNum);
      });
  });
});
