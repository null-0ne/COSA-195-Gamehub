//https://www.geeksforgeeks.org/bootstrap/how-to-create-image-overlay-effects-in-bootstrap/
//https://www.geeksforgeeks.org/bootstrap/how-to-use-image-overlay-correctly-with-bootstrap/
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
    <div class="lockable-dice m-2 position-relative ${bsFlex} w-25 ">
            <img class="w-75 min card-img position-absolute" src="images/dice${d}.png" alt="dice ${d}" />
            <img class="w-75 min card-img position-absolute locked" src="/images/dice-${d}-lock.png" />
    </div>`,
    `<style>
        .lockable-dice { cursor: pointer; transform-style: preserve-3d; height: 12rem; width: 9rem;}
        .locked {z-index: -1}
    </style>
    `);

    //find cards and add click event listener
    if(params.lockable){
        element.querySelectorAll(".lockable-dice").forEach((dice) => {
        dice.addEventListener("click", ({target: dice})=>{
            dice.classList.toggle('opacity-25');
            // if(dice.classList.contains("locked"))
            // {
            //     dice.classList.toggle('locked');
            //     //dice.setAttribute('src','/images/dice1.png');
            // }
            // else
            // {
            //     dice.classList.toggle('locked');
            //     //dice.setAttribute('src','/images/dice-2-lock.png');
            // }
        });
    });
    }

    //return the element in case it is needed for further logic
    return element;
}