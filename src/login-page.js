//story5_as_a_user_i_can_register_and_login_via_email

/**
 * Login Page Component - Acts like a "Page" and can be used in the router in main.js
 * Render function to inject content into an HTML element
 * @param {*} element - HTML element target container
 * @param {*} params - optional values, objects or functions needed to render on the page
 */
import {retrieveLogin} from "./lib/user-credentials.js";

export default function renderLoginPage(param) {
    let element = document.createElement("div");
    let bod = document.querySelector('body');
    let outerElem = document.createElement("div");
    bod.appendChild(outerElem);

    outerElem.id="outerDiv";
    outerElem.appendChild(element);

    element.id = "border";
    element.innerHTML = `
            <div id="holdForm">
                <form id ="login" action="" method="">
                    <fieldset id = "loginInfo">
                        <label for="email"> Email Address: <label/>
                        <input name ="custEmail" id="email" type="email" placeholder="example@saskpolytech.ca"/>

                        <label for="password"> Password: <label/>
                        <input name = "custPassword" id="password" type="password"/>
                        
                        <input type="submit" value="LOG IN"/>
                    </fieldset>
                </form>
                </div>

                <div id="bottomStuff">
                    <p> Do not have an account? </p>
                    <input type="submit" value="SIGN UP"/>
                    <button type="button" class="btn btn-link" id="continue2Dash">Continue without an account</button>
                </div>
            
    `;

    element.classList = "border border-black d-flex justify-content-center align-items-center w-50 h-50 flex-column";
    let holdForm = document.getElementById("holdForm");
    holdForm.classList = "border border-black w-75 h-50 mt-4 d-flex justify-content-center align-items-center ";

    document.getElementById("login").classList = "w-75 h-50 d-flex justify-content-center align-items-center"; 
    let bottomStuff = document.getElementById("bottomStuff");
    bottomStuff.classList = "w-50 h-50";

    outerElem.classList = "d-flex justify-content-center align-items-center vh-100 vw-100";

    //document.getElementById("continue2Dash").addEventListener("click", redirectToDashboard);

    function redirectToDashboard(){
        window.location = ""; 
    }

    document.getElementById("continue2Dash").addEventListener("click", async function(){
        let user = await retrieveLogin();
        console.log(user);
    })

}
