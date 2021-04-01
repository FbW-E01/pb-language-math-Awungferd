// 1. MINIMUM & MAXIMUM
// a. Lowest Number
console.log(
  "The lowest number between -1 and 4 is: " + Math.min(-1, 0, 1, 2, 3, 4)
);

// b. Highest Number

console.log(
  "The highest number between -1 and 4 is: " + Math.max(-1, 0, 1, 2, 3, 4)
);
console.log("2)__ ROUNDING: 3321.32321, 326.76, 76788.7, -9.78, 43.342. ___");
console.log("---------");
console.log("A)  Round UP");
const num = 3321.32321;
console.log("Rounded up to the nearest integer " + Math.ceil(num));
const num1 = 326.76;
console.log("Rounded up to the nearest integer " + Math.ceil(num1));
const num2 = 76788.7;
console.log("Rounded up to the nearest integer " + Math.ceil(num2));
const num3 = -9.78;
console.log("Rounded up to the nearest integer " + Math.ceil(num3));
const num4 = 43.342;
console.log("Rounded up to the nearest integer " + Math.ceil(num4));

console.log("---------");
console.log("B)  Round Down");
console.log("Rounded down to the nearest integer: " + Math.floor(num));
console.log("Rounded down to the nearest integer: " + Math.floor(num1));
console.log("Rounded down to the nearest integer: " + Math.floor(num2));
console.log("Rounded down to the nearest integer: " + Math.floor(num3));
console.log("Rounded down to the nearest integer: " + Math.floor(num4));
console.log("---------");
// 3. DICE ROLL!
// Print a random integer between 1 and 6
console.log("3) DICE ROLL: Randomly generates numbers");
console.log(Math.ceil(Math.random() * 6));
