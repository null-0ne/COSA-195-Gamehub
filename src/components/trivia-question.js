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
                <button type="submit" form="form" class="btn btn-primary w-100 "  id='subButton'>Submit</button>
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
              element.querySelector("#test").setAttribute("style", "color: green");
                params.onCorrect();


             }
             else
            {
              element.querySelector("#test").setAttribute("style", "color: red");
                params.onInCorrect();
            }
  });

 // if(!params.modal) {
   // params.modal.modal = new bootstrap.Modal(element.querySelector('#modalTrivia'));
 // }
  return element;
}


   