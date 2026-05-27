/*
 Filename:    card-group.js
 Student:     Project Pink (prjpink2025)
 Course:      COSA 195 (Systems Project)
 Date:        2025-05-01
 Purpose:     Card Group Component
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
    holdable: false,
  } /* default is face down */,
) {
  // boostrap classes for flex
  const bsFlex = "d-flex flex-wrap justify-content-center align-items-center";
  //boostrap classes for flip transition to work and click event to be suppressed for inner divs
  const bsCard =
    "position-absolute pe-none w-100 h-100 rounded-3 bg-light border border-primary";

  // element.setAttribute('class',
  //     `card-group bg-secondary ${bsFlex}`);

  element.innerHTML = params.dice.reduce(
    (str, d) => `
    ${str}
      <div class=" m-2 position-relative ${bsFlex}">
        <div class="card-face ${bsFlex} ${bsCard}">
          <img class="w-75 min img-dice" src="/images/dice${d}.png" alt="dice ${d}" />
        </div>
      </div>
    `,
  );

  //find cards and add click event listener
  element.querySelectorAll(".img-dice").forEach((dice) => {
    dice.addEventListener("click", ({ target: dice }) =>
      dice.classList.toggle("img-dice-locked"),
    );
  });

  //return the element in case it is needed for further logic
  return element;
}
