/**
 * NavBar Component - a reuseable component that can be injected many times on the different "Pages"
 * Render function to inject content into an HTML element
 * @param {*} element - css selector of element to inject content
 * @param {*} params - optional values, objects or functions needed to render on the page
 */
export default function renderNavBar(
    element = document.createElement('nav'), /* default new nav element*/
    params = { title: "navbar"} /* default object*/
) {
    element.setAttribute('class','navbar bg-primary');
    element.setAttribute('data-bs-theme','dark');
    element.classList.add("p-0");
    //set the content of the nav bar
    element.innerHTML = `   
    <div class="container-fluid p-0 d-flex justify-content-between">
        <a classhref="/">
            <img src="/sp.jpg" class="logo vanilla" alt="Saskpolytech logo" />
        </a>
        <h1 class="text-white text-uppercase me-5 pe-5">${params.title}</h1>
        <div id="profileDiv">
            <a href="/login" class='link-offset-2 link-underline link-underline-opacity-0 text-white me-2'><button>Login</button></a>
        </div>
            </div>
    <div class='container-fluid bg-success p-0 border border-dark border-3'>
        <div class='row w-100 text-center'>
        <div class='col text-white'>
        <a href="/" class='link-offset-2 link-underline link-underline-opacity-0 text-black fs-3 fw-bold'>Home</a>
        </div>
        <div class='col text-white border-start border-3'>
        <a href="/craps" class='link-offset-2 link-underline link-underline-opacity-0 text-black fs-3 fw-bold'>Craps</a>
        </div>
        <div class='col text-white border-start border-3'>
        <a href="/yahtzee-count" class='link-offset-2 link-underline link-underline-opacity-0 text-black fs-3 fw-bold'>Yahtzee Count</a>
        </div>
        <div class='col text-white border-start border-3'>
        <a href="/" class='link-offset-2 link-underline link-underline-opacity-0 text-black fs-3 fw-bold'>Pig Solitaire</a>
        </div>
        <div class='col text-white border-start border-3'>
        <a href="/leaderboard" class='link-offset-2 link-underline link-underline-opacity-0 text-black fs-3 fw-bold'>Leaderboard</a>
        </div>
    </div>
    `;

    const profileDiv = document.getElementById("profileDiv");
    if(sessionStorage.getItem("id")){
        profileDiv.innerHTML = `
        <img src="/images/dice9.png" class="navBarProfilePic me-2 rounded"/>
        <button class="btn btn-success text-black fw-bold border border-2 border-black me-2" id="signOut">Sign Out</button>`
        document.getElementById("signOut").addEventListener("click", function(){
            sessionStorage.removeItem("id");
            sessionStorage.removeItem("email");
            profileDiv.innerHTML = ` <a href="/login" class='link-offset-2 link-underline link-underline-opacity-0 text-black me-2 btn btn-success border border-2 border-black fw-bold'>Login</a>`
        })
    } else{
        profileDiv.innerHTML = ` <a href="/login" class='link-offset-2 link-underline link-underline-opacity-0 text-black me-2 btn btn-success border border-2 border-black fw-bold'>Login</a>`
    }

    
    //return the element in case it is need for further logic
    return element;
}