function lengthOfLIS(nums) {
   if(nums.length === 0) return 0;

   const len = nums.length
   const dpPosition = new Array(len).fill(1);
   let maxSoFar = 1;

   for ( let j = 1; j < len; j++) {
      for ( let i = 0; i < j; i++) {
         if(nums[i] < nums[j]) {
            dpPosition[j]= Math.max(dpPosition[j], dpPosition[i] + 1)
         }
      }
      maxSoFar = Math.max(maxSoFar, dpPosition[j]);
   }
   return maxSoFar;
}

module.exports = lengthOfLIS;
