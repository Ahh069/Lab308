// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;
console.log (isSum50)

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 < 25 || n2 > 25 || n3 > 25 || n4 > 25;
console.log(isOver25);
// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;
console.log(isUnique);
// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && isOver25 && isUnique;
console.log(isValid)
console.log ('-----')
// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);

// Check if all numbers are divisible by 5. Cache the result in a variable.
let allDivisibleby5 = true
console.log(allDivisibleby5);
console.log("-------")
// Check if the first number is larger than the last. Cache the result in a variable.
// let sum = (n2-n1)
// console.log(sum);
// console.log("-------")
// Accomplish the following arithmetic chain:
let isLargerthan4=true
console.log(isLargerthan4);
console.log("-------")
// Subtract the first number from the second number.
let sum = (n2-n1)
console.log(sum);
console.log("-------")
// Multiply the result by the third number.
// Find the remainder of dividing the result by the fourth number.
// Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate.
let answer = (5*n3)
console.log(answer);
console.log("-------")

// let allDivisibleby5= true
// console.log(allDivisibleby5);

// let isLargerthan4=true
// console.log(isLargerthan4);

// let sum = (n2-n1)
// console.log(sum);

// let answer = (5*n3)
// console.log(answer);

// Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in
// changed > to < for isOver25 for n1,removed ! from isValid

// other logic comparisons. Rename the variable as appropriate.
// How we got the answer: changed symbol from n1 line ?? to < to  and ran it, it ran false
// then removed the not marker (!) from line 42's over25 make it true.


let result = (answer / n4) %2;
console.log(result);

// The distance of the trip, in total, is 1,500 miles.
// Your car’s fuel efficiency is as follows:
// You have a fuel budget of $175.
// The average cost of fuel is $3 per gallon.

// At 55 miles per hour, you get 30 miles per gallon.
// It will take 50 gallons of gas with the amount of $150.00. 
//It will take 27 hrs for the trip.// This is within the fuel Budget of $175.00.

// let thirtygallon = (1500/30)/ 50 miles
// console.log(thirtygallon);

// let dollar1 = (50*3.00) /$150.00 for gas
// console.log(dollar1);
 
// let hour1=(1500/55) / 27 hours
// console.log(hour1);

// // At 60 miles per hour, you get 28 miles per gallon.
// It will take 54 gallons of gas with the amount of $160.71. 
//It will take 25 hrs for the trip.// This is within the fuel Budget of $175.00
// let eightgallon = (1500/28)/ 54 gallons
// console.log(eightgallon);

// let dollar2 = (53.57*3.00)$160.71for gas
// console.log(dollar2);

// let hour2=(1500/60) 25hours
// console.log(hour2);
 
// At 75 miles per hour, you get 23 miles per gallon.

// It will take 65 gallons of gas with the amount of $186.63. 
//It will take 20 hrs for the trip.// This is not within the fuel Budget of $175.00

// let threegallon = (1500/23)// 65 gallons
// console.log(threegallon);

// let dollar3 = (62.21*3.00) $186.63 for gas
// console.log(dollar3);

// let hour3=(1500/75) 20 hours
// console.log(hour3);

// Set up a program to answer the following questions:
// How many gallons of fuel will you need for the entire trip?

// Will your budget be enough to cover the fuel expense?
// How long will the trip take, in hours?
// Compare the results when traveling at an average of 55, 60, and 75 miles per hour. Which makes the most sense for the trip?
// Log the results of your calculations using string concatenation or template literals.

