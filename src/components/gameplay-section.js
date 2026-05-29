import diceRoll from "./dice-roll";

/**
 *
 * @param {*} element - css selector of element to inject content
 * @param {*} params - optional values, objects or functions needed to render on the page
 */
export default function renderGameplaySection(
  element = document.createElement("div") /**/,
  params = {} /*An object that should contain the score, the postScores function and the span to update the score on the page*/,
) {
  element.innerHTML = `<div class="col">
        <div>
          <p class="fw-bold" id="currentRoll">Current Roll:</p>
        </div>
        <div class="pt-5 img-container ">
          <img 
            src="../public/images/dice1.png"
            class="dice rounded float"
            alt="..."
          />
          <img
            src="../public/images/dice2.png"
            class="dice rounded float"
            alt="..."
          />
          <img
            src="../public/images/dice3.png"
            class="dice rounded float"
            alt="..."
          />
          <img
            src="../public/images/dice4.png"
            class="dice rounded float"
            alt="..."
          />
          <img
            src="../public/images/dice5.png"
            class="dice rounded float"
            alt="..."
          />
        </div>
        <div class="container pt-5">
          <div class="row align-items-center">
            <div class="col">
              <span id="numRoll">Roll Number: 0</span>
            </div>
            <div class="col text-center">
              <button id="btnRoll" type="button" class="btn btn-primary">ROLL</button>
            </div>
            <div class="col text-end">
              <p class="m-0">Time: <span id="time">22:00</span> min</p>
            </div>
          </div>


        </div>
</div>`;

  let images = document.querySelectorAll(".dice"); // get images
  let diceArray = Array.from(images).map((img) => {
    let source = img.getAttribute("src"); // get filename
    let number = source.match(/\d+/); // regex, find the number in the filename

    return number;
  });
  console.log(images);

  let isRolling = false;
  let rollCount = 0;

  document.getElementById("btnRoll").addEventListener("click", diceRoll);
  //return the element in case it is needed for further logic
  return element;

  /**
   * Dice rolling animation
   * @param {*} diceArray
   * @returns
   */
  function diceRoll() {
    if (isRolling) {
      return;
    }

    isRolling = true;
    rollCount++;
    document.getElementById("numRoll").innerHTML = `Roll Number: ${rollCount}`;

    let rollAnimation = setInterval(() => {
      for (let i = 0; i < diceArray.length; i++) {
        diceArray[i] = Math.floor(Math.random() * 6 + 1);

        document.querySelectorAll(".dice")[i].src =
          "images/dice" + diceArray[i] + ".png";
      }
    }, 100);

    console.log(diceArray);

    let stopAnimation = setTimeout(() => {
      clearInterval(rollAnimation);

      isRolling = false;
    }, 1000);
  }
}
