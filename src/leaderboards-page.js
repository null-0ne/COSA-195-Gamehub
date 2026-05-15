"use strict";


/* 
Filename:    leaderboards-page.js 
Student:     Dustin / Preston
Course:      COSA 195 (Systems Project) 
Date:        2026-05-01 
Purpose:     Leaderboard View
*/ 
import renderLeaderboardList from './components/leaderboard-list.js'
import {getScores} from "./lib/leaderboards-service.js";
// import {formatDate, formatDateTime, formatTime} from './examples/lib/formatter.js';

export default async function renderLeaderboardPage(
    element = document.createElement('div'), /*default - new div element*/
    params = { title: 'Leaderboard' } /*default*/
) {
   // set the content of the element
      element.innerHTML = `
      <div>
          <h1><img src="/sp.jpg" class="logo vanilla" alt="Saskpolytech logo" />${params.title}</h1>
          <h3>Craps</h3>
          <ol class="list-group list-group-numbered"><li>NO Products Found</li></ol>
          <h3>Yahtzee Count</h3>
          <ol class="list-group list-group-numbered"><li>NO Products Found</li></ol>
      </div>
    `;
  
      //declare scores from async fetch sort by scores decending and limit top 3
        const crapScores = await getScores(
            {
                textSearch: 'craps', // filter to craps
                sortOrder: '-score', //score descending
                paging: {page: params.pageNum, limit: 3}, // limit 3 items per page
            });
        
        const yahtzeeScores = await getScores(
            {
                textSearch: 'yahtzee-count', //filter to yahtzee-count
                sortOrder: 'score', //score descending
                paging: {page: params.pageNum, limit: 3}, // limit 3 items per page
            });
  
      //call to render the product-list component in the list-group ol element, pass the products to render in the params
      renderLeaderboardList(document.querySelector('.list-group'), {scores: crapScores});
      renderLeaderboardList(document.querySelector('.list-group:nth-of-type(2)'), {scores: yahtzeeScores});
  
      //return the element in case it is needed for further logic
      return element;
};

