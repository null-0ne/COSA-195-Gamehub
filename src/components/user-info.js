/**
 *
 * @param {*} element - css selector of element to inject content
 * @param {*} params - optional values, objects or functions needed to render on the page
 */

export default function renderUserInfo(
  element = document.createElement("div") ,
  params = {} 
) {
  element.innerHTML = `
    <div class="px-4 mt-4">
    
    
    <div class="row">
        <div class="col-4">
            <!-- Profile picture card-->
            <div class="card mb-4 mb-xl-0">
        
                <div class="card-body text-center ">
    
                    <img id="profileImg" class="img-account-profile img-fluid h-25 w-25 rounded-circle mb-2" src="http://bootdey.com/img/Content/avatar/avatar1.png" alt="">
                    
                </div>
                <button class="btn btn-primary" id="btnSaveProfile" type="button">Save Profile</button>
            </div>
        </div>
        <div class="col-8 ">
           
            <div class="card mb-4">
                <div class="card-header">Profile Details</div>
                <div class="card-body m-2">
                    <form>

                        <div class="row align-items-center">
                            <div class="col-auto">
                            <label class="small mb-1" for="inputEmailAddress">Email address</label>
                            </div>
                            <div class="col text-center">
                           <input class="form-control" id="inputEmailAddress" type="email" placeholder="Enter your email address" value=${params.email} disabled>
                            </div>
                           
                        </div>
                        <div class="row align-items-center">
                            <div class="col-auto">
                            <label class="small mb-1" for="gamerTag">Gamer Tag</label>
                            </div>
                            <div class="col text-center">
                           <input type="text" class="form-control" id="gamerTag" placeholder="kilroy21">
                            </div>
                        
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <div id = "imgPicker" class="container my-4">
    <label class="form-label fw-bold mb-3">Choose an Avatar</label>
    <div class="row g-3">
    
    
    <div class="col-6 col-md-3">
    <input type="radio" name="avatarPicker" id="avatar1" class="btn-check" value="/images/avatar1.png" checked>
    <label class="card h-100 btn btn-outline-primary p-0 border-2 overflow-hidden" for="avatar1">
        <img src="/images/avatar1.png" class="img-fluid" >
        <div class="card-body p-2 text-center text-dark">Option One</div>
    </label>
    </div>

    <div class="col-6 col-md-3">
    <input type="radio" name="avatarPicker" id="avatar2" class="btn-check" value="/images/avatar2.png">
    <label class="card h-100 btn btn-outline-primary p-0 border-2 overflow-hidden" for="avatar2">
        <img src="/images/avatar2.png" class="img-fluid" alt="Option 2">
        <div class="card-body p-2 text-center text-dark">Option Two</div>
    </label>
    </div>

    <div class="col-6 col-md-3">
    <input type="radio" name="avatarPicker" id="avatar3" class="btn-check" value="/images/avatar3.png">
    <label class="card h-100 btn btn-outline-primary p-0 border-2 overflow-hidden" for="avatar3">
        <img src="/images/avatar3.png" class="img-fluid" alt="Option 3">
        <div class="card-body p-2 text-center text-dark">Option Three</div>
      </label>
    </div>

    <div class="col-6 col-md-3">
    <input type="radio" name="avatarPicker" id="avatar4" class="btn-check" value="/images/avatar4.png">
    <label class="card h-100 btn btn-outline-primary p-0 border-2 overflow-hidden" for="avatar4">
        <img src="/images/avatar4.png" class="img-fluid" alt="Option 3">
        <div class="card-body p-2 text-center text-dark">Option Four</div>
      </label>
    </div>

  </div>
</div>

</div>
`;

let gamerAvatar;
params.updateProfile();
element.querySelector("#profileImg").src = sessionStorage.getItem("avatar")
element.querySelector("#gamerTag").value = sessionStorage.getItem("gamerTag");   



element.querySelector("#btnSaveProfile").addEventListener("click", async function(){

    await submitProfile();
    console.log(params);
    element.querySelector("#profileImg").src = sessionStorage.getItem("avatar")
    element.querySelector("#gamerTag").value =  sessionStorage.getItem("gamerTag");
    
})

async function submitProfile()
  {

    params.gamerTag =  element.querySelector("#gamerTag").value;
    params.gamerAvatar =  element.querySelector('input[type="radio"]:checked').value;
    await params.submitProfile();
    await params.updateProfile();
     element.querySelector("#imgPicker").style.display = "none";
  }
//when user clicks
let displayBlock = false;
element.querySelector("#profileImg").addEventListener("click", function(){
    if(displayBlock == false){
        element.querySelector("#imgPicker").style.display = "block";
        displayBlock = true;
    }
    else{
        element.querySelector("#imgPicker").style.display = "none";
        displayBlock = false;
    } 
})

// let arrBtnChk = element.querySelectorAll(".btn-check");
        
//         element.querySelector("#imgPicker").addEventListener("click", function(){
            
            
            
//         })

  //return the element in case it is needed for further logic
  return element;
}
