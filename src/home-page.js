/**
 * HomePage Component - Acts like a "Page" and can be used in the router in main.js
 * Render function to inject content into an HTML element
 * @param {*} element - HTML element target container
 * @param {*} params - optional values, objects or functions needed to render on the page
 */
export default function renderHomePage(
  element = document.createElement('div'), /*default - new div element*/
  params = { title: 'Home' } /*default - object with title property*/
) {
  //set the content for the home page
  element.innerHTML = `
    <div class="d-flex justify-content-between">
      <a href="/craps" class="link-underline link-underline-opacity-0">
      <div class="card mt-4">
        <image src="/images/crapsImg.png" class="card-img-top gameImg" alt="craps game" />
        <div class="card-body bg-success text-black text-center">
          <h3 class="card-title fs-2">CRAPS</h3>
        </div>
      </div>
      </a>
      <a href="/yahtzee-count" class="link-underline link-underline-opacity-0">
      <div class="card mt-4">
        <image src="/images/yahtzeeImg.png" class="card-img-top gameImg" alt="craps game" />
        <div class="card-body bg-success text-black text-center">
          <h3 class="card-title fs-2">YAHTZEE COUNT</h3>
        </div>
      </div>
      </a>
      <a href="#" class="link-underline link-underline-opacity-0">
      <div class="card mt-4">
        <image src="/images/pigImg.png" class="card-img-top gameImg" alt="craps game" />
        <div class="card-body bg-success text-black text-center">
          <h3 class="card-title fs-2">PIG SOLITAIRE</h3>
        </div>
      </div>
      </a>
    </div>
    <div class="text-center mt-5">
      <a href="/leaderboard" class="btn btn-success btn-lg fs-1 text-black" id="leaderboardBtn">LEADERBOARD</a>
    </div>
    `;

  //return the element in case it is needed for further logic
  return element;
};