/*
Codewars challenge:
Return how many years (n) it takes for population (p0)
to reach target population (p)
p = starting population
percent = percent growth
aug = net migration
p = target population
*/

function nbYear(p0, percent, aug, p) {
  percent = percent / 100;
  var n = 0;
  while (p0 <= p) {
    p0 = p0 + p0 * percent + aug;
    n = n + 1;
  }
  return n;
}
//Test inputs
console.log(nbYear(1500, 5, 100, 5000), 15);
console.log(nbYear(1500000, 2.5, 10000, 2000000), 10);
console.log(nbYear(1500000, 0.25, 1000, 2000000), 94);
//I passed!