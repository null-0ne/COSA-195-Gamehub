describe('contact page test', () => {
    beforeEach(() => {
        cy.visit(`http://localhost:5173/login`)

        
    })

    it('displays form', () => {
        // We use the `cy.get()` command to get all elements that match the selector.
        // Then, we use `should` to assert that there are two matched items,
        // which are the two default items.
        cy.get('#login').as('loginForm').should('be.visible')
    })

    it('displays two text input fields', () => {
        cy.get('input.input-group-text').as('textInputs').should('have.length', 2)
    })

    it('displays link button', () => {
        cy.get('button.btn').as('buttons').should('have.length', 1);
    })

    it('display 2 input buttons', () => {
        cy.get('input.btn').as('inputBtn').should('have.length', 2);
    })

    it('Shows error message when fields are empty', () => {
        cy.get('input.btn').eq(0).click();
        cy.get('#errorMessage').should('have.text', 'You are missing one or more fields!');
    })
    
    it('Shows error message when password is empty', () => {
        cy.get('input.input-group-text').eq(0).type('wight7143@saskpolytech.ca')
        cy.get('input.btn').eq(0).click();
        cy.get('#errorMessage').should('have.text', 'You are missing one or more fields!');
    })

    it('Shows error message when username is empty', () => {
        cy.get('input.input-group-text').eq(1).type('asdvdsfefe')
        cy.get('input.btn').eq(0).click();
        cy.get('#errorMessage').should('have.text', 'You are missing one or more fields!');
    })

    it('Shows error message when username/password is wrong is empty', () => {
        cy.get('input.input-group-text').eq(0).type('wight7143@saskpolytech.ca')
        cy.get('input.input-group-text').eq(1).type('asdvdsfefe')
        cy.get('input.btn').eq(0).click();
        cy.get('#errorMessage').should('have.text', 'Username or password is incorrect');
    })

    it('Redirect to home page when username and password are correct', () => {
        cy.get('input.input-group-text').eq(0).type('ogugofor2899@saskpolytech.ca')
        cy.get('input.input-group-text').eq(1).type('123abc')
        cy.get('input.btn').eq(0).click();
        cy.url().should('eq', "http://localhost:5173/" )
    })

    it('Continue without an account button redirects to home page', () => {
        cy.get('button.btn').click();
        cy.url().should('eq', "http://localhost:5173/");
    })

    it('Sign up button redirects to the register page', () => {
        cy.get('input.btn').eq(1).click();
        cy.url().should('eq',"http://localhost:5173/register")
    })

});