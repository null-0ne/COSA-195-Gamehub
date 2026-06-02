/**
 *
 * @param {*} element - css selector of element to inject content
 * @param {*} params - optional values, objects or functions needed to render on the page
 */

export default function renderYahtzeeScoreCard(
  element = document.createElement("div") /**/,
  params = {} /*An object that should contain the score, the postScores function and the span to update the score on the page*/,
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
      <th class="catName" scope="row">Ones</th>
      <td><input id="Ones"type="number" class="catInput"></input></td>
      <th class="catName" >Three of a kind</th>
      <td><input id="Threeofakind"type="number" class="catInput"></input></td>
    </tr>
   <tr>
      <th class="catName" scope="row">Twos</th>
      <td><input id="Twos"type="number" class="catInput"></input></td>
      <th class="catName" >Four of a kind</th>
      <td><input id="Fourofakind"type="number" class="catInput"></input></td>
    </tr>
    <tr>
      <th class="catName" scope="row">Threes</th>
      <td><input id="Threes"type="number" class="catInput"></input></td>
      <th class="catName" >Full House</th>
      <td><input id="FullHouse"type="number" class="catInput"></input></td>
    </tr>
    <tr>
      <th scope="row" class="catName" >Fours</th>
      <td><input id="Fours"type="number" class="catInput"></input></td>
      <th class="catName" >Small Straight</th>
      <td><input id="SmallStraight"type="number" class="catInput"></input></td>
    </tr>
    <tr>
      <th scope="row" class="catName" >Fives</th>
      <td><input id="Fives"type="number" class="catInput"></input></td>
      <th class="catName" >Large Straight</th>
      <td><input id="LargeStraight"type="number" class="catInput"></input></td>
    </tr>
    <tr>
      <th class="catName" scope="row">Sixes</th>
      <td><input id="Sixes"type="number" class="catInput"></input></td>
      <th class="catName" >Yahtzee</th>
      <td><input id="Yahtzee"type="number" class="catInput"></input></td>
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

  //  cat selection
  let catNames = element.querySelectorAll(".catName");
  for (let cat of catNames) {
    cat.addEventListener("click", function () {
      params.totalScore = 0;
      let input = element.querySelector(
        `#${cat.innerHTML.replaceAll(" ", "")}`,
      );
      input.value = params.rollCount;
      for (let otherInput of inputOnes) {
        let num = parseInt(otherInput.value, 10);
        if (!isNaN(num)) {
          params.totalScore += parseInt(otherInput.value, 10);
        }
      }
      // params.totalScore += params.rollCount;
      params.rollCount = 0;
    });
  }

  function submitScore() {
    params.submitScores(params.totalScore);
  }
  element
    .querySelector("#btnSubmit")

    .addEventListener("click", submitScore);

  //return the element in case it is needed for further logic
  return element;
}
