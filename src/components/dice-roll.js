"use strict";

let isRolling = false;

/**
 * Dice rolling animation
 * @param {*} diceArray
 * @returns
 */
export default function diceRoll(diceArray) {
  if (isRolling) {
    return;
  }

  isRolling = true;

  let rollAnimation = setInterval(() => {
    for (let i = 0; i < diceArray.length; i++) {
      diceArray[i] = Math.floor(Math.random() * 6 + 1);

      document.querySelectorAll("img" + (i + 1)).src =
        "../public/images/dice" + diceArray[i] + ".png";
    }
  }, 100);

  let stopAnimation = setTimeout(() => {
    clearInterval(rollAnimation);

    isRolling = false;
  }, 1000);
}
