function uniquePaths(m, n) {
   const dpMatrix = new Array(m); 

   // Initialize a 2D array and assigning all first elements of row to 1
   for( let row = 0; row < m; row++) {
      dpMatrix[row] = new Array(n);
      dpMatrix[row][0] = 1;
   } 

   // Initialize a 2D array and assigning all first elements of row to 1
   for( let col = 1; col < n; col++) {
      dpMatrix[0][col] = 1;
   } 

   for( let row = 1; row < m; row++) {
      for( let col = 1; col < n; col++) {
         dpMatrix[row][col] = dpMatrix[row][col-1] + dpMatrix[row-1][col];
      } 
   } 

   return dpMatrix[m-1][n-1];
}

module.exports = uniquePaths;
