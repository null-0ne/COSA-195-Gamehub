import {getScores} from "../lib/score-service.js";

/**
 *
 * @param {*} element - css selector of element to inject content
 * @param {*} params - optional values, objects or functions needed to render on the page
 */


export default function renderTopThreeScore(
  element = document.createElement("div") ,
  params = {} 
) {
  element.innerHTML = `

<div class="row align-items-center">
    <div class="col-auto">
                            <div class="table-responsive">
        <table class="table table-nowrap">
            <thead class="">
                <tr class="orangeColor table-dark">
                    <th colspan="2" >Yahtzee Count</th>
                </tr>
            </thead>

            <tbody class="table-dark">
                <tr>
                    <td rowspan="2"> 
                            <div class="d-flex align-items-center gap-3 position-relative">
                                <img src="https://assets.webpixels.io/img/people/img-1.jpg" class=" h-25 w-25 rounded-circle" alt="..." /> 
                            </div>
                    </td>
                    <td> Score: <span id="storeScore1Y">3.21 </span></td>
                </tr>
                <tr>
                    <td> Date: <span id="storeDate1Y">2025-05-08 </span> </td>
                </tr> 


                <tr>
                    <td rowspan="2"> 
                            <div class="d-flex align-items-center gap-3 position-relative">
                                <img src="https://assets.webpixels.io/img/people/img-1.jpg" class=" h-25 w-25 rounded-circle" alt="..." />
                            </div>
                    </td>
                    <td> Score: <span id="storeScore2Y">3.21 </span></td>
                </tr>
                
                <tr>
                    <td> Date: <span id="storeDate2Y">2025-05-08 </span> </td>
                </tr> 
                <tr>
                    <td rowspan="2"> 
                            <div class="d-flex align-items-center gap-3 position-relative">
                            <img src="https://assets.webpixels.io/img/people/img-1.jpg" class=" h-25 w-25 rounded-circle" alt="..." />
                            </div>
                    </td>
                    <td> Score: <span id="storeScore3Y">3.21 </span></td>
                </tr>
                <tr>
                    <td> Date: <span id="storeDate3Y">2025-05-08 </span> </td>
                </tr> 
            </tbody>
        </table>
    </div>
</div>

<div class="col-auto ">
        <div class="table-responsive">
        <table class="table table-nowrap">
            <thead >
                <tr class="orangeColor table-dark">
                    <th colspan="2" >Craps</th>
                </tr>
            </thead>

            <tbody class="table-dark">
                <tr>
                    <td rowspan="2"> 
                            <div class="d-flex align-items-center gap-3 position-relative">
                                <img src="https://assets.webpixels.io/img/people/img-1.jpg" class=" h-25 w-25 rounded-circle" alt="..." />
                            </div>
                    </td>
                    <td> Score: <span id="storeScore1C">3.21 </span></td>
                </tr>
                <tr>
                    <td> Date: <span id="storeDate1C">2025-05-08 </span> </td>
                </tr> 
                <tr>
                    <td rowspan="2"> 
                            <div class="d-flex align-items-center gap-3 position-relative">
                                <img src="https://assets.webpixels.io/img/people/img-1.jpg" class=" h-25 w-25 rounded-circle" alt="..." />
                            </div>
                    </td>
                    <td> Score: <span id="storeScore2C">3.21 </span></td>
                </tr>
                <tr>
                    <td> Date: <span id="storeDate2C">2025-05-08 </span> </td>
                </tr> 
                <tr>
                    <td rowspan="2"> 
                            <div class="d-flex align-items-center gap-3 position-relative">
                                <img src="https://assets.webpixels.io/img/people/img-1.jpg" class=" h-25 w-25 rounded-circle" alt="..." />
                            </div>
                    </td>
                    <td> Score: <span id="storeScore2C">3.21 </span></td>
                </tr>
                <tr>
                    <td> Date: <span id="storeDate2C">2025-05-08 </span> </td>
                </tr> 
            </tbody>
        </table>
    </div>
</div>


<div class="col-auto">
                             <div class="table-responsive">
        <table class="table table-nowrap ">
            <thead class="">
                <tr class="orangeColor table-dark">
                    <th colspan="2">Pig</th>
                </tr>
            </thead>

            <tbody class="table-dark">
                <tr>
                    <td rowspan="2"> 
                            <div class="d-flex align-items-center gap-3 position-relative">
                                <img src="https://assets.webpixels.io/img/people/img-1.jpg" class=" h-25 w-25 rounded-circle" alt="..." />
                            </div>
                    </td>
                    <td> Score: <span id="storeScore1P">3.21 </span></td>
                </tr>
                <tr>
                    <td> Date: <span id="storeDate1P">2025-05-08 </span> </td>
                </tr> 
                <tr>
                    <td rowspan="2"> 
                            <div class="d-flex align-items-center gap-3 position-relative">
                                <img src="https://assets.webpixels.io/img/people/img-1.jpg" class=" h-25 w-25 rounded-circle" alt="..." />
                            </div>
                    </td>
                    <td> Score: <span id="storeScore2P">3.21 </span></td>
                </tr>
                <tr>
                    <td> Date: <span id="storeDate2P">2025-05-08 </span> </td>
                </tr> 
                <tr>
                    <td rowspan="2"> 
                            <div class="d-flex align-items-center gap-3 position-relative">
                                <img src="https://assets.webpixels.io/img/people/img-1.jpg" class=" h-25 w-25 rounded-circle" alt="..." />
                            </div>
                    </td>
                    <td> Score: <span id="storeScore3P">3.21 </span></td>
                </tr>
                <tr>
                    <td> Date: <span id="storeDate3P">2025-05-08 </span> </td>
                </tr> 
            </tbody>
        </table>
    </div>
</div>
</div>
`;




//return the element in case it is needed for further logic
return element;
}
