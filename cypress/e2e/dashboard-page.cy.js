/*
    Filename:    
    Student:     Rylan Wight
    Course:      COSA 195 (Systems Project)
    Date:        2026-06-05
    Purpose:     End To End test Dashboard Page
*/

describe('Dashboard page tests', () => {
    beforeEach(() => {
        // Cypress starts out with a blank slate for each test
        // so we must tell it to visit our website with the `cy.visit()` command.
        // Since we want to visit the same URL at the start of all our tests,
        // we include it in our beforeEach function so that it runs before each test

        //PRE-CONDITION - reload page before each test
        cy.visit(`http://localhost:5173/`);
    });
    
    it('displays 3 cards', () => {
        cy.get('.card').should('have.length', 3);
    })

    it('displays leaderboard button', () => {
        cy.get("#leaderboardBtn").should('be.visible', true);
    })

    it("redirects to craps page", () => {
        cy.get('#cardContainer a').eq(0).click();
        cy.url().should('eq', "http://localhost:5173/craps");
    })
    it("redirects to yahtzee-count page", () => {
        cy.get('#cardContainer a').eq(1).click();
        cy.url().should('eq', "http://localhost:5173/yahtzee-count");
    })

    it("redirects to leaderboard page", () => {
        cy.get("#leaderboardBtn").click();
        cy.url().should('eq', "http://localhost:5173/leaderboard")
    })

    // it("redirects to pig solitaire page", () => {
    //     cy.get('#cardContainer a').eq(0).click();
    //     cy.url().should('eq', "http://localhost:5173/craps");
    // })

});