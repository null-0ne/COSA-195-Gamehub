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
    <div class="table-responsive">
        <table class="table table-nowrap ">
            <thead class="">
                <tr>
                    <th>Craps</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td rowspan="2"> 
                            <div class="d-flex align-items-center gap-3 position-relative">
                                <td rowspan="2"> <img src="https://assets.webpixels.io/img/people/img-1.jpg" class=" h-25 w-25 rounded-circle" alt="..." /> </td>
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
                                <td rowspan="2"> <img src="https://assets.webpixels.io/img/people/img-1.jpg" class=" h-25 w-25 rounded-circle" alt="..." /> </td>
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
                                <td rowspan="2"> <img src="https://assets.webpixels.io/img/people/img-1.jpg" class=" h-25 w-25 rounded-circle" alt="..." /> </td>
                            </div>
                    </td>
                    <td> Score: <span id="storeScore1C">3.21 </span></td>
                </tr>
                <tr>
                    <td> Date: <span id="storeDate1C">2025-05-08 </span> </td>
                </tr> 
            </tbody>
        </table>
    </div>
    <div class="table-responsive">
        <table class="table table-nowrap ">
            <thead class="">
                <tr>
                    <th>Craps</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td rowspan="2"> 
                            <div class="d-flex align-items-center gap-3 position-relative">
                                <td rowspan="2"> <img src="https://assets.webpixels.io/img/people/img-1.jpg" class=" h-25 w-25 rounded-circle" alt="..." /> </td>
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
                                <td rowspan="2"> <img src="https://assets.webpixels.io/img/people/img-1.jpg" class=" h-25 w-25 rounded-circle" alt="..." /> </td>
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
                                <td rowspan="2"> <img src="https://assets.webpixels.io/img/people/img-1.jpg" class=" h-25 w-25 rounded-circle" alt="..." /> </td>
                            </div>
                    </td>
                    <td> Score: <span id="storeScore1C">3.21 </span></td>
                </tr>
                <tr>
                    <td> Date: <span id="storeDate1C">2025-05-08 </span> </td>
                </tr> 
            </tbody>
        </table>
    </div>
    <div class="table-responsive">
        <table class="table table-nowrap ">
            <thead class="">
                <tr>
                    <th>Craps</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td rowspan="2"> 
                            <div class="d-flex align-items-center gap-3 position-relative">
                                <td rowspan="2"> <img src="https://assets.webpixels.io/img/people/img-1.jpg" class=" h-25 w-25 rounded-circle" alt="..." /> </td>
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
                                <td rowspan="2"> <img src="https://assets.webpixels.io/img/people/img-1.jpg" class=" h-25 w-25 rounded-circle" alt="..." /> </td>
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
                                <td rowspan="2"> <img src="https://assets.webpixels.io/img/people/img-1.jpg" class=" h-25 w-25 rounded-circle" alt="..." /> </td>
                            </div>
                    </td>
                    <td> Score: <span id="storeScore1C">3.21 </span></td>
                </tr>
                <tr>
                    <td> Date: <span id="storeDate1C">2025-05-08 </span> </td>
                </tr> 
            </tbody>
        </table>
    </div>
  `;

  
  //return the element in case it is needed for further logic
  return element;
}
