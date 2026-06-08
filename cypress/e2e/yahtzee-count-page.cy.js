/*
    Filename:    yahtzee-count-page.cy.js
    Student:     Riley Sane, Sucha Singh
    Course:      COSA 195 (Systems Project)
    Date:        2026-05-01
    Purpose:     End To End test Yahtzee Count page
*/
// describe("contact page test", () => {
//   beforeEach(() => {
//     // Cypress starts out with a blank slate for each test
//     // so we must tell it to visit our website with the `cy.visit()` command.
//     // Since we want to visit the same URL at the start of all our tests,
//     // we include it in our beforeEach function so that it runs before each test
//     cy.visit(`http://localhost:5173/yahtzee-count`);
//   });

//   it("updates score when data is entered into catageories", () => {
//     let nSum = 0;
//     let i;
//     for (i = 0; i < 11; i++) {
//       //OPTIONAL explicitly declare the expected text
//       const expectedInnerText = `${i}`;

//       //find the button and ensure innerText 'have.text' matches expected then click to increment the count
//       cy.get(".catInput").eq(i).type(expectedInnerText);

//       cy.get(".catInput").eq(i).should("have.value", expectedInnerText).click();
//       cy.get("#updateScore").should("have.text", nSum);
//       nSum += i;
//     }
//     //  Score should be 66 after the 11 is input into the last category
//     nSum += i;

//     cy.get(".catInput").eq(11).type("11");

//     cy.get(".catInput").eq(11).should("have.value", "11");
//     cy.get(".catInput").eq(5).click();

//     cy.get("#updateScore").should("have.text", nSum);

//     //  score should be 63 after the 4 is changed to a 1 in the threes category
//     cy.get(".catInput").eq(4).clear();

//     cy.get(".catInput").eq(4).type(1);
//     cy.get(".catInput").eq(5).click();
//     nSum -= 3;
//     cy.get("#updateScore").should("have.text", nSum);
//   });

// });
describe("Visit Site", () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
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
