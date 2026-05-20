//story5_as_a_user_i_can_register_and_login_via_email

/**
 * Login Page Component - Acts like a "Page" and can be used in the router in main.js
 * Render function to inject content into an HTML element
 * @param {*} element - HTML element target container
 * @param {*} params - optional values, objects or functions needed to render on the page
 */
import { retrieveLogin } from "./lib/user-service.js";

export default function renderLoginPage(
    element = document.createElement('div'), /*default - new div element*/
    params = {title: 'Product', pageNum: 1} /*default*/) {
  
      //document.querySelector("body").classList = "diceBackground";
  
  element.innerHTML = `
        <div id="test" class="m-auto mt-4 border border-3 border-black d-flex justify-content-center align-items-center w-50 h-100 flex-column">
            <div id="holdForm" class="border border-2 border-black w-75 h-50 mt-4 d-flex justify-content-center">
                <form id ="login" action="" method="" class="w-75 h-50 d-flex justify-content-center">
                    <fieldset id = "loginInfo" class="d-flex flex-column justify-content-center align-items-center">
                        <div class="mt-2">
                        <label for="email" class="fw-bold"> Email Address: </label>
                        <input name ="custEmail" id="email" type="email" placeholder="example@saskpolytech.ca" class="input-group-text w-100 bg-secondary"/>
                        </div>
                        <div>
                        <label for="password" class="fw-bold"> Password: <label/>
                        </div>
                        <div>
                        <input name = "password" id="password" type="password" class="input-group-text w-100 bg-secondary "/>
                        </div>
                        <p id="errorMessage" ></p>
                        <input type="submit" value="LOG IN" id="btnLogin" class="btn btn-success d-grid gap-2 col-6 mx-auto text-black mb-2"/>
                    </fieldset>
                </form>
                </div>
                

                <div id="bottomStuff" class="d-flex flex-column justify-content-center align-items-center w-50 h-50">
                <div>
                    <p> Do not have an account? </p>
                </div>
                <div>
                    <input type="button" value="SIGN UP" id="btnSignUp" class="btn btn-success text-black"/>
                </div>
                <div>
                    <button type="button" class="btn btn-link" id="continue2Dash">Continue without an account</button>
                </div>
                </div>
            </div>
    `;
  document.getElementById("errorMessage").classList = "";
  // let backgroundHolder = document.createElement("div");
  // document.body.style.backgroundImage = "url('../images/bg image.png')";
  // document.body.style.backgroundRepeat = "no-repeat";
  // document.body.style.backgroundSize = "contain";

  let errorMessage = document.getElementById("errorMessage");
  errorMessage.classList = "text-danger";

  // outerElem.classList =
  //   "d-flex justify-content-center align-items-center vh-100 vw-100";

  document
    .getElementById("continue2Dash")
    .addEventListener("click", redirectToDashboard);

  function redirectToDashboard() {
    window.location = "http://localhost:5173/"; //dashboard
  }

  document.getElementById("btnSignUp").addEventListener("click", () => {
    window.location = "http://localhost:5173/register";
  });

  //submit handler!
  document.addEventListener("submit", async function (event) {
    event.preventDefault();

    //validation:
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    const userObject = await retrieveLogin(email, password);

    //check for empty inputs:
    if (email.trim() == "" || password.trim() == "") {
      document.getElementById("errorMessage").innerText =
        "You are missing one or more fields!";
    } else {
      if (userObject.length === 0) {
        document.getElementById("errorMessage").innerText = "";
        document.getElementById("errorMessage").innerText =
          "Username or password is incorrect";
      } else {
        window.location = "http://localhost:5173/"; //dashboard
      }
    }
  });
}
