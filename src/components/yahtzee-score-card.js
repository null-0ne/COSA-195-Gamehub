/**
 *
 * @param {*} element - css selector of element to inject content
 * @param {*} params - optional values, objects or functions needed to render on the page
 */

export default function renderYahtzeeScoreCard(
  element = document.createElement("div") /**/,
  params = {
    dice: [1, 2, 3, 4, 5],
    rolls: [],
    totalScore: 0,
    scoreCardComplete: false,
    validateRolls: function () {},
  } /*An object that should contain the score, the postScores function and the span to update the score on the page*/,
) {
  element.innerHTML = `<div class="container pt-5">
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
      
          <div class="text-center py-5">
                <h1>Total Rolls: <span id="totalScore">0</span></h1>
              </div>
        </div>
      </div>
  `;

  params.validateRolls = gameLogic;
  const inputs = element.querySelectorAll(".catInput");
  const categories = element.querySelectorAll(".catName");
  const diceButtons = document.querySelectorAll(".lockable-dice");
  let validScore = true;

  /**
   * Helper to find the counts of dice
   * @param {*} dice
   * @returns
   */
  function getCounts(dice) {
    const counts = [0, 0, 0, 0, 0, 0];
    for (let i = 0; i < 6; i++) {
      for (let die of params.dice) {
        if (i + 1 == die) {
          counts[i]++;
        }
      }
    }
    return counts;
  }

  for (const box of inputs) {
    box.addEventListener("click", () => boxEvent(box));
    box.disabled = true;
    box.style.backgroundColor = "white";
  }
  function gameLogic() {
    const counts = getCounts(params.dice);
    console.log(params.rolls.reduce((a, b) => a + b, 0));
    for (const box of inputs) {
      if (canScore(counts, box.id)) {
        box.style.backgroundColor = "yellow";
        box.disabled = false;
      } else {
        box.disabled = true;
        box.style.backgroundColor = "white";
      }
    }

    validScore = true;
    for (const input of inputs) {
      if (input.value === "") {
        validScore = false;
      }
    }
    if (validScore) {
      params.scoreCardComplete = true;
    }
  }
  function boxEvent(box) {
    box.value = params.rolls.reduce((a, b) => a + b, 0);
    for (const boxx of inputs) {
      boxx.disabled = true;
      boxx.style.backgroundColor = "white";
    }
    element.querySelector("#totalScore").innerHTML = params.rolls.length;
    params.totalScore = params.rolls.length;
    params.rolls.fill(0);

    params.selectCategory();
  }

  function resetGame() {
    for (const box of inputs) {
      box.value = "";
    }
    document.getElementById("totalScore").innerHTML = 0;
    params.rolls = [];
    params.totalScore = 0;
    params.scoreCardComplete = true;
  }

  function canScore(counts, boxId) {
    switch (boxId) {
      case "Ones":
        return (
          counts[0] >= 3 &&
          params.rolls.reduce((a, b) => a + b, 0) > 0 &&
          element.querySelector("#Ones").value == ""
        );
      case "Twos":
        return (
          counts[1] >= 3 &&
          params.rolls.reduce((a, b) => a + b, 0) > 0 &&
          element.querySelector("#Twos").value == ""
        );
      case "Threes":
        return (
          counts[2] >= 3 &&
          params.rolls.reduce((a, b) => a + b, 0) > 0 &&
          element.querySelector("#Threes").value == ""
        );
      case "Fours":
        return (
          counts[3] >= 3 &&
          params.rolls.reduce((a, b) => a + b, 0) > 0 &&
          element.querySelector("#Fours").value == ""
        );
      case "Fives":
        return (
          counts[4] >= 3 &&
          params.rolls.reduce((a, b) => a + b, 0) > 0 &&
          element.querySelector("#Fives").value == ""
        );
      case "Sixes":
        return (
          counts[5] >= 3 &&
          params.rolls.reduce((a, b) => a + b, 0) > 0 &&
          element.querySelector("#Sixes").value == ""
        );
      case "ThreeOfAKind":
        return (
          hasThreeOfAKind(counts) &&
          params.rolls.reduce((a, b) => a + b, 0) > 0 &&
          element.querySelector("#ThreeOfAKind").value == ""
        );
      case "FourOfAKind":
        return (
          hasFourOfAKind(counts) &&
          params.rolls.reduce((a, b) => a + b, 0) > 0 &&
          element.querySelector("#FourOfAKind").value == ""
        );
      case "SmallStraight":
        return (
          hasStraight(params.dice, params.dice.length - 1) &&
          params.rolls.reduce((a, b) => a + b, 0) > 0 &&
          element.querySelector("#SmallStraight").value == ""
        );
      case "LargeStraight":
        return (
          hasStraight(params.dice, params.dice.length) &&
          params.rolls.reduce((a, b) => a + b, 0) > 0 &&
          element.querySelector("#LargeStraight").value == ""
        );
      case "FullHouse":
        return (
          counts.includes(3) &&
          counts.includes(2) &&
          params.rolls.reduce((a, b) => a + b, 0) > 0 &&
          element.querySelector("#FullHouse").value == ""
        );
      case "Yahtzee":
        return (
          counts.includes(5) &&
          params.rolls.reduce((a, b) => a + b, 0) > 0 &&
          element.querySelector("#Yahtzee").value == ""
        );
      default:
        return false;
    }
  }

  function hasThreeOfAKind(counts) {
    for (let value of counts) {
      if (value >= 3) {
        return true;
        break;
      }
    }
    return false;
  }
  function hasFourOfAKind(counts) {
    for (let value of counts) {
      if (value >= 4) {
        return true;
      }
    }
    return false;
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

  function resetButton() {
    resetGame();
  }

  element.querySelector("#btnReset").addEventListener("click", resetButton);

  //return the element in case it is needed for further logic
  return element;
}
