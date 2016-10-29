/*  

1. IP - Array / OP - Max/Min

Approaches:
1. using default JS
2. Sorting
3. comparing one by one

*/


// function maximumInArray(array){
//   return Math.max.apply(Math, array);
// }
var x = [1,22,53,47,95,6];

// function minimumInArray(array){
//   return Math.min.apply(Math, array);
// }

// minimumInArray (x);



function maxInArray(array){
  return array.reduce(function(prev, curr){
    return (prev > curr) ? prev : curr;
  });
  return max;
}

// Ternary operator
// (condition) ? true : false;