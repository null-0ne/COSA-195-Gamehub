import {addAttribute} from "./components/addAttribute";

export  function renderRollSec(){
    let body = document.querySelector("body");

//Three rows of the page
for (let i = 1; i < 4; i++) {
    let dRow = document.createElement("div");
    addAttribute(dRow, "class", "row");
    addAttribute(dRow, "id", "mainRow" + i);
    body.append(dRow);
}
 
 //2 columns for the game and statistics
    let gameDiv = document.createElement("div");
        addAttribute(gameDiv, "class", "col-8");
        addAttribute(gameDiv, "class", "bg-light");
        addAttribute(gameDiv, "id", "gameCol");

for (let i = 1; i < 5; i++) {
        let dRow = document.createElement("div");
        addAttribute(dRow, "class", "row");
        addAttribute(dRow, "id", "gameRow" + i);
        gameDiv.append(dRow);
        for(let k=1; k< 6; k++){
          let dCol = document.createElement("div");
          addAttribute(dCol, "class", "col");
          addAttribute(dCol, "id", ("gameColRow" + i) + k);
          dRow.append(dCol);
        }
    }
 }
 
 