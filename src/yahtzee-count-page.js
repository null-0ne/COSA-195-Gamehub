import renderHelpSlider from './components/help-slider.js';

export default function renderYahtzeeCountPage(appElement) {
    appElement.innerHTML = `<div class='container'>
    <div class='d-flex justify-content-end pt-3'>
    <div id='divHelp'></div>
    </div>
    </div>`;

    renderHelpSlider(document.getElementById("divHelp"),{text: `<p>Yahtzee Count
    is a dice game where players try to get certain patterns of dice in the
    smallest number of rolls.
     </p>
    <p>Have you ever played Yahtzee and been disappointed to not get
a Yahtzee or some other combination of dice? Then Yahtzee
Count is for you. In this game, you must get all possible dice
combinations (including a Yahtzee) and try to do so with the
smallest number of rules.</p>
<p>Basic Rules:</p>
<ul>
<li>The player starts by rolling five dice, counting one roll. </li>
<li>If the dice make up a desired combination, the player can
select that combination. The number of rolls will be recorded for
that combination. Desired combinations include: </li>
<li>Ones (must have at least three) </li>
<li>Twos (must have at least three)</li>
<li>Threes (must have at least three) </li>
<li>Fours (must have at least three) </li>
<li>Fives (must have at least three) </li>
<li>Sixes (must have at least three) </li>
<li>Three of a kind (any) </li>
<li>Four of a kind (any) </li>
<li>Full house – three of one kind and two of another </li>
<li>Small straight – at least four numbers in sequence </li>
<li>Large straight – five numbers in sequence</li>
<li>Free (any combination of dice) </li>
<li>Yahtzee (five of a kind) </li>
<li>If the dice do not make up a desired combination or the player
chooses not to play that combination, they can set aside zero to
four dice that will no longer be rolled. They then roll the remaining
dice, counting another roll. They can continue this process for as
long as they want.</li>
<li>When all the possible combinations have been selected, the 
game is over. The number of rolls for each combination is totaled
to get the final score (lower scores are better). </li>
</ul>`})
}