describe('contact page test', () => {
    beforeEach(() => {
        cy.visit(`http://localhost:5173/register-page`)
    })

    it('displays form', () => {
        // We use the `cy.get()` command to get all elements that match the selector.
        // Then, we use `should` to assert that there are two matched items,
        // which are the two default items.
        cy.get('#login').as('loginForm').should('be.visible')
    })

    it('displays three text input fields', () => {
        cy.get('input.input-group-text').as('textInputs').should('have.length', 3)
    })

    it('displays sign up and back button', () => {
        cy.get('input.btn').as('submit').should('have.length', 2);
    })

    it('displays error message if all fields are empty', () => {
        cy.get('input.btn').eq(0).click();
        cy.get('#errorMessage').should('have.text', 'Invalid email, must be a @saskpolytech.ca email');
    })

    it('displays error message if email is incorrect', () => {
        cy.get('input.input-group-text').eq(0).type('asd@asda.com')
        cy.get('input.btn').eq(0).click();
        cy.get('#errorMessage').should('have.text', 'Invalid email, must be a @saskpolytech.ca email');
    })

    it('displays error message if email is correct and password/confirm password fields are empty', () => {
        cy.get('input.input-group-text').eq(0).type('wight714@saskpolytech.ca')
        cy.get('input.btn').eq(0).click();
        cy.get('#errorMessage').should('have.text', 'Password must be at least 8 characters');
    })

    it('displays error message if email is correct and password/confirm password fields are not the same', () => {
        cy.get('input.input-group-text').eq(0).type('wight714@saskpolytech.ca')
        cy.get('input.input-group-text').eq(1).type('asdf1234')
        cy.get('input.input-group-text').eq(2).type('bfdg2341')
        cy.get('input.btn').eq(0).click();
        cy.get('#errorMessage').should('have.text', 'Passwords must match');
    })

    it('displays error message if password is less than 8 characters', () => {
        cy.get('input.input-group-text').eq(0).type('wight714@saskpolytech.ca')
        cy.get('input.input-group-text').eq(1).type('123')
        cy.get('input.btn').eq(0).click();
        cy.get('#errorMessage').should('have.text', 'Password must be at least 8 characters');
    })

    it('Redirect to home page when registration is valid', () => {
        cy.get('input.input-group-text').eq(0).type('michael1@saskpolytech.ca')
        cy.get('input.input-group-text').eq(1).type('fdsf1234')
        cy.get('input.input-group-text').eq(2).type('fdsf1234')
        cy.get('input.btn').eq(0).click();
        cy.url().should('eq', "http://localhost:5173/") ;
    })

    it('Redirect to login-page when back button is clicked', () => {
        cy.get('input.btn').eq(1).click();
        cy.url().should('eq', "http://localhost:5173/login") ;
    })
});