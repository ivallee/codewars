//return the total number of smiling faces in the array
function countSmileys(arr) {
  return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
}


console.log(countSmileys([]), 0);
console.log(countSmileys([':D',':~)',';~D',':)']), 4);
console.log(countSmileys([':)',':(',':D',':O',':;']), 2);
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']), 1);

// I wasn't able to figure out the challenge this time!
// The function above is one of the solutions using regular expressions