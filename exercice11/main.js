// Write a JavaScript program to compute the greatest common divisor (GCD) 
// of two positive integers.

var a = 2154; //First number
var b = 458;  //Second number 
var ab;
while (a != b) {
  if (a > b) {
    a = a - b;
  }
  else {
    b = b - a;
  }
}
ab = a;
console.log(ab);
