/* Challenge: You are given an array
(which will have a length of at least 3, but could be very large) containing integers.
The array is either entirely comprised of odd integers or entirely
comprised of even integers except for a single integer N.
Write a method that takes the array as an argument and returns N.
*/
function findOutlier(integers){
  var evenNums = [];
  var oddNums = [];
  var output = 0;
  for (i = 0; i < integers.length; i++) {
    if (integers[i] % 2 == 0){
      evenNums.push(integers[i]);
    } else {
        oddNums.push(integers[i]);
    }
  }
  if (evenNums.length < oddNums.length) {
    output = evenNums[0];
    return output;
  } else {
    output = oddNums[0];
    return output;
    }
}


console.log(findOutlier([0, 1, 2]), 1)
console.log(findOutlier([1, 2, 3]), 2)
console.log(findOutlier([2,6,8,10,3]), 3)
console.log(findOutlier([0,0,3,0,0]), 3)
console.log(findOutlier([1,1,0,1,1]), 0)

// This passed. I'm sure there is a far cleaner way to do this but I am still proud of myself!
