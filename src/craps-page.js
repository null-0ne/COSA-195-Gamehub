import renderHelpSlider from './components/help-slider.js';

export default function renderCrapsPage(appElement){
    appElement.innerHTML = `<img src='/images/q-icon.svg' alt='Test' id='HelpIcon'>`;

        renderHelpSlider(document.getElementById("HelpIcon"),"Test");
}