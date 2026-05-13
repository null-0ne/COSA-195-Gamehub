/**
 * NavBar Component - a reuseable component that can be injected many times on the different "Pages"
 * Render function to inject content into an HTML element
 * @param {*} element - css selector of element to inject content
 * @param {*} params - optional values, objects or functions needed to render on the page
 */
export default function renderNavBar(
    element = document.createElement('nav'), /* default new nav element*/
    params = {} /* default empty object*/
) {
    element.setAttribute('class','navbar navbar-expand-lg bg-primary');
    element.setAttribute('data-bs-theme','dark');
    element.classList.add("p-0")
    //set the content of the nav bar
    element.innerHTML = `
    <div class="container-fluid">
        <a class="navbar-brand" href="/">
            <img src="/sp.jpg" class="logo vanilla" alt="Saskpolytech logo" />
        </a>

    </div>
        <div class='col bg-primary'>
        <div class='col-sm-1'>
        Home
        </div>
        <div class='col-sm-1'>
        Craps
        </div>
        <div class='row-sm-1'>
        Yahtzee Count
        </div>
    `;

    //return the element in case it is need for further logic
    return element;
}