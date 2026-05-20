/**
 * ProductList Component
 * a reusable component that can be injected many times on the different "Pages"
 */

// import {formatCurrency} from './examples/lib/formatter.js';


/**
 * Render function to inject content into an HTML element
 * @param {*} element - css selector of element to inject content
 * @param {*} params - optional values, objects or functions needed to render on the page
 */
export default function renderLeaderboardList(
    element = document.createElement('ol'),/*default - new button element*/
    params = { scores: [] }/* default - object with: products empty array */
) {


    //use the built-in JS array function 'reduce' to convert the array of product objects in to an HTML string
    //reduce loops through each item in the products array and outputs an HTML string for each then joins them all in several list items
    
    element.innerHTML = params.scores.reduce((str, p,i) => `
    ${str}
    <li class=" list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
        <div class="fw-bold">${p.user.email} </br>Score: ${p.score}</div>
        </div>
        <h1><span class="1badge bg-primary rounded-pill">&#${129351+i++}</span></h1>
    </li>
    `, '');

    //TODO add code to handle case when there are NO products in the array

    //return the element in case it is needed for further logic
    return element;
}

