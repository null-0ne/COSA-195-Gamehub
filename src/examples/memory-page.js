/*
 Filename:    memory-page.js
 Student:     
 Course:      COSA 195 (Systems Project)
 Date:        2026-05-01
 Purpose:     Memory Page Component
              Acts like a "Page" and can be used in the router in app.js
*/

import renderCardGroup from './components/card-group.js'
import jsConfetti from 'https://cdn.jsdelivr.net/npm/js-confetti@0.12.0/+esm'

/**
 * Render function to inject content into an HTML element
 * @param {*} element - HTML element target container
 * @param {*} params - optional values, objects, or functions needed to render on the page
 */
export default function renderMemoryPage(
    element = document.createElement('div'), /*default - new div element*/
    params = { title: 'Memory Game' } /*default*/
) {
  // set the content of the element
  element.innerHTML = `
    <div>
        <h1><img src="/sp.jpg" class="logo vanilla" alt="Saskpolytech logo" />
        ${params.title}</h1>
        <div class="card-group">
        Cards Loading...  
        </div>
    </div>
    `;
  const cardNumbers = [1,1,2,2,3,3,4,4];

  //shuffle cardNumbers
  for (let i = cardNumbers.length - 1; i > 0; i--) {
    // Generate a random index from 0 to i
    const j = Math.floor(Math.random() * (i + 1));
    // Swap elements at i and j using destructuring
    [cardNumbers[i], cardNumbers[j]] = [cardNumbers[j], cardNumbers[i]];
  }
  
  // look for 1st button element and pass by reference params object
  renderCardGroup(document.querySelector('.card-group'), {cards:cardNumbers,faceUp:false});

  //return the element in case it is needed for further logic
  return element;
};
