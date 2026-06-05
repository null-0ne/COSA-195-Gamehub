import {renderTriviaQuestion } from "../../src/components/trivia-question.js";
import { getQuestion } from "../../src/lib/question-service.js";

describe('Trivia Question Component Test ', () => {
    document.getElementById("cy-root").innerHTML += `<button class="btn btn-primary" id="btnSubmit" data-bs-target="#exampleModal" data-bs-toggle="modal" type="button" >Submit</button>`;
    let question = getQuestion();
    it('trivia question visible', () => {
        console.log(question);
        cy.mount(renderTriviaQuestion,{params: {questions:  {
              "question": "What is the number 12 in French?",
              "answers": [
                "dix",
                "onze",
                "douze",
                "treize",
                "quatorze"
              ],
              "correctAnswer": 2
            }, onCorrect: function(){}}});


           

       


       
       
    })
       
   
})