function coinChange(coins, amount) {
   const dpArray = new Array(amount + 1).fill(Infinity);
   dpArray[0] = 0;

   for (let i = 1; i < dpArray.length; i++) {
      for (let j = 0; j < coins.length; j++) {
         if(i - coins[j] >= 0){
            dpArray[i] = Math.min(dpArray[i], dpArray[i - coins[j]] + 1);
         }
      }
   }

   if (dpArray[amount] === Infinity) {
      return -1;
   }   
   
   return dpArray[amount];
}

module.exports = coinChange;
