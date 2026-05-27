/*
 Filename:    counter-page.js
 Student:     
 Course:      COSA 195 (Systems Project)
 Date:        2026-05-01
 Purpose:     Counter Page Component
              Acts like a "Page" and can be used in the router in app.js
*/

import renderCounter from "./components/counter.js"

/**
 * ContactPage Component - Acts like a "Page" and can be used in the router in main.js
 * Render function to inject content into an HTML element
 * @param {*} element - HTML element target container
 * @param {*} params - optional values, objects or functions needed to render on the page
 */
export default function renderContactPage(
    element = document.createElement('div'), /*default - new div element*/
    params = { title: 'Contact' } /*default*/
) {
  // set the content of the element
  element.innerHTML = `
    <div>
        <h1><img src="/sp.jpg" class="logo vanilla" alt="Saskpolytech logo" />
        ${params.title}</h1>
        <div class="btn-group">
        <button type="button" class="btn btn-primary">hi</button>
        <button type="button" class="btn btn-primary">there</button>
        <button type="button" class="btn btn-primary">is an error</button>
        </div>
    </div>
     `;

  // pass by reference object to send as params agruement to multiple components
  const sharedParams = {
    count: 0,
    incr: function () { this.count++; }
  };


  // look for 1st button element and pass by reference params object
  renderCounter(document.querySelector('.btn'), sharedParams);

  // look for 2nd button element and pass by reference params object
  renderCounter(document.querySelector('.btn:nth-child(2)'), sharedParams);

  // look for 3rd button element and DO NOT pass the params agrument so that the default params object is used
  renderCounter(document.querySelector('.btn:nth-child(3)'));

  //return the element in case it is needed for further logic
  return element;
};

