"use strict";


/* 
Filename:    leaderboards-page.js 
Student:     Dustin / Preston
Course:      COSA 195 (Systems Project) 
Date:        2026-05-01 
Purpose:     Leaderboard View
*/ 
import renderProductList from './leaderboard-list.js'
import {getScores} from "./leaderboards-service.js";
import {formatDate, formatDateTime, formatTime} from './examples/lib/formatter.js';

export default function renderLeaderboardPage(
    element = document.createElement('div'), /*default - new div element*/
    params = { title: 'Leaderboard' } /*default*/
) {
   // set the content of the element
      element.innerHTML = `
      <div>
          <h1><img src="/sp.jpg" class="logo vanilla" alt="Saskpolytech logo" />${params.title}</h1>
          <ol class="list-group list-group-numbered"><li>NO Products Found</li></ol>
      </div>
    `;
  
      //declare products from async fetch sort by title then price both ascending
      const products = await getScores(
          {
              sortOrder: '-title,price', //title descending, price ascending
              paging: {page: params.pageNum, limit: 5}, // limit 5 items per page
          });
  
      //call to render the product-list component in the list-group ol element, pass the products to render in the params
      renderProductList(document.querySelector('.list-group'), {products: products});
  
      //return the element in case it is needed for further logic
      return element;
};

