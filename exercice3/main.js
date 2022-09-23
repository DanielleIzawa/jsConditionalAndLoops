// Write a JavaScript conditional statement to sort three numbers. 
// Display an alert box to show the result.
// Sample numbers : 0, -1, 4
// Output : 4, 0, -1

var x = 0;
var y = -1;
var z = 4;
// if (x > y && x > z) {
//   if (y > z) {
//     console.log(x + ", " + y + ", " + z);
//   }
//   else {
//     console.log(x + ", " + z + ", " + y);
//   }
// }
// else if (y > x && y > z) {
//   if (x > z) {
//     console.log(y + ", " + x + ", " + z);
//   }
//   else {
//     console.log(y + ", " + z + ", " + x);
//   }
// }
// else if (z > x && z > y) {
//   if (x > y) {
//     console.log(z + ", " + x + ", " + y);
//   }
//   else {
//     console.log(z + ", " + y + ", " + x);
//   }
// }


// if (x > y && x > z) {
//   (y > z) ?
//     console.log(x + ", " + y + ", " + z) :
//     console.log(x + ", " + z + ", " + y);
// }
// else if (y > x && y > z) {
//   (x > z) ?
//     console.log(y + ", " + x + ", " + z) :
//     console.log(y + ", " + z + ", " + x);

// }
// else if (z > x && z > y) {
//   (x > y) ?
//     console.log(z + ", " + x + ", " + y) :
//     console.log(z + ", " + y + ", " + x);
// }


(x > y && x > z) ?
  (y > z) ?
    console.log(x + ", " + y + ", " + z) :
    console.log(x + ", " + z + ", " + y)
  : (y > x && y > z) ?
    (x > z) ?
      console.log(y + ", " + x + ", " + z) :
      console.log(y + ", " + z + ", " + x)
    : (z > x && z > y) ?
      (x > y) ?
        console.log(z + ", " + x + ", " + y) :
        console.log(z + ", " + y + ", " + x)
      : null
