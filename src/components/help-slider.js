"user Strict";


export default function renderHelpSlider(id,text) {
        id.onclick = () => {
        if(document.getElementById("offCanvas") != null) {
                document.getElementById("offCanvas").show();
        }
        let body = document.getElementById("app");
        id.setAttribute("data-bs-toggle","offcanvas");
        id.setAttribute("data-bs-target", "#offCanvas")
        let newDiv = document.createElement("div");
        const bulletPoints = text.split(".");
        newDiv.innerHTML = `<div class='offcanvas offcanvas-bottom'id='offCanvas'>
         <div class='offcanvas-header'>
         <h5>How To play:<h5>
         </div>
         <div class='offcanvas-body'>
         ${text}
         </div>
         </div>`;
        body.append(newDiv);
        setTimeout(function(){
                id.click();
        }, 50)
        }
}