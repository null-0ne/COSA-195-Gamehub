import {renderTriviaQuestion } from "../../src/components/trivia-question.js";

describe('Trivia Question Component Test ', () => {
   // document.getElementById("cy-root").innerHTML += `<button class="btn btn-primary" id="btnSubmit" data-bs-target="#exampleModal" data-bs-toggle="modal" type="button" >Submit</button>`;
    it("if answer is incorrect text should be red" , () => {
      cy.mount(renderTriviaQuestion, {params: {
        questions:  {
              "question": "What is the number 12 in French?",
              "answers": [
                "dix",
                "onze",
                "douze",
                "treize",
                "quatorze"
              ],
              "correctAnswer": 2
            },
            isShown: true,
       onCorrect: function(){return true;},
       onInCorrect: function(){return false;}
    }});
    cy.get('input[type="radio"][value="1"]').check()
    cy.get("#subButton").click();
    cy.get("#test").should("have.css", "color", "rgb(255, 0, 0)");
    });

   
      it("if answer is correct text should be green" , () => {
          cy.mount(renderTriviaQuestion, {params: {
        questions:  {
              "question": "What is the number 12 in French?",
              "answers": [
                "dix",
                "onze",
                "douze",
                "treize",
                "quatorze"
              ],
              "correctAnswer": 2
            },
            isShown: true,
       onCorrect: function(){return true;},
       onInCorrect: function(){return false;}
    }});
    cy.get('input[type="radio"][value="2"]').check();
    cy.get("#subButton").click();
    cy.get("#test").should("have.css", "color", "rgb(0, 128, 0)");
      })
    })
