"use strict";


/* 
Filename:    leaderboards-page.js 
Student:     Dustin / Preston
Course:      COSA 195 (Systems Project) 
Date:        2026-05-01 
Purpose:     Leaderboard View
*/ 

export default function renderLeaderboardPage(
    element = document.createElement('div'), /*default - new div element*/
    params = { title: 'Leaderboard' } /*default*/
) {
  // set the content of the element
  element.innerHTML = `
    <div>
        <h1><img src="/sp.jpg" class="logo vanilla" alt="Saskpolytech logo" />
        ${params.title}</h1>

    </div>
    `;

    
  //return the element in case it is needed for further logic
  return element;
};

