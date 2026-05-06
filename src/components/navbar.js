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
    //set the content of the nav bar
    element.innerHTML = `
    <div class="container-fluid">
        <a class="navbar-brand" href="/">
            <img src="/favicon.jpg" class="logo vanilla" alt="Saskpolytech logo" />
            Dice Games
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navContent">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navContent">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="/">Home</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Examples</a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="/memory">Memory Game Using Component Animation</a></li>
                        <li><a class="dropdown-item" href="/counter">Counter Component Sharing Params</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="/product">Product List From API</a></li>
                        <li><a class="dropdown-item" href="/product/page/2">Product List Paging 2</a></li>
                        <li><a class="dropdown-item" href="/product/page/3">Product List Paging 3</a></li>             
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="/fake-route">Not Found Example</a></li>
                    </ul>
                </li>
            </ul>

        </div>
    </div>
    `;

    //return the element in case it is need for further logic
    return element;
}