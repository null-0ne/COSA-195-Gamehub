//import Navigo from 'navigo';  //Documentation: https://github.com/krasimir/navigo/blob/master/DOCUMENTATION.md
import renderHomePage from './home-page.js';
import renderProductPage from './examples/product-page.js';
import renderContactPage from './examples/counter-page.js';
import renderMemoryPage from './examples/memory-page.js';
import renderNavBar from './components/navbar.js';
import renderLoginPage from './login-page.js';

const appElement = document.querySelector('#app');
const navElement = document.querySelector('.navbar');

renderNavBar(navElement);
// Creat an instance of the Navigo library used to route to different "Pages"
const router = new Navigo("/", { linksSelector: "a" });



router.notFound(() => { // this is like the default case statement in a switch statement
  appElement.innerHTML = `
<div class="bg-warning">
  <h1>NOT FOUND</h1>
  <a href="/">Go back Home</a>
</div>
`});

// connect the routes with the appropriate page module - this is like a switch statement
// see documentation at https://github.com/krasimir/navigo/blob/master/DOCUMENTATION.md
router
  .on('/index.html',()=>router.navigate('/'))
  .on('/product', (url) => renderProductPage(appElement, {title:'Product List',pageNum:url.params?.page}))
  .on('/product/page/:pageNum', (url) => { console.log(url); renderProductPage(appElement,{title:'Product List',pageNum:url.data.pageNum})})
  .on('/counter', (url) => renderContactPage(appElement,{title:'Shared Counter'}))
  .on('/memory', (url) => renderMemoryPage(appElement,{title:'Memory Game'}))
  .on(() => renderHomePage(appElement,{title:'Dice Games'}))
  .on('/login-page', (url) => renderLoginPage(appElement))
  .resolve();// execute the JS module to render the page
