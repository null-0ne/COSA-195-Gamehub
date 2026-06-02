//https://getbootstrap.com/docs/5.3/components/navbar/#placement

export default function renderFooter(
    element = document.createElement('div'), /* default new div element*/
    params = [
    {
    "category": "default",
    "message": "This could be your advertisement",
    "link": "#"
    },
    {
    "category": "default",
    "message": "This is a default advertisement",
    "link": "#"
    }] /* default advertisement array*/
) {
    element.setAttribute('class','fixed-bottom bg-primary');
    element.setAttribute('data-bs-theme','dark');
    element.classList.add("p-0");
    //set the content of the nav bar
    element.innerHTML = `   
    <div class="container-fluid p-1 d-flex justify-content-between align-items-center">
        <div class="ms-4">
            <button class="btn btn-outline-light rounded fw-bold" id="backBtn"><-</button>
        </div>
        <div>
            <a href="#" class='text-white fs-3' id="link"></a>
        </div>
        <div class="me-4">
            <button class="btn btn-outline-light rounded fw-bold" id="fwdBtn">-></button>
        </div>
    </div>
    `;

    let nIndex = 0; //This keeps track of what advertisement is being shown

    
    const link = document.getElementById("link");
    link.innerText = params[0].message;
    link.href = params[0].link;

    const backBtn = document.getElementById("backBtn");
    const fwdBtn = document.getElementById("fwdBtn");

    backBtn.addEventListener("click", prevAd);
    fwdBtn.addEventListener("click", nextAd);

    function nextAd(){
        if(nIndex === params.length - 1){
            nIndex = 0;
        } else {
            nIndex++;
        }
        link.innerText = params[nIndex].message;
        link.href = params[nIndex].link;
    }

    function prevAd(){
        if(nIndex === 0){
            nIndex = params.length - 1;
        } else {
            nIndex--;
        }
        link.innerText = params[nIndex].message;
        link.href = params[nIndex].link;
    }
    //return the element in case it is need for further logic
    return element;
}