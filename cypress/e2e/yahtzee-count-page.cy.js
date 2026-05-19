describe('Visit Site', () => {
    beforeEach(() => {
        // Cypress starts out with a blank slate for each test
        // so we must tell it to visit our website with the `cy.visit()` command.
        // Since we want to visit the same URL at the start of all our tests,
        // we include it in our beforeEach function so that it runs before each test
        cy.visit(`http://localhost:5173/YahtzeeCount`)
    })
    it('Help Icon is visible on page Yahtzee Count', () => {
        cy.get("#HelpIcon").should("be.visible");
        cy.get("#offcanvasRightLabel").should("not.be.visible");
        cy.get(".offcanvas-body").should("not.be.visible");
    })

    it('Help Icon When clicked shows rules' , () => {
        cy.get("#HelpIcon").should("be.visible");
        cy.get("#offcanvasRightLabel").should("not.be.visible");
        cy.get(".offcanvas-body").should("not.be.visible");
        cy.get("#HelpIcon").click();
        cy.get("#offcanvasRightLabel").should("be.visible");
        cy.get(".offcanvas-body").should("be.visible");
        cy.get(".offcanvas-body").contains("Yahtzee Count is a dice game where players try to get certain patterns of dice in the smallest number of rolls.")
    })

    it('Help Icon Hidden When AnyWhere on page is clicked' , () => {
        cy.get("#HelpIcon").should("be.visible");
        cy.get("#offcanvasRightLabel").should("not.be.visible");
        cy.get(".offcanvas-body").should("not.be.visible");
        cy.get("#HelpIcon").click();
        cy.get("#offcanvasRightLabel").should("be.visible");
        cy.get(".offcanvas-body").contains("Yahtzee Count is a dice game where players try to get certain patterns of dice in the smallest number of rolls.")
        cy.get("#app").click();
        cy.get("#offcanvasRightLabel").should("not.be.visible");
        cy.get("#HelpIcon").should("be.visible");
        cy.get(".offcanvas-body").should("not.be.visible");
    })
})