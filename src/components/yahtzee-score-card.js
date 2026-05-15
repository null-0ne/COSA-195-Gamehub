/**
 *
 * @param {*} element - css selector of element to inject content
 * @param {*} params - optional values, objects or functions needed to render on the page
 */

import { postScores } from "../lib/score-service";

export default function renderYahtzeeScoreCard(
  element = document.createElement("div") /*default - new button element*/,
  params = {} /* default - object with: count property , incr() function */,
) {
  //display the count within the button
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
      <td><input type="text" class="catInput"></input></td>
      <th>Three of a kind</th>
      <td><input type="text" class="catInput"></input></td>
    </tr>
   <tr>
      <th scope="row">Twos</th>
      <td><input type="text" class="catInput"></input></td>
      <th>Four of a kind</th>
      <td><input type="text" class="catInput"></input></td>
    </tr>
    <tr>
      <th scope="row">Threes</th>
      <td><input type="text" class="catInput"></input></td>
      <th>Full House</th>
      <td><input type="text" class="catInput"></input></td>
    </tr>
    <tr>
      <th scope="row">Fours</th>
      <td><input type="text" class="catInput"></input></td>
      <th>Small Straight</th>
      <td><input type="text" class="catInput"></input></td>
    </tr>
    <tr>
      <th scope="row">Fives</th>
      <td><input type="text" class="catInput"></input></td>
      <th>Large Straight</th>
      <td><input type="text" class="catInput"></input></td>
    </tr>
    <tr>
      <th scope="row">Sixes</th>
      <td><input type="text" class="catInput"></input></td>
      <th>Yahtzee!</th>
      <td><input type="text" class="catInput"></input></td>
    </tr>
    <tr >
      <td colspan="3"><input class="btn btn-primary" id="btnSubmit" type="button" value="Submit"></td>
    </tr>
  </tbody>
  
</table>
  `;

  let totalScore = 0;
  //<button class="bg-danger">Submit Score</button>
  let inputOnes = document.querySelectorAll(".catInput");
  for (let input of inputOnes) {
    input.addEventListener("change", function () {
      totalScore = 0;
      for (let otherInput of inputOnes) {
        let num = parseInt(otherInput.value, 10);
        if (!isNaN(num)) {
          totalScore += parseInt(otherInput.value, 10);
        }
      }
      // totalScore += parseInt(input.value, 10);
      console.log(totalScore);
      document.getElementById("updateScore").innerHTML = totalScore;
    });
  }
  document.getElementById("btnSubmit").addEventListener("click", function () {
    postScores(totalScore, "yahtzee-count", 1, "john@saskpolytech.ca");
  });

  //return the element in case it is needed for further logic
  return element;
}
