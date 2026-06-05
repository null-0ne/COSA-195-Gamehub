describe("pig solitaire page test", () => {
  beforeEach(() => {
    cy.visit(`http://localhost:5173/pig-solitaire`);
  });

  it("rolls the die when Roll button is clicked", () => {
    cy.get("#btnRoll").click();

    cy.wait(1200);

    cy.get(".lockable-dice")
      .invoke("attr", "src") // retrieving attribute & source
      .should("match", /dice[1-6]\.png$/);
    cy.get("#updateRolls").should("contain", "1");
  });

  it("updates points total", () => {
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
});
