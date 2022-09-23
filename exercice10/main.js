// Write a JavaScript program to construct the following pattern, 
// using a nested for loop.
// *  
// * *  
// * * *  
// * * * *  
// * * * * * 

var x, y, xy;
for (x = 1; x <= 6; x++) {
  for (y = 1; y < x; y++) {
    xy = xy + ("*");
  }
  console.log(xy);
  xy = '';
}
