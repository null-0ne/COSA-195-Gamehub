describe('contact page test', ()=>{
    beforeEach(()=>{
        sessionStorage.setItem("email", "ogugofor2899@saskpolytech.ca")
        cy.visit(`http://localhost:5173/profile`)
    })

    it("displays top three scores correctly", ()=>{
        cy.get('.col:eq(2) > .list-group:first-of-type > .list-group-item').should('have.length', 1);
        cy.get('.col:eq(3) > .list-group:first-of-type > .list-group-item').should('have.length', 1);
        cy.get('.col:eq(4) > .list-group list-group-numbered').should('have.length', 0);
        cy.get('.col:eq(2) > .list-group:first-of-type > .list-group-item  .point').should('have.text',  "0");
        cy.get('.col:eq(3) > .list-group:first-of-type > .list-group-item .point').should('have.text',  "45");
        
        
        
    })
})