//import Navigo from 'navigo';  //Documentation: https://github.com/krasimir/navigo/blob/master/DOCUMENTATION.md
import renderHomePage from "./home-page.js";
import renderCrapsPage from "./craps-page.js";
import renderPigPage from "./pig-page.js";
import renderNavBar from "./components/navbar.js";
import renderLeaderboardPage from "./leaderboards-page.js";
import renderYahtzeeCountPage from "./yahtzee-count-page.js";
import renderLoginPage from "./login-page.js";
import renderRegisterPage from "./register-page.js";
import renderProfilePage from "./profile-page.js";
import renderFooter from "./components/footer.js";
import { retrieveAds } from "./lib/ad-service.js";

(async () => {
  /**********************Start of self calling function*************************/

  const appElement = document.querySelector("#app");
  const navElement = document.querySelector(".navbar");
  const footerElement = document.querySelector("footer .container");
  const ads = await retrieveAds(); //This retrieves the ads from the api
  renderFooter(footerElement, { ads: ads, interval: 10000 });
  // Creat an instance of the Navigo library used to route to different "Pages"
  const router = new Navigo("/", { linksSelector: "a" });

//check for logged in user and redirect clicks to login page.

  router.notFound(() => {
    // this is like the default case statement in a switch statement
    appElement.innerHTML = `
<div class="bg-warning">
  <h1>NOT FOUND</h1>
  <a href="/">Go back Home</a>
</div>
`;
  });

  // connect the routes with the appropriate page module - this is like a switch statement
  // see documentation at https://github.com/krasimir/navigo/blob/master/DOCUMENTATION.md

  router
    .on("/index.html", () => router.navigate("/"))
    .on("/pig-solitaire", (url) => {
      renderPigPage(appElement);
      renderNavBar(navElement, { title: "Pig Solitaire" });
      //renderFooter(footerElement, {ads:ads, interval:1000});
    })
    .on("/leaderboard", (url) => {
      renderLeaderboardPage(appElement);
      renderNavBar(navElement, { title: "Leaderboard" });
      //renderFooter(footerElement, {ads:ads, interval:1000});
    })
    .on("/craps", (url) => {
      renderCrapsPage(appElement);
      renderNavBar(navElement, { title: "Craps" });
      //renderFooter(footerElement, {ads:ads, interval:1000});
    })
    .on("/yahtzee-count", (url) => {
      renderYahtzeeCountPage(appElement);
      renderNavBar(navElement, { title: "Yahtzee Count" });
      //renderFooter(footerElement, {ads:ads, interval:1000});
    })
    .on("/login", (url) => {
      renderLoginPage(appElement);
      renderNavBar(navElement, { title: "Login" });
      //renderFooter(footerElement, {ads:ads, interval:1000});
    })
    .on("/register", (url) => {
      renderRegisterPage(appElement);
      renderNavBar(navElement, { title: "Register" });
    })
  .on("/profile", (url) => {
    if(sessionStorage.getItem("email")!=null){
      renderProfilePage(appElement);
      renderNavBar(navElement, { title: "Profile" });
    }
    else{
      renderLoginPage(appElement);
      renderNavBar(navElement, { title: "Login" });
    }
    
    })
  .on(() => {
    renderHomePage(appElement, { title: "Home Page" });
    renderNavBar(navElement, { title: "Dashboard" });
    })
  .resolve(); // execute the JS module to render the page
}


)(); /**********************End of self calling function*************************/
