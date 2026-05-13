/**
 *
 * @param {*} element - css selector of element to inject content
 * @param {*} params - optional values, objects or functions needed to render on the page
 */
export default function renderYahtzeeScoreCard(
  element = document.createElement("div") /*default - new button element*/,
  params = {
  
  } /* default - object with: count property , incr() function */,
) {
  //display the count within the button
  element.innerHTML = `<table class="table">
  <thead >
    <tr>
      <th scope="col" class="text-center">Category</th>
      <th scope="col" class="text-center">Times Roll</th>
      <th scope="col" class="text-center">Category</th>
      <th scope="col" class="text-center">Times Roll</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Ones</th>
      <td><input type="text"></input></td>
      <th>Three of a kind</th>
      <td><input type="text"></input></td>
    </tr>
   <tr>
      <th scope="row">Twos</th>
      <td><input type="text"></input></td>
      <th>Four of a kind</th>
      <td><input type="text"></input></td>
    </tr>
    <tr>
      <th scope="row">Threes</th>
      <td><input type="text"></input></td>
      <th>Full House</th>
      <td><input type="text"></input></td>
    </tr>
    <tr>
      <th scope="row">Fours</th>
      <td><input type="text"></input></td>
      <th>Small Straight</th>
      <td><input type="text"></input></td>
    </tr>
    <tr>
      <th scope="row">Fives</th>
      <td><input type="text"></input></td>
      <th>Large Straight</th>
      <td><input type="text"></input></td>
    </tr>
    <tr>
      <th scope="row">Sixes</th>
      <td><input type="text"></input></td>
      <th>Yahtzee!</th>
      <td><input type="text"></input></td>
    </tr>
    <tr >
      <td colspan="3"><input class="btn btn-primary" type="submit" value="Submit"></td>
    </tr>
  </tbody>
  
</table>
  `;
  //<button class="bg-danger">Submit Score</button>
  //return the element in case it is needed for further logic
  return element;
}
