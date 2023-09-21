var x;
let y;

// How to use variables:
x = 5;
y = 6;
let z = x + y;

// Function to compute the product of p1 and p2
function myFunction(p1, p2) {
    return p1 * p2;
  }

myFunction(x, z);

let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
console.log(text);

let text2 = "Apple, Banana, Kiwi";
let part = text2.slice(7, 13);

const PI = 3.141592653589793;
PI = 3.14;      // This will give an error
PI = PI + 10;   // This will also give an error

console.log(PI);
