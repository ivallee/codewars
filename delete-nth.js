// Challenge: reduce occurences of array elements to specified number (x)

function deleteNth(arr,x) {
  var result = {};
  return arr.filter(function(number) {
    result[number] = (result[number] || 0) + 1;
    return result[number] <= x;
  });
}


console.log(deleteNth([20,37,20,21], 1), [20,37,21])
console.log(deleteNth([1,1,3,3,7,2,2,2,2], 3), [1, 1, 3, 3, 7, 2, 2, 2])

// This passed but mostly pasted this code from google results. Had a hard time figuring it out myself.