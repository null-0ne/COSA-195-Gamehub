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
    <div>
    
    </div>
    `;

  //return the element in case it is needed for further logic
  return element;
};