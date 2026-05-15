//story5_as_a_user_i_can_register_and_login_via_email
import {register} from "./lib/user-credentials.js";
import {registerValidation} from "./lib/user-credentials.js";
export default function renderRegisterPage(param) {
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
                        <input name ="custEmail" id="email" type="email" placeholder="example@saskpolytech.ca" class="input-group-text w-100 bg-secondary"/>

                        <label for="password"> Password: <label/>
                        <input name = "custPassword" id="password" type="password" class="input-group-text w-100 bg-secondary "/>

                        <p id="errorMessage"></p>
                        <input type="submit" value="Sign Up" id="btnSignUp" class="btn btn-success d-grid gap-2 col-6 mx-auto text-black"/>
                    </fieldset>
                </form>
                </div>
                

                
            
    `;

}

let btnSignUp = document.getElementById("btnSignUp");

document.addEventListener("submit", async function(event){
    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if(email.trim() == "" || password.trim() == ""){
            document.getElementById("errorMessage").innerText = "You are missing one or more fields!";
        }

    if(registerValidation())
    {
        const userObject = await register(email, password);
        window.location = ""; //to dashboard
    }
    
});