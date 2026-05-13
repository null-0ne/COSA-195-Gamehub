import renderHelpSlider from './components/help-slider.js';

function renderYahtzeeCountPage(appElement) {
    appElement.innerHTML = `<img src='/images/q-icon.svg' alt='Test' id='HelpIcon'>`;

    renderHelpSlider(document.getElementById("HelpIcon"),"<p>Yahtzee Count is a dice game where players try to get certain patterns of dice in the smallest number of rolls. </p>")
}