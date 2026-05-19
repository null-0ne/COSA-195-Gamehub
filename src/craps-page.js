import renderHelpSlider from './components/help-slider.js';

export default function renderCrapsPage(appElement){
    appElement.innerHTML = `<div class='container'>
    <div class='d-flex justify-content-end pt-3'>
    <div id='divHelp'></div>
    </div>
    </div>`;

        renderHelpSlider(document.getElementById("divHelp"), { text: `<p>Craps is a dice game played in casinos. The objective of the game is to roll two dices in the effort to roll a 7 or 11 to win the game. If you roll a 2, 3, or 12 you lose the game. <br><br>
        If you roll anything else, that number becomes your point, you will then continue to roll until you roll the same point value and win the game or you roll a 7 and lose the game.<br><br>
        In the instance of a win, you will be prompted to answer a question, if you answer correctly you will be rewarded the win, if the answer is wrong, you will lose the game.</p>`});
}