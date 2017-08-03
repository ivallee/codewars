/*
Codewars challenge
Square each digit of an integer and return an integer
*/

function squareDigits(num){
convertArray = [],
sNum = num.toString();
output = "";
for (var i = 0, len = sNum.length; i < len; i++) {
  convertArray.push(+sNum.charAt(i));
  convertArray[i] = Math.pow(convertArray[i], 2);
  output = output + convertArray[i];
  }
  output = Number(output);
  return output;
}

console.log(squareDigits(9119));

//This passed their tests! It looks verbose and I wonder if there's a simpler way to write this code