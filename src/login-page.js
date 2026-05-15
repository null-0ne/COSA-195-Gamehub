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
                        <label for="email"> Email Address: </label>
                        <input name ="custEmail" id="email" type="email" placeholder="example@saskpolytech.ca" class="input-group-text w-100"/>

                        <label for="password"> Password: <label/>
                        <input name = "custPassword" id="password" type="password" class="input-group-text w-100"/>

                        <p id="errorMessage"></p>
                        <input type="submit" value="LOG IN" id="btnLogin" class="btn btn-success d-grid gap-2 col-6 mx-auto " 
                            style="background-color: #81bc00"/>
                    </fieldset>
                </form>
                </div>
                

                <div id="bottomStuff">
                    <p> Do not have an account? </p>
                    <input type="submit" value="SIGN UP" id="btnSignUp" class="btn btn-success" style="background-color: #81bc00"/>
                    <button type="button" class="btn btn-link" id="continue2Dash">Continue without an account</button>
                </div>
            
    `;

    document.getElementById("errorMessage").classList = "";
   // let backgroundHolder = document.createElement("div");
    document.body.style.backgroundImage = "url('../images/bg image.png')"
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "contain";
    

    element.classList = "border border-black d-flex justify-content-center align-items-center w-50 h=100 flex-column";
    let holdForm = document.getElementById("holdForm");
    holdForm.classList = "border border-black w-75 h-50 mt-4 d-flex justify-content-center align-items-center ";

    document.getElementById("login").classList = "w-75 h-50 d-flex justify-content-center align-items-center "; 
    let bottomStuff = document.getElementById("bottomStuff");
    bottomStuff.classList = "w-50 h-50";

    outerElem.classList = "d-flex justify-content-center align-items-center vh-100 vw-100";

    //document.getElementById("continue2Dash").addEventListener("click", redirectToDashboard);

    function redirectToDashboard(){
        window.location = ""; //dashboard
    }

    //submit handler!
    document.addEventListener("submit", async function(event){
        event.preventDefault();

        //validation:
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        const userObject = await retrieveLogin(email, password);

        //check for empty inputs:
        if(email.trim() == "" || password.trim() == ""){
            document.getElementById("errorMessage").innerText = "You are missing one or more fields!";
        }
        else{
            if(userObject == null){
                document.getElementById("errorMessage").innerText = "";
                document.getElementById("errorMessage").innerText = "Username or password is incorrect";
            }
            else{
                window.location = ""; //dashboard
            }
        }

        
        })

    

}
