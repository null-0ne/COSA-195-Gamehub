/**
 *
 * @param {*} element - css selector of element to inject content
 * @param {*} params - optional values, objects or functions needed to render on the page
 */
//import{ renderTriviaQuestion} from "./trivia-question.js";

import { getQuestion } from "../lib/question-service";
import { renderTriviaQuestion } from "./trivia-question";
// import { returnAnswer } from "./trivia-question";

export default function renderYahtzeeScoreCard(
  element = document.createElement("div") /**/,
  params = {submitScores: function(){return;}} /*An object that should contain the score, the postScores function and the span to update the score on the page*/,
) {
  element.innerHTML = `<table class="table">
  <thead >
    <tr>
      <th scope="col" class="text-center">Category</th>
      <th scope="col" class="text-center">Times Roll</th>
      <th scope="col" class="text-center">Category</th>
      <th scope="col" class="text-center">Times Roll</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Ones</th>
      <td><input type="number" class="catInput"></input></td>
      <th>Three of a kind</th>
      <td><input type="number" class="catInput"></input></td>
    </tr>
   <tr>
      <th scope="row">Twos</th>
      <td><input type="number" class="catInput"></input></td>
      <th>Four of a kind</th>
      <td><input type="number" class="catInput"></input></td>
    </tr>
    <tr>
      <th scope="row">Threes</th>
      <td><input type="number" class="catInput"></input></td>
      <th>Full House</th>
      <td><input type="number" class="catInput"></input></td>
    </tr>
    <tr>
      <th scope="row">Fours</th>
      <td><input type="number" class="catInput"></input></td>
      <th>Small Straight</th>
      <td><input type="number" class="catInput"></input></td>
    </tr>
    <tr>
      <th scope="row">Fives</th>
      <td><input type="number" class="catInput"></input></td>
      <th>Large Straight</th>
      <td><input type="number" class="catInput"></input></td>
    </tr>
    <tr>
      <th scope="row">Sixes</th>
      <td><input type="number" class="catInput"></input></td>
      <th>Yahtzee!</th>
      <td><input type="number" class="catInput"></input></td>
    </tr>
    <tr >
      <td colspan="3"><button class="btn btn-primary" id="btnSubmit" type="button" >Submit</button></td>
    </tr>
  </tbody>
  
</table>
  `;

  let inputOnes = element.querySelectorAll(".catInput");
  for (let input of inputOnes) {
    input.addEventListener("change", function () {
      params.totalScore = 0;
      for (let otherInput of inputOnes) {
        let num = parseInt(otherInput.value, 10);
        if (!isNaN(num)) {
          params.totalScore += parseInt(otherInput.value, 10);
        }
      }
      console.log(params.totalScore);
    });
  }
  async function submitScore()
  {
    params.submitScores(params.totalScore);
  }


    
  

  //return the element in case it is needed for further logic
  return element;


  

}
