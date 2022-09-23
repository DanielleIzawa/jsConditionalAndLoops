// Write a JavaScript for loop that will iterate from 0 to 15. 
// For each iteration, it will check if the current number is odd or even, 
// and display a message to the screen
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"
// ----------
// ----------

a = -5;
b = -2;
c = -6;
d = 0;
f = -1;
// if (a > b && a > c && a > d && a > f) {
//   console.log(a);
// }
// else if (b > a && b > c && b > d && b > f) {
//   console.log(b);
// }
// else if (c > a && c > b && c > d && c > f) {
//   console.log(c);
// }
// else if (d > a && d > c && d > b && d > f) {
//   console.log(d);
// }
// else {
//   console.log(f);
// }


(a > b && a > c && a > d && a > f) ?
  console.log(a)
  : (b > a && b > c && b > d && b > f) ?
    console.log(b)
    : (c > a && c > b && c > d && c > f) ?
      console.log(c)
      : (d > a && d > c && d > b && d > f) ?
        console.log(d)
        :
        console.log(f)

