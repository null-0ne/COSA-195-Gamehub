/**
 *
 * @param {*} element - css selector of element to inject content
 * @param {*} params - optional values, objects or functions needed to render on the page
 */

export default function renderYahtzeeScoreCard(
  element = document.createElement("div") /**/,
  params = {} /*An object that should contain the score, the postScores function and the span to update the score on the page*/,
) {
  element.innerHTML = `<div class="container">
  <div class="row">
    <div class="col-md-6">
      <div class="row mb-2">
        <div class="col-8 catName" data-category="Ones">Ones</div>
          <div class="col">
            <input id="Ones" class="catInput form-control" readonly>
              </div>
            </div>
        <div class="row mb-2">
          <div class="col-8 catName" data-category="Twos">Twos</div>
            <div class="col">
              <input id="Twos" class="catInput form-control" readonly>
                </div>
              </div>
        <div class="row mb-2">
          <div class="col-8 catName" data-category="Threes">Threes</div>
            <div class="col">
              <input id="Threes" class="catInput form-control" readonly>
                </div>
              </div>
        <div class="row mb-2">
          <div class="col-8 catName" data-category="Fours">Fours</div>
            <div class="col">
              <input id="Fours" class="catInput form-control" readonly>
                </div>
              </div>
        <div class="row mb-2">
          <div class="col-8 catName" data-category="Fives">Fives</div>
            <div class="col">
              <input id="Fives" class="catInput form-control" readonly>
                </div>
              </div>
        <div class="row mb-2">
          <div class="col-8 catName" data-category="Sixes">Sixes</div>
            <div class="col">
              <input id="Sixes" class="catInput form-control form-control-sm" readonly>
                </div>
              </div>
            </div>
            
    <div class="col-md-6">
      <div class="row mb-2">
      <div class="col-8 catName" data-category="ThreeOfAKind">Three of a Kind</div>
          <div class="col">
            <input id="ThreeOfAKind" class="catInput form-control" readonly>
              </div>
            </div>
      <div class="row mb-2">
      <div class="col-8 catName" data-category="FourOfAKind">Four of a Kind</div>
          <div class="col">
            <input id="FourOfAKind" class="catInput form-control" readonly>
              </div>
            </div>
      <div class="row mb-2">
      <div class="col-8 catName" data-category="SmallStraight">Small Straight</div>
          <div class="col">
            <input id="SmallStraight" class="catInput form-control" readonly>
              </div>
            </div>
      <div class="row mb-2">
      <div class="col-8 catName" data-category="LargeStraight">Large Straight</div>
          <div class="col">
            <input id="LargeStraight" class="catInput form-control" readonly>
              </div>
            </div>
      <div class="row mb-2">
      <div class="col-8 catName" data-category="FullHouse">Full House</div>
          <div class="col">
            <input id="FullHouse" class="catInput form-control" readonly>
              </div>
            </div>
      <div class="row mb-2">
      <div class="col-8 catName" data-category="Yahtzee">Yahtzee</div>
          <div class="col">
            <input id="Yahtzee" class="catInput form-control" readonly>
              </div>
            </div>
          </div>
        </div>

      <div class="row mt-3">
        <div class="col text-center">
          <button id="btnSubmit" class="btn btn-primary">Submit Score</button>
          </div>
        </div>
      </div>
  `;

  const inputs = element.querySelectorAll(".catInput");
  const categories = element.querySelectorAll(".catName");

  /**
   * Helper to find the counts of dice
   * @param {*} dice
   * @returns
   */
  function getCounts(dice) {
    const counts = {};

    for (let die of dice) {
      counts[die] = (counts[die] || 0) + 1;
    }
    return counts;
  }

  for (const box of inputs) {
    if (canScore(params.dice, box.id)) {
      box.addEventListener("click", () => {
        box.value = params.rolls.reduce((a, b) => a + b, 0);
        params.rolls.fill(0);
      });
    }
  }

  function canScore(dice, boxId) {
    const counts = getCounts(dice);
    
    switch (boxId) {
      case "Ones":
        return true;
      case "Twos":
        return true;
      case "Threes":
        return true;
      case "Fours":
        return true;
      case "Fives":
        return true;
      case "Sixes":
        return true;
      case "ThreeOfAKind":
        return 
      default:
        return false;
    }
  }

  function hasThreeOfAKind(dice) {

  }

  function hasStraight(dice, length) {
    const uniqueDice = [...new Set(dice)].sort((a, b) => a - b);

    let maxRun = 1;
    let run = 1;

    for (let i = 1; i < uniqueDice.length; i++) {
      if (uniqueDice[i] === uniqueDice[i - 1] + 1) {
        run++;
        maxRun = Math.max(maxRun, run);
      } else {
        run = 1;
      }
    }

    return maxRun >= length;
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
