//import Navigo from 'navigo';  //Documentation: https://github.com/krasimir/navigo/blob/master/DOCUMENTATION.md
import renderHomePage from "./home-page.js";
import renderCrapsPage from "./craps-page.js";
import renderPigPage from "./pig-page.js";
import renderNavBar from "./components/navbar.js";
import renderLeaderboardPage from "./leaderboards-page.js";
import renderYahtzeeCountPage from "./yahtzee-count-page.js";
import renderLoginPage from "./login-page.js";
import renderRegisterPage from "./register-page.js";

const appElement = document.querySelector("#app");
const navElement = document.querySelector(".navbar");

// Creat an instance of the Navigo library used to route to different "Pages"
const router = new Navigo("/", { linksSelector: "a" });

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
  .on("/leaderboard", (url) => {
    renderLeaderboardPage(appElement);
    renderNavBar(navElement, { title: "Leaderboard" });
  })
  .on("/craps", (url) => {
    renderCrapsPage(appElement);
    renderNavBar(navElement, { title: "Craps" });
  })
  .on("/yahtzee-count", (url) => {
    renderYahtzeeCountPage(appElement);
    renderNavBar(navElement, { title: "Yahtzee Count" });
  })
  .on("/pig-solitaire", (url) => {
    renderPigPage(appElement);
    renderNavBar(navElement, { title: "Pig Solitaire" });
  })
  .on("/login", (url) => {
    renderLoginPage(appElement);
    renderNavBar(navElement, { title: "Login" });
  })
  .on("/register", (url) => {
    renderRegisterPage(appElement);
    renderNavBar(navElement, { title: "Register" });
  })
  .on(() => {
    renderHomePage(appElement, { title: "Home Page" });
    renderNavBar(navElement, { title: "Home" });
  })
  .resolve(); // execute the JS module to render the page
