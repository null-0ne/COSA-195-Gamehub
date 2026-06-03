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
    it('displays advertisement and two buttons', () => {
        cy.mount(renderFooter, {params:{ads:testAds}});
        console.log(testAds);

        //for(let i = 0; i < 3; i++){
            const expectedMessage = testAds[0].message;
            cy.get('a', {timeout: 2000}).eq(0).should('have.text', expectedMessage);
        //}
    })
})