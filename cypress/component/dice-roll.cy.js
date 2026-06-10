import renderDiceRoll from "../../src/components/dice-roll";

/*
    Filename:    dice-roll.js
    Student:     Dustin Oliver & Garrett Thomson
    Course:      COSA 195 (Systems Project)
    Date:        2026-05-15
    Purpose:     Component test for dice-roll
*/
describe("Dice roll component test", () => {
  it("rolls dice when Roll button is clicked", () => {
    cy.mount(renderDiceRoll, {
      params: {
        dice: [1, 2, 3, 4, 5],
        lockable: true,
        finishedRolling: function () {},
      },
    });

    cy.get("#btnRoll").click();

    cy.wait(1200); // wait until animation is done

    cy.get(".lockable-dice")
      .invoke("attr", "src") // retrieving attribute & source
      .should("match", /dice[1-6]\.png$/); // img changed properly
  });

  it("locks dice on click", () => {
    const dice = [1, 2, 3, 4, 5];

    cy.mount(renderDiceRoll, {
      params: {
        dice: [1, 2, 3, 4, 5],
        lockable: true,
        finishedRolling: function () {},
      },
    });

    for (let i = 0; i < dice.length; i++) {
      cy.get(".lockable-dice").eq(i).should("not.have.class", "dice-img-lock");
      cy.get(".lockable-dice").eq(i).click();
      cy.get(".lockable-dice").eq(i).should("have.class", "dice-img-lock");
    }
  });

  it("changes dice on roll", () => {
    cy.mount(renderDiceRoll, {
      params: {
        dice: [1, 2, 3, 4, 5],
        lockable: true,
        finishedRolling: function () {},
      },
    });
    const dice = [1, 2, 3, 4, 5];

    cy.get("#btnRoll").click();

    cy.wait(1100);

    for (let i = 0; i < dice.length; i++) {
      cy.get(".lockable-dice").eq(i).should("not.match", dice[i]);
    }
  });
});
