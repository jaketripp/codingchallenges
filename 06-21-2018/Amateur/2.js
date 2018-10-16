// 2. Pythagorean
// Write a function that takes three parameters: a, b, c. Return the boolean true if a^2 + b^2 = c^2,false if not.
// input: 3, 4, 5
// output: true
// input: 4, 5, 6
// output: false

function pythagorean(a, b, c) {
  return a * a + b * b === c * c;
}
