var num1, num2

num1 = window.prompt("Input the first integer", "0")
num2 = window.prompt("Input the second integer", "0")

/* if (parseInt(num1, 10) > parseInt(num2, 10)) {
  console.log("The larger of " + num1 + " and " + num2 + " is " + num1 + ".");
} else
  if (parseInt(num1, 10) > parseInt(num2, 10)) {
    console.log("The larger of " + num1 + " and " + num2 + " is " + num2 + ".");
  } else {
    console.log("The values " + num1 + " and " + num2 + " are equal.");
  } */

parseInt(num1, 10) > parseInt(num2, 10) ?
  console.log("The larger of " + num1 + " and " + num2 + " is " + num1 + ".")
  : parseInt(num1, 10) > parseInt(num2, 10) ?
    console.log("The larger of " + num1 + " and " + num2 + " is " + num2 + ".")
    : console.log("The values " + num1 + " and " + num2 + " are equal.");

