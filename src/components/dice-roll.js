//https://www.geeksforgeeks.org/bootstrap/how-to-create-image-overlay-effects-in-bootstrap/
//https://www.geeksforgeeks.org/bootstrap/how-to-use-image-overlay-correctly-with-bootstrap/

/*
 Filename:    dice-roll.js
 Student:     Rylan & Garrett
 Course:      COSA 195 (Systems Project)
 Date:        2026-05-28
 Purpose:     Dice Roll component
              A reusable component that can be injected many times on the different "Pages"
*/

/**
 * Render function to inject content into an HTML element
 * @param {*} element - css selector of element to inject content
 * @param {*} params - optional values, objects, or functions needed to render on the page
 */
export default function renderDiceRoll(
  element = document.createElement("div") /* default new nav element*/,
  params = {
    dice: [1, 2, 3, 4, 5],
    lockable: true,
    finishedRolling: function () {
      console.log("Finished rolling");
    },
  } /* default is face down */,
) {
  // boostrap classes for flex
  const bsFlex = "d-flex flex-wrap justify-content-center align-items-center";

  element.setAttribute("class", `${bsFlex}`);

  element.innerHTML = params.dice.reduce(
    (str, d) => `
    ${str}
    <div class="dice-div m-2 position-relative ${bsFlex} w-25" data-arrIndex="${d - 1}">
            <img class="lockable-dice w-75 min position-absolute" src="images/dice${d}.png" alt="dice ${d}" />
            <img class="w-75 min position-absolute locked" src="/images/dice-${d}-lock.png" />
    </div>`,
    `<style>
        .dice-div { cursor: pointer; transform-style: preserve-3d; height: 12rem; width: 9rem;}
        .locked {z-index: -1}
    </style>
    `,
  );

  element.innerHTML += `<button id="btnRoll">ROLL</button>`;

  //find dice and add click event listener
  if (params.lockable) {
    element.querySelectorAll(".lockable-dice").forEach((dice) => {
      dice.addEventListener("click", ({ target: dice }) => {
        (dice.classList.toggle("opacity-25"),
          dice.classList.toggle("dice-img-lock"));
      });
    });
  }

  element.querySelector("#btnRoll").addEventListener("click", diceRoll);

  let isRolling = false;

  /**
   * Dice rolling animation
   * @returns
   */
  function diceRoll() {
    if (isRolling) {
      return;
    }

    const unlockedDice = element.querySelectorAll(
      ".lockable-dice:not(.dice-img-lock)",
    );
    isRolling = true;

    let rollAnimation = setInterval(() => {
      for (const die of unlockedDice) {
        const i = die.getAttribute("data-arrIndex");
        const randomDiceFace = Math.floor(Math.random() * 6 + 1);
        params.dice[i] = randomDiceFace;

        die.src = `/images/dice${randomDiceFace}.png`;
      }
    }, 100);

    let stopAnimation = setTimeout(() => {
      clearInterval(rollAnimation);

      isRolling = false;
      params.finishedRolling();
    }, 1000);
  }

  //return the element in case it is needed for further logic
  return element;
}
