/*
    Filename:    counter-page.cy.js
    Student:     
    Course:      COSA 195 (Systems Project)
    Date:        2026-05-01
    Purpose:     End To End test Counter Page Component
*/
describe('contact page test', () => {
    beforeEach(() => {
        // Cypress starts out with a blank slate for each test
        // so we must tell it to visit our website with the `cy.visit()` command.
        // Since we want to visit the same URL at the start of all our tests,
        // we include it in our beforeEach function so that it runs before each test
        cy.visit(`http://localhost:5173/counter`)
    })

    it('displays 3 buttons with count 0', () => {
        // We use the `cy.get()` command to get all elements that match the selector.
        // Then, we use `should` to assert that there are two matched items,
        // which are the two default items.
        cy.get('button.btn').as('buttons').should('have.length', 3)


        //OPTIONAL explicitly declare the expected text
        const expectedInnerText = `count is 0`;

        // We can go even further and check that the default todos each contain
        // the correct text. We use the `first`,eq, and `last`  functions
        // to get just the first, second and last matched elements individually,
        // and then perform an assertion with `should`.
        cy.get('@buttons').first().should('have.text', expectedInnerText)
        cy.get('@buttons').eq(0).should('have.text', expectedInnerText)
        cy.get('@buttons').last().should('have.text', expectedInnerText)

        //TODO use a loop to check the innerText of all 3 buttons
    })

    it('increases the count of the first 2 buttons with a shared counter', () => {
        // click the first button 3 times  and ensure count matches what is expected  (except the last time)
        for(let i = 0 ; i < 4 ; i++) {

            //OPTIONAL explicitly declare the expected text
            const expectedInnerText = `count is ${i}`;

           //find the button and ensure innerText 'have.text' matches expected then click to increment the count
            cy.get('button.btn').eq(0).should('have.text', expectedInnerText).click();
        }

        //find second  button and ensure innerText 'have.text' matches expected then click to increment the count
        cy.get('button.btn').eq(0).should('have.text', 'count is 5') //SHOULD BE 4 HERE TO PASS
            .click(); // count should be 5 after click

        // click the second button 3 times  and ensure count matches what is expected  (except the last time)
        for(let i = 5 ; i < 7 ; i++) {

            //OPTIONAL explicitly declare the expected text
            const expectedInnerText = `count is ${i}`;

            //find the button and ensure innerText 'have.text' matches expected then click to increment the count
            cy.get('button.btn').eq(0).should('have.text', expectedInnerText).click();
        }

    })

})
