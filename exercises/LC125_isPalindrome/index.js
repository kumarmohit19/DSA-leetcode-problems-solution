function isPalindrome(s) {
   s = s.replace(/[^0-9a-z]/gi, '').toLowerCase();
   // s = s.replace(/[\W_]/g, '').toLowerCase();
   let last = s.length - 1;
   let first = 0;
   
   while(first < last) {
      if(s.charAt(first) !== s.charAt(last)) 
      return false;
      
      first++;
      last--;
   }
   return true;
}

module.exports = isPalindrome;
