/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
   let value = [];

   for ( let i = 0; i< arr.length; i++ ) {
      value.push(fn(arr[i], i));
   }

   return value;
};
