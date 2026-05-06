/**
 * Counter Component - a reuseable component that can be injected many times on the different "Pages"
 * Render function to inject content into an HTML element
 * @param {*} element - css selector of element to inject content
 * @param {*} params - optional values, objects or functions needed to render on the page
 */
export default function renderCounter(
  element = document.createElement('button'), /*default - new button element*/
  params = { count: 0, incr: function () { this.count++; } } /* default - object with: count property , incr() function */
) {
  //display the count within the button
  element.innerHTML = `count is ${params.count}`;
  
  //connect the click event handler
  element.onclick = () => {
    //when the button is clicked ...

    //increase the count
    params.incr(); 

    // refresh the content in the button
    element.innerHTML = `count is ${params.count}`;
  };
  
  //return the element in case it is needed for further logic
  return element;
}
