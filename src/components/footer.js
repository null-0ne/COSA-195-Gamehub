export default function renderFooter(
    element = document.createElement('div'), /* default new div element*/
    params = { ads:[
    {
    "category": "default",
    "message": "This could be your advertisement",
    "link": "#"
    },
    {
    "category": "default",
    "message": "This is a default advertisement",
    "link": "#"
    }]} /* default advertisement array*/
) {
    //set the content of the nav bar
    //use the built-in JS array function 'reduce' to convert the array of product objects in to an HTML string
    //reduce loops through each item in the products array and outputs an HTML string for each then joins them all in several list items
    const messagesHTML = params.ads.reduce((str, ad, i) => `
    ${str}
        <div class="carousel-item ${i === 0 ? 'active' : ''}" >
            <a href="${ad.link}" class="text-white">${ad.message}</a>
        </div>
    `, '');

    element.innerHTML = `   
    <div id="carousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="10000">
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
