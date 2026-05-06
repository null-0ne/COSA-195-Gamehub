/**
 * ProductList Component
 * a reusable component that can be injected many times on the different "Pages"
 */

import {formatCurrency} from '../lib/formatter.js';


/**
 * Render function to inject content into an HTML element
 * @param {*} element - css selector of element to inject content
 * @param {*} params - optional values, objects or functions needed to render on the page
 */
export default function renderProductList(
    element = document.createElement('ol'),/*default - new button element*/
    params = { products: [] }/* default - object with: products empty array */
) {


    //use the built-in JS array function 'reduce' to convert the array of product objects in to an HTML string
    //reduce loops through each item in the products array and outputs an HTML string for each then joins them all in several list items
    element.innerHTML = params.products.reduce((str, p) => `
    ${str}
    <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
        <div class="fw-bold">${p.title}</div>
        ${p.size}
        </div>
        <span class="badge bg-primary rounded-pill">${formatCurrency(p.price)}</span>
    </li>
    `, '');

    //TODO add code to handle case when there are NO products in the array

    //return the element in case it is needed for further logic
    return element;
}