/*
 Filename:    profile-page.js
 Student:     Amaka Ogugofor, Sucha Singh
 Course:      COSA 195 (Systems Project)
 Date:        2026-06-02
 Purpose:     Profile page
              Acts like a "Page" and can be used in the router in app.js
*/

import renderUserInfo from "./components/user-info.js";
import renderTopThreeScore from "./components/top-three-score.js";

/**
 * Render function to inject content into an HTML element
 * @param {*} element - HTML element target container
 * @param {*} params - optional values, objects or functions needed to render on the page
 */
export default function renderProfilePage(
  element = document.createElement("div") /*default - new div element*/,
  params = { title: "Profile" } /*default*/,
) {
  // set the content of the element
  element.innerHTML = `
        <div>
            <div class="userInfo "> </div>
            <div class="scoreInfo"> </div>
        </div>
    `;
    

  const sharedParams = {
    // totalScore: 0,
    // submitScores: function () {
    //   postScores(this.totalScore, "yahtzee-count", 1, "john@saskpolytech.ca");
    // },
    // scoreSpan: document.getElementById("updateScore"),
  };


    renderUserInfo(document.querySelector(`.userInfo`),sharedParams);
    renderTopThreeScore(document.querySelector(`.scoreInfo`),sharedParams);
  
  
  return element;
}
