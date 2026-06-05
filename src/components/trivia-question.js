"use strict"

export function renderTriviaQuestion(
        element = document.createElement("div"),
        params = {questions: {}, onCorrect: function(){return false;},
      onInCorrect: function(){return false;}}
        ) {
            //console.log(element);


        element.innerHTML = `

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Skill Test Question</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" id='radio'>
        ${params.questions.question}<br>

        
      </div>
      
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" form="form" class="btn btn-primary" data-bs-dismiss="modal" id='subButton'>Submit</button>
      </div>
    </div>
  </div>
</div>
`;

  for(let i = 0; i < params.questions.answers.length; i++)
  {
    element.querySelector("#radio").innerHTML += `

<input type="radio" id="${i}" name="fav_language" value="${i}" checked>
<label for="html">${params.questions.answers[i]}</label><br>`

  }


  return element;
}


   