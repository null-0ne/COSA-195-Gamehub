
export function rollDice(diceArray) {
  
  
  


    let dieAnimation = setInterval(function () {
        for (let i = 0; i < diceArray.length; i++) {
            diceArray[i] = Math.floor(Math.random() *6 + 1);

            }
           
        },
        100);

    let stopAnimation = setTimeout(function () {
        clearInterval(dieAnimation);
        isRolling = false;

        let currRollSum = diceArray.reduce((acc, val) => acc+ val, 0);
    return currRollSum;
 
    

    }, 1000);

    
}