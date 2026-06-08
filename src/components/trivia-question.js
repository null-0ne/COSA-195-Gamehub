"use strict"

export function renderTriviaQuestion(
        element = document.createElement("div"),
        params = {questions: {}, onCorrect: function(){return false;},
      onInCorrect: function(){return false;}}
        ) 
{
  element.innerHTML = 
                  `<div class="modal-body" id='radio'>
                  <div id='test'>
                  ${params.questions.question}<br>
                  </div>
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" form="form" class="btn btn-primary" data-bs-dismiss="modal" id='subButton'>Submit</button>
                 </div>`;
        


  for(let i = 0; i < params.questions.answers.length; i++)
  {
    element.querySelector("#test").innerHTML += `

<input type="radio" id="${i}" name="fav_language" value="${i}" checked>
<label for="html">${params.questions.answers[i]}</label><br>`

  }

  element.querySelector("#subButton").addEventListener("click", function(){
              if(element.querySelector('input[name="fav_language"]:checked').value == params.questions.correctAnswer)
             {
                params.onCorrect();

             }
             else
            {
                params.onInCorrect();
            }
  });

 // if(!params.modal) {
   // params.modal.modal = new bootstrap.Modal(element.querySelector('#modalTrivia'));
 // }
  return element;
}


   