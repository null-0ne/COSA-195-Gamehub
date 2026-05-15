/**
 *
 * @param {*} element - css selector of element to inject content
 * @param {*} params - optional values, objects or functions needed to render on the page
 */
export default function renderGameplaySection(
  element = document.createElement("div") /*default - new button element*/,
  params = {} /* default - object with: count property , incr() function */,
) {
  //display the count within the button
  element.innerHTML = `<div class="col">
        <div>
          <p class="fw-bold">Current Roll:</p>
        </div>
        <div class="pt-5 img-container ">
          <img 
            src="../public/images/dice1.png"
            class="rounded float"
            alt="..."
          />
          <img
            src="../public/images/dice2.png"
            class="rounded float"
            alt="..."
          />
          <img
            src="../public/images/dice3.png"
            class="rounded float"
            alt="..."
          />
          <img
            src="../public/images/dice4.png"
            class="rounded float"
            alt="..."
          />
          <img
            src="../public/images/dice5.png"
            class="rounded float"
            alt="..."
          />
        </div>
        <div class="container pt-5">
          <div class="row align-items-center">
            <div class="col">
              <span>Roll Number: <span>1</span></span>
            </div>
            <div class="col text-center">
              <button type="button" class="btn btn-primary">ROLL</button>
            </div>
            <div class="col text-end">
              <p class="m-0">Time: <span>22:00</span> min</p>
            </div>
          </div>


        </div>
</div>`;

  //return the element in case it is needed for further logic
  return element;
}
