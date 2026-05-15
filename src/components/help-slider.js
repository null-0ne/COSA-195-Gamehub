"user Strict";

/*credits: https://getbootstrap.com/docs/5.0/components/offcanvas/ -helped with understanding how offcanvas works*/
/*credits Ernesto simplifiying code*/
export default function renderHelpSlider(
        element = document.createElement("img")
        , params = {text: "No Help Message provided"}
        ) {

        element.innerHTML = `
        <button class="btn btn-secondary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><img src='/images/q-icon.svg' alt='Test' id='HelpIcon' height='50'></button>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 id="offcanvasRightLabel">How to Play:</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    ${params.text}
  </div>
</div>`
}