// Write a JavaScript conditional statement to find the sign of product 
//of three numbers. Display an alert box with the specified sign.
// Sample numbers : 3, -7, 2
// Output : The sign is -

var x = 3;
var y = -7;
var z = 2;
// if (x > 0 && y > 0 && z > 0) {
//   alert("The sign is +");
// }
// else if (x < 0 && y < 0 && z < 0) {
//   console.log("The sign is -");
// }
// else if (x > 0 && y < 0 && z < 0) {
//   console.log("The sign is +");
// }
// else if (x < 0 && y > 0 && z < 0) {
//   console.log("The sign is +");
// }
// else {
//   console.log("The sign is -");
// }

(x > 0 && y > 0 && z > 0) ?
  alert("The sign is +")
  : (x < 0 && y < 0 && z < 0) ?
    console.log("The sign is -")
    : (x > 0 && y < 0 && z < 0) ?
      console.log("The sign is +")
      : (x < 0 && y > 0 && z < 0) ?
        console.log("The sign is +")
        :
        console.log("The sign is -")

