
/**
 * Render function to inject content into an HTML element
 * @param {*} element - css selector of element to inject content
 * @param {*} params - optional values, objects, or functions needed to render on the page
 */
export default function renderDiceGroup(
    element = document.createElement('div'), /* default new nav element*/
    params = {dice: [1,2,3,4,5], lockable: true} /* default is face down */
) {
    // boostrap classes for flex
    const bsFlex = 'd-flex flex-wrap justify-content-center align-items-center'


    element.setAttribute('class',
        `${bsFlex}`);

    
    element.innerHTML = params.dice.reduce((str, d) => `
    ${str}
    <div class="lockable-dice m-2 position-relative ${bsFlex} w-25">
            <img class="w-75 min" src="images/dice${d}.png" alt="dice ${d}" />
    </div>`,
    `<style>
        .lockable-dice { cursor: pointer; transform-style: preserve-3d; height: 12rem; width: 9rem;}
    </style>
    `);

    //find cards and add click event listener
    if(lockable)
    {
        element.querySelectorAll(".lockable-dice").forEach((dice) => {
        dice.addEventListener("click", ({target: dice})=>dice.classList.toggle('lockable'));
    });
    }

    //return the element in case it is needed for further logic
    return element;
}