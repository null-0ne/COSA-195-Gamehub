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
export default function renderCardGroup(
    element = document.createElement('div'), /* default new nav element*/
    params = {cards: [1,1,2,2], faceUp: false} /* default is face down */
) {
    // boostrap classes for flex
    const bsFlex = 'd-flex flex-wrap justify-content-center align-items-center'
    //boostrap classes for flip transition to work and click event to be suppressed for inner divs
    const bsCard = 'position-absolute pe-none w-100 h-100 rounded-3 bg-light border border-primary'

    element.setAttribute('class',
        `card-group bg-secondary ${bsFlex}`);

    
    element.innerHTML = params.cards.reduce((str, c) => `
    ${str}
      <div class="flippable-card m-2 position-relative ${bsFlex} ${params.faceUp ? 'face-up' : ''}">
        <div class="card-face ${bsFlex} ${bsCard}">
          <img class="w-75 min" src="/images/img-${c}.svg" alt="card face img-${c}" />
        </div>
        <div class="card-back ${bsFlex} ${bsCard}">
          <img class="w-75" src="/images/q-icon.svg" alt="card back q-icon" />
        </div>
      </div>
    `,
    /* Local style sheet for the card group - CSS for card flip animation that is not provided in bootstrap */`
    <style>
        .flippable-card { cursor: pointer; transform-style: preserve-3d; height: 12rem; width: 9rem;}
        .flippable-card div { backface-visibility: hidden; transition: transform 400ms ease-in;}
        .flippable-card .card-face { transform: rotate3d(-1, 1, 0, -180deg); }
        .flippable-card.face-up .card-face { transform: rotate3d(-1, 1, 0, 0); }
        .flippable-card.face-up .card-back { transform: rotate3d(-1, 1, 0, 180deg); }
    </style>
    `);

    //find cards and add click event listener
    element.querySelectorAll(".flippable-card").forEach((card) => {
        card.addEventListener("click", ({target: card})=>card.classList.toggle('face-up'));
    });

    //return the element in case it is needed for further logic
    return element;
}
