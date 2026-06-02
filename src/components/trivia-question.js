"use strict"

export function renderTriviaQuestion(
        element = document.createElement("div")
        , params = {questions: {}}
        ) {


        element.innerHTML = `
        

<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Trivia Question - Answer correctly to submit your score!</h5>
      </div>
      <div class="modal-body">
        ${params.questions.question}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary">Submit Answer</button>
      </div>
    </div>
  </div>
</div>
`;

  return element;
}