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

    //Initialize the message to be the first in the array
    const link = document.getElementById("link");
    link.innerText = params[0].message;
    link.href = params[0].link;

    //Get forward and back buttons from the html
    const backBtn = document.getElementById("backBtn");
    const fwdBtn = document.getElementById("fwdBtn");

    //Initialize button listeners
    backBtn.addEventListener("click", prevAd);
    fwdBtn.addEventListener("click", nextAd);

    //Initialize interval to cycle through ads every 5 seconds
    let adInterval = setInterval(nextAd, 5000);

    /**
     * This function changes the ad to the next ad in the array. If it is at the end of the 
     * array it will restart at the first element in the array
     */
    function nextAd(){
        if(nIndex === params.length - 1){
            nIndex = 0;
        } else {
            nIndex++;
        }
        clearInterval(adInterval);
        link.innerText = params[nIndex].message;
        link.href = params[nIndex].link;
        adInterval = setInterval(nextAd, 5000);
    }

    /**
     * This function changes the ad to the previous ad in the array. If it is at the first 
     * element in the array it will go to the last element in the array.
     */
    function prevAd(){
        if(nIndex === 0){
            nIndex = params.length - 1;
        } else {
            nIndex--;
        }
        clearInterval(adInterval);
        link.innerText = params[nIndex].message;
        link.href = params[nIndex].link;
        adInterval = setInterval(nextAd, 5000);
    }
    //return the element in case it is need for further logic
    return element;
}