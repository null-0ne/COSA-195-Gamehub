/*
    Filename:    footer.cy.js
    Student:     Rylan Wight
    Course:      COSA 195 (Systems Project)
    Date:        2026-06-03
    Purpose:     Test footer Component
*/

import renderFooter from "../../src/components/footer";
import testAds from "../fixtures/test-footer.json";

describe('footer component tests', () => {
    it('has proper href', () => {
        cy.mount(renderFooter, {params:{ads:testAds}});
        for(let i = 0; i< 3; i++){
            cy.get('a').eq(i).should('have.attr', 'href', testAds[i].link);
        }
    });

    it('next button cycles through ads and loops back to start when at end of array', () => {
        cy.mount(renderFooter, {params:{ads:testAds}});

        for(let i = 0; i < 4; i++){
            if(i < 3){
                const expectedMessage = testAds[i].message;
                cy.get('a', {timeout: 2000}).eq(i).should('have.text', expectedMessage);
                cy.get('button').eq(1).click()
            } else { //Test that the messages loop back to the start
                const expectedMessage = testAds[0].message;
                cy.get('a', {timeout: 2000}).eq(0).should('have.text', expectedMessage);
                cy.get('button').eq(1).click()
            }
            
        }
    });

    it('previous button cycles through ads and loops back to end when at start of array', () => {
        cy.mount(renderFooter, {params:{ads:testAds}});

        for(let i = 2; i >= 0; i--){
            if(i > 0){
                const expectedMessage = testAds[i].message;
                cy.get('a', {timeout: 2000}).eq(i).should('have.text', expectedMessage);
                cy.get('button').eq(0).click()
            } else { //Test that the messages loop back to the start
                const expectedMessage = testAds[2].message;
                cy.get('a', {timeout: 2000}).eq(2).should('have.text', expectedMessage);
                cy.get('button').eq(0).click()
            }
            
        }
    });

    it('should have 3 possible ads', () =>{
        cy.mount(renderFooter, {params:{ads:testAds}});
        cy.get('a').should(($ads) => {
        expect($ads).to.have.length(3);
        })
    });

    it('should have only 1 ad visible at a time', () => {
        cy.mount(renderFooter, {params:{ads:testAds}});
        for(let i = 0; i < 3; i++){
        if(i === 0){
            cy.get('a', {timeout: 2000}).eq(i).should('be.visible', true);
            cy.get('a', {timeout: 2000}).eq(i + 1).should('not.be.visible', true);
            cy.get('a', {timeout: 2000}).eq(i + 2).should('not.be.visible', true);
            cy.get('button').eq(1).click();
        }
        if(i === 1){
            cy.get('a', {timeout: 2000}).eq(i).should('be.visible', true);
            cy.get('a', {timeout: 2000}).eq(i + 1).should('not.be.visible', true);
            cy.get('a', {timeout: 2000}).eq(i - 1).should('not.be.visible', true);
            cy.get('button').eq(1).click();    
        }
        if(i === 2){
            cy.get('a', {timeout: 2000}).eq(i).should('be.visible', true);
            cy.get('a', {timeout: 2000}).eq(i - 1).should('not.be.visible', true);
            cy.get('a', {timeout: 2000}).eq(i - 2).should('not.be.visible', true);
            }
        }
    })
})