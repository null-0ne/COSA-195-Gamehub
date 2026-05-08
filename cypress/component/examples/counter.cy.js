/*
    Filename:    countercy.js
    Student:     Samuel Cyrenne
    Course:      COSA 195 (Systems Project)
    Date:        2026-05-01
    Purpose:     Test Counter Component
*/
import renderCounter from "../../../src/examples/components/counter.js";

describe('counter component tests', () => {
  it('increases the count in the innerText when clicked', () => {

    //render the component by itself in the /support/component-index.html
    cy.mount(renderCounter);

    // click the button 3 times and ensure count matches what is expected  (except the last time)
    for(let i = 0 ; i < 4 ; i++) {

      //OPTIONAL explicitly declare the expected text
      const expectedInnerText = `count is ${i}`;

      //find the button and ensure innerText 'have.text' matches expected then click to increment the count      
      cy.get('button').should('have.text', expectedInnerText).click();
    }
  })
})