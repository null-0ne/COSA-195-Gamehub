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
    element.setAttribute('class','navbar bg-primary');
    element.setAttribute('data-bs-theme','dark');
    element.classList.add("p-0");
    //set the content of the nav bar
    element.innerHTML = `   
    <div class="container-fluid p-0">
        <a classhref="/">
            <img src="/sp.jpg" class="logo vanilla" alt="Saskpolytech logo" />
        </a>
        <a href="/login" class='link-offset-2 link-underline link-underline-opacity-0 text-white'><button>Login</button></a>
    </div>
    <div class='container-fluid bg-success p-0 border border-dark'>
        <div class='row w-100 h-100 text-center'>
        <div class='col-md-4 text-white'>
        <a href="/" class='link-offset-2 link-underline link-underline-opacity-0 text-black'>Home</a>
        </div>
        <div class='col-md-4 text-white'>
        <a href="/craps" class='link-offset-2 link-underline link-underline-opacity-0 text-black'>Craps</a>
        </div>
        <div class='col-md-4 text-white'>
        <a href="/yahtzee-count" class='link-offset-2 link-underline link-underline-opacity-0 text-black'>Yahtzee Count</a>
        </div>
    </div>
    `;

    //return the element in case it is need for further logic
    return element;
}