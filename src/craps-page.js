import renderHelpSlider from './components/help-slider.js';

export default function renderCrapsPage(appElement){
    appElement.innerHTML = `<div><img src='/images/q-icon.svg' alt='Test' id="ImageIdea"></div>`;

    document.getElementById("ImageIdea").addEventListener("click", function(){
        renderHelpSlider(document.getElementById("ImageIdea"),"Test");
    });
}