/*
    Filename:    product-page.cy.js
    Student:     
    Course:      COSA 195 (Systems Project)
    Date:        2026-05-01
    Purpose:     End to End test Product Page Component
*/

describe('product page tests', () => {
    beforeEach(() => {
        // Cypress starts out with a blank slate for each test
        // so we must tell it to visit our website with the `cy.visit()` command.
        // Since we want to visit the same URL at the start of all our tests,
        // we include it in our beforeEach function so that it runs before each test

        //PRE-CONDITION - reload page before each test
        cy.visit(`http://localhost:5173/product`)
    })

    it('displays 5 products and check last product text', () => {
        // add some tests
        cy.get('h1').should('have.text', `Product List`)

        //ensure 5 products listed
        cy.get('.list-group-item').should('have.length', 5)

        //alternative way to check text matches without extra whitespaces
        cy.get('.list-group-item').last().invoke('text')
        .then((text) => {
            // Replaces all whitespace characters (including newlines) with nothing
            const cleanedText = text.replace(/\s+/g, '').trim();
            expect(cleanedText).to.equal('👁❤UShampoo1.5L$14.99');
        });
    })
});