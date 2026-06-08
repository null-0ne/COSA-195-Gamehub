/**
 * Render function to inject content into an HTML element
 * @param {*} element - HTML element target container
 * @param {*} params - optional values, objects or functions needed to render on the page
 */
export default function renderPigScorecard(
  element = document.createElement("div") /*default - new div element*/,
  params = {
    dice: [1, 2, 3, 4, 5],
    lockable: true,
    finishedRolling: function () {
      console.log("Finished rolling");
    },
  },
) {
  const bsFlex = "d-flex flex-wrap  align-items-center";

  element.innerHTML = `
  <h1 id="prevRoll">Previous Roll:</h1>
  <img id="lastRolled" class="position-absolute top-50 start-50 translate-middle w-50 min mw-50" src="images/dice0.png" alt="dice"></img>
  `;

  return element;
}
