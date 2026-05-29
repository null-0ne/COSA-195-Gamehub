"use strict";

import renderHelpSlider from "./components/help-slider.js";

/**renders the Pig Solitaire page
 *
 * @param {} param
 */
export default function renderPigSolitairePage(
  element = document.createElement("div"),
  params = { title: "Pig Solitaire" },
) {
  element.innerHTML = `<div>
      <div class='d-flex justify-content-end pt-3'>
        <div id='divHelp'></div>
      </div>
    </div>
        </div>
          <div class="row">
            <div class="col-5 m-1 border border-secondary rounded grey "> 
            <p class="text-black fst-italic fw-bold">Current Roll:</p>
              <div class="gameplay">
              </div>
              <div class="text-center pt-5">
                <h1>SCORE: <span id="updateScore">0</span></h1>
              </div>
            </div>
            <div class="last-roll-container col-5 m-1 border border-secondary rounded grey">
            </div>
          </div>
        </div>
    </div>
    
    `;
}

renderHelpSlider(document.getElementById("divHelp"), {
  text: `<p>Craps is a dice game played in casinos. The objective of the game is to roll two dices in the effort to roll a 7 or 11 to win the game. If you roll a 2, 3, or 12 you lose the game. <br><br>
        If you roll anything else, that number becomes your point, you will then continue to roll until you roll the same point value and win the game or you roll a 7 and lose the game.<br><br>
        In the instance of a win, you will be prompted to answer a question, if you answer correctly you will be rewarded the win, if the answer is wrong, you will lose the game.</p>`,
});
