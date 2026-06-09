/*
    Filename:    gameplay-section.cy.js.js
    Student:     Riley Sane, Sucha Singh
    Course:      COSA 195 (Systems Project)
    Date:        2026-05-01
    Purpose:     Test Gameplay-section Component
*/
import renderUserInfo from "../../src/components/user-info.js";

describe("", () => {
  it("checks user info - email, tag, and avatar", () => {
     cy.mount(renderUserInfo,{params: {email: "email@saskpolytech.ca", gamerAvatar : "/images/avatar3.png", gamerTag: "tiger"}});

    cy.get("#inputEmailAddress").should("have.value","email@saskpolytech.ca")
    cy.get("#gamerTag").should("have.value","tiger")

    cy.get("#profileImg").click()
    cy.get("#imgPicker").should("be.visible")

    cy.get("#profileImg").click()
    cy.get("#imgPicker").should("not.be.visible")

    cy.get("#profileImg").click()
    cy.get("#imgPicker").should("be.visible")
    cy.get('input[type="radio"][value="/images/avatar4.png"]')
     .should('not.be.checked')

    cy.get('input[type="radio"][value="/images/avatar2.png"]')
     .check({force: true})
     .should('be.checked')
     
    cy.get("#gamerTag").clear()
    cy.get("#gamerTag").type("Lion")

    cy.get("#btnSaveProfile").click()

    cy.get("#inputEmailAddress")
    .should("be.disabled")
     
  });
});
