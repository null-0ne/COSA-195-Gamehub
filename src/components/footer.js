/*
 Filename:    footer.js
 Student:     Rylan Wight
 Course:      COSA 195 (Systems Project)
 Date:        2026-06-08
 Purpose:     Footer component
              A reusable component that can be injected many times on the different "Pages"
*/
/**
 * Render function to inject content into an HTML element
 * @param {*} element - css selector of element to inject content
 * @param {*} params - Ad array for carousel to cycle through and the interval at which they automatically change
 */
export default function renderFooter(
    element = document.createElement('div'), /* default new div element*/
    params = { ads:[
    {
    "category": "default",
    "message": "This could be your advertisement",
    "link": "https://saskpolytech.ca/"
    },
    {
    "category": "default",
    "message": "This is a default advertisement",
    "link": "https://saskpolytech.ca/"
    }], interval:1000} /* default advertisement array*/
) {
    //use the built-in JS array function 'reduce' to convert the array of ad objects in to an HTML string
    //reduce loops through each item in the ads array and outputs an HTML string for each then joins them all in several div items
    const messagesHTML = params.ads.reduce((str, ad, i) => `
    ${str}
        <div class="carousel-item ${i === 0 ? 'active' : ''}" >
            <a target="_blank" href=${ad.link} class="text-white">${ad.message}</a>
        </div>
    `, '');

    element.innerHTML = `   
    <div id="carousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="${params.interval}">
        <div class="carousel-inner text-center " id="carouselDiv">
            ${messagesHTML}
        </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
</div>
    `;
    //return the element in case it is need for further logic
    return element;
}
