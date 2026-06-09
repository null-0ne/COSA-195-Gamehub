"use strict";

/* 
Filename:    leaderboards-page.js 
Student:     Dustin / Preston
Course:      COSA 195 (Systems Project) 
Date:        2026-05-01 
Purpose:     Leaderboard View
*/
import renderLeaderboardList from "./components/leaderboard-list.js";
import renderUserInfo from "./components/user-info.js";
import { getScores } from "./lib/score-service.js";
import { postProfile } from "./lib/user-service.js";
import { getProfile } from "./lib/user-service.js";

// import {formatDate, formatDateTime, formatTime} from './examples/lib/formatter.js';

export default async function renderLeaderboardPage(
  element = document.createElement("div") /*default - new div element*/,
  params = { title: "Leaderboard" } /*default*/,
) {
  // set the content of the element
  element.innerHTML = `

      <div>
            <div class="userInfo "> </div>
            <div class="scoreInfo">

          <div class="container text-center">
            <div class="row align-items-start">
                <div class="col">
                    <h3>Craps</h3>
                    <ol class="list-group list-group-numbered"><li>NO Records Found</li></ol>
                </div>
                <div class="col">
                    <h3>Yahtzee Count</h3>
                    <ol class="list-group list-group-numbered"><li>NO Records Found</li></ol>
                </div>
                <div class="col">
                    <h3>Pig</h3>
                    <ol class="list-group list-group-numbered"><li>NO Records Found</li></ol>
                </div>
            </div>
      </div>
                
            
            
            </div>
      </div>

    `;
  //declare scores from async fetch sort by scores decending and limit top 3
  if(sessionStorage.getItem("email") != null){
    const crapScores = await getScores({
    textSearch: "craps", // filter to craps
    sortOrder: "-score", //score descending
    email: sessionStorage.getItem("email"),
    paging: { page: params.pageNum, limit: 3 }, // limit 3 items per page
  });

  const yahtzeeScores = await getScores({
    textSearch: "yahtzee-count", //filter to yahtzee-count
    sortOrder: "score", //score descending
    email: sessionStorage.getItem("email"),
    paging: { page: params.pageNum, limit: 3 }, // limit 3 items per page
  });
  const pigScores = await getScores({
    textSearch: "pig", //filter to yahtzee-count
    email: sessionStorage.getItem("email"),
    sortOrder: "score", //score descending
    paging: { page: params.pageNum, limit: 3 }, // limit 3 items per page
  });

    //call to render the product-list component in the list-group ol element, pass the products to render in the params
  renderLeaderboardList(
    document.querySelector(".col:nth-of-type(1)  .list-group"),
    { scores: crapScores },
  );
  renderLeaderboardList(
    document.querySelector(".col:nth-of-type(2)  .list-group"),
    { scores: yahtzeeScores },
  );
  renderLeaderboardList(
    document.querySelector(".col:nth-of-type(3)  .list-group"),
    { scores: pigScores },
  );
}




let storeEmail = sessionStorage.getItem("email");
//let storeAvatar = sessionStorage.getItem("avatar");
//let storeTag = sessionStorage.getItem("gamerTag")

let profileUser = await getProfile(storeEmail); //also set seesion storge
console.log(profileUser);

  renderUserInfo(document.querySelector(".userInfo"), {

    gamerTag : profileUser.gamerTag,
    gamerAvatar: profileUser.avatar,
    updateProfile : async function() {
      await getProfile(storeEmail);
    },
    submitProfile: async function () {
      await postProfile(this.gamerTag,this.gamerAvatar);
    },
    email: sessionStorage.getItem("email")
  });
  
  //render(document.query);
  //return the element in case it is needed for further logic
  return element;
}
