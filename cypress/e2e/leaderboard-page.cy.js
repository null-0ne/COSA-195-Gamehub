/*
    Filename:    leaderboard-page.cy.js
    Student:     
    Course:      COSA 195 (Systems Project)
    Date:        2026-05-01
    Purpose:     End to End test Leaderboard Page Component
*/

describe('product page tests', () => {
    beforeEach(() => {
        // Cypress starts out with a blank slate for each test
        // so we must tell it to visit our website with the `cy.visit()` command.
        // Since we want to visit the same URL at the start of all our tests,
        // we include it in our beforeEach function so that it runs before each test

        //PRE-CONDITION - reload page before each test
        cy.visit(`http://localhost:5173/leaderboard`)
    })

    it('displays 3 products and check last product text', () => {
        // add some tests
        cy.get('h1').should('have.text', `Leaderboard`)

        //ensure 3 craps records listed
        cy.get('.list-group-item').should('have.length', 3)

        //alternative way to check text matches without extra whitespaces
        cy.get('.list-group-item').last().invoke('text')
        .then((text) => {
            // Replaces all whitespace characters (including newlines) with nothing
            const cleanedText = text.replace(/\s+/g, '').trim();
            expect(cleanedText).to.equal('email@email.com2.5672.567');
        });

        cy.get('.list-group:nth-of-type(2)').should('have.length', 3)

        cy.get('.list-group:nth-of-type(2)').last().invoke('text')
        .then((text) => {
            const cleanedText = text.replace(/\s+/g, '').trim();
            expect(cleanedText).to.equal('email3@email.com4545');
        })
    })
});