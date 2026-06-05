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
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" id='radio'>
        ${params.questions.question}

        
      </div>
      
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" form="form" class="btn btn-primary" id='subButton'>Submit</button>
      </div>
    </div>
  </div>
</div>
`;

  for(let i = 0; i < params.questions.answers.length; i++)
  {
    document.getElementById("radio").innerHTML += `

<input type="radio" id="${i}" name="fav_language" value="${i}" checked>
<label for="html">${params.questions.answers[i]}</label><br>`

  }

  



  return element;
}

// export function returnAnswer(){
//     document.getElementById("subButton").onclick = () => {
//           if(document.querySelector('input[name="fav_language"]:checked').value === params.question.correctAnswer)
//             {
//               return true;
//             }
//             else
//               {
//                 return false;
//             }
//   }
//   }


  //params = {questions: {}, onCorrect: function(){return false;},
   //   onInCorrect: function(){return false;}}

   