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
    
                    <img class="img-account-profile img-fluid h-25 w-25 rounded-circle mb-2" src="http://bootdey.com/img/Content/avatar/avatar1.png" alt="">
                    
                </div>
                <button class="btn btn-primary" id="btnChangeImg" type="button">Change Profile Image</button>
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
                           <input class="form-control" id="inputEmailAddress" type="email" placeholder="Enter your email address" value="name@saskpolytech.ca">
                            </div>
                           
                        </div>
                        <div class="row align-items-center">
                            <div class="col-auto">
                            <label class="small mb-1" for="gamerTag">Gamer Tag</label>
                            </div>
                            <div class="col text-center">
                           <input type="text" class="form-control" id="gamerTag" placeholder="kilroy21">
                            </div>
                            <div class="col text-end">
                            <button class="btn btn-primary" id="btnChangeTag" type="button">Change Tag</button>
                            </div>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
  `;

  
  //return the element in case it is needed for further logic
  return element;
}
