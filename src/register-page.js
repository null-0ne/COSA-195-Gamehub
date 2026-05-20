//story5_as_a_user_i_can_register_and_login_via_email
import { register } from "./lib/user-service.js";
//import { registerValidation } from "./lib/user-service.js";
export default function renderRegisterPage(param) {
  let element = document.createElement("div");
  let bod = document.querySelector("body");
  let outerElem = document.createElement("div");
  bod.appendChild(outerElem);

  outerElem.id = "outerDiv";
  outerElem.appendChild(element);

  element.id = "border";
  element.innerHTML = `
            <div id="holdForm">
                <form id ="login" action="" method="">
                    <fieldset id = "loginInfo" class="d-flex flex-column justify-content-center align-items-center">
                    <div>
                        <label for="email" class="fw-bold form-label"> Email Address: </label>
                        <input name ="custEmail" id="email" type="email" placeholder="example@saskpolytech.ca" class="input-group-text w-100 bg-secondary"/>
                    </div>
                    <div>
                        <label for="password" class="fw-bold "> Password: <label/>
                    </div>
                    <div>
                        <input name = "password" id="password" type="password" class="input-group-text w-100 bg-secondary "/>
                    </div>
                    <div>
                        <label for="confirmPassword" class="fw-bold"> Confirm Password: <label/>
                    </div>
                    <div>
                        <input name = "confirmPassword" id="confirmPassword" type="password" class="input-group-text w-100 bg-secondary "/>
                    </div>
                    <div class="w-100">
                        <p id="errorMessage" class="text-danger"></p>
                        <input type="submit" value="SIGN UP" id="btnSignUp" class="btn btn-success d-grid gap-2 col-6 mx-auto text-black"/>
                        <input type="button" value="BACK" id="btnBack" class="btn btn-success d-grid gap-2 col-6 mx-auto text-black mt-2" />
                    <div>
                    </fieldset>
                </form>
                </div>
                

                
            
    `;
  document.body.style.backgroundImage = "url('../images/bg image.png')";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "contain";

  outerElem.classList =
    "d-flex justify-content-center align-items-center vh-100 vw-100";

  document.getElementById("btnBack").addEventListener("click", () => {
    window.location = "http://localhost:5173/login";
  });

  document.addEventListener("submit", async function (event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if (email.trim() == "" || password.trim() == "") {
      document.getElementById("errorMessage").innerText =
        "You are missing one or more fields!";
    }

    if (registerValidation(email, password, confirmPassword)) {
      const userObject = await register(email, password);
      console.log(userObject);
      if(userObject.id === "exists"){
        errorMessage.innerText = "That user already exists";
      } else{
        window.location = "http://localhost:5173/"; //to dashboard
      }
      
    }
  });

function registerValidation(email, password , confirmPassword){
    
    let emailRegex = /^[a-zA-z0-9._%+-]+@saskpolytech\.ca$/

    if(!emailRegex.test(email)){
        errorMessage.innerText = "Invalid email, must be a @saskpolytech.ca email";
    } else{
        if(password.length < 8){
            errorMessage.innerText = "Password must be at least 8 characters";
        } else {
            if(confirmPassword !== password){
                errorMessage.innerText = "Passwords must match";
            } else {
                errorMessage.innerText = "";
                return true;
            }
        }
    }
}

}

