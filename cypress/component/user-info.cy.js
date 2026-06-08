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

    sessionStorage.setItem("email", "ogugofor2899@saskpolytech.ca")
    let avatar = sessionStorage.getItem("avatar")
    cy.get("#inputEmailAddress").should("have.value","ogugofor2899@saskpolytech.ca")
    cy.get("#gamerTag").should("have.value","")
    
  });
});
