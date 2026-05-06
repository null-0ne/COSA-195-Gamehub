/*
 Filename:    product-page.js
 Student:     example
 Course:      COSA 195 (Systems Project)
 Date:        2026-05-01
 Purpose:     Product Page Component
              Acts like a "Page" and can be used in the router in app.js
*/

import renderProductList from './components/product-list.js'
import {getProducts} from "./lib/product-service.js";
import {formatDate, formatDateTime, formatTime} from './lib/formatter.js';

/**
 * Render function to inject content into an HTML element
 * @param {*} element - HTML element target container
 * @param {*} params - optional values, objects or functions needed to render on the page
 */
export default async function renderProductPage(
    element = document.createElement('div'), /*default - new div element*/
    params = {title: 'Product', pageNum: 1} /*default*/
) {

    // set the content of the element
    element.innerHTML = `
    <div>
        <h1><img src="/sp.jpg" class="logo vanilla" alt="Saskpolytech logo" />${params.title}</h1>
        <ol class="list-group list-group-numbered"><li>NO Products Found</li></ol>
    </div>
  `;

    //declare products from async fetch sort by title then price both ascending
    const products = await getProducts(
        {
            sortOrder: '-title,price', //title descending, price ascending
            paging: {page: params.pageNum, limit: 5}, // limit 5 items per page
        });

    //call to render the product-list component in the list-group ol element, pass the products to render in the params
    renderProductList(document.querySelector('.list-group'), {products: products});

    //return the element in case it is needed for further logic
    return element;
};

