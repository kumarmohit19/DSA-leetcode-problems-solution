function canJump(nums) {
   const len = nums.length;
   const dpPositions = new Array(len).fill(false)
   dpPositions[0] = true;

   for (let j = 1; j < len; j++) {
      for( let i = 0; i < j; i++) {
         if(dpPositions[i] && i + nums[i] >= j) {
            dpPositions[j] = true;
            break;
         }
      }
   }

   return dpPositions.pop();
}

module.exports = canJump;
