// Data 1
let markWeight1 = 78; // kg
let markHeight1 = 1.69; // meters
let johnWeight1 = 92; // kg
let johnHeight1 = 1.95; // meters

// Data 2
let markWeight2 = 95; // kg
let markHeight2 = 1.88; // meters
let johnWeight2 = 85; // kg
let johnHeight2 = 1.76; // meters

// BMI Calculation for Data 1
let markBMI1 = markWeight1 / (markHeight1 ** 2);
let johnBMI1 = johnWeight1 / (johnHeight1 ** 2);

// BMI Calculation for Data 2
let markBMI2 = markWeight2 / (markHeight2 ** 2);
let johnBMI2 = johnWeight2 / (johnHeight2 ** 2);

// Comparing BMIs
let markHigherBMI1 = markBMI1 > johnBMI1;
let markHigherBMI2 = markBMI2 > johnBMI2;

// function to calculate BMI


// Display Results in Console
console.log("Mark's BMI for Data 1: " + markBMI1.toFixed(2));
console.log("John's BMI for Data 1: " + johnBMI1.toFixed(2));
console.log("Does Mark have a higher BMI than John in Data 1? " + markHigherBMI1);


console.log("Mark's BMI for Data 2: " + markBMI2.toFixed(2));
console.log("John's BMI for Data 2: " + johnBMI2.toFixed(2));
console.log("Does Mark have a higher BMI than John in Data 2? " + markHigherBMI2);