import {renderTriviaQuestion } from "../../src/components/trivia-question.js";

describe('Trivia Question Component Test ', () => {
   // document.getElementById("cy-root").innerHTML += `<button class="btn btn-primary" id="btnSubmit" data-bs-target="#exampleModal" data-bs-toggle="modal" type="button" >Submit</button>`;
    it("if answer is correct return true" , () => {
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
    });

    })