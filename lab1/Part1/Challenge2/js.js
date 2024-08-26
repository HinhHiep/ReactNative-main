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
let markBMI1 = calculateBMI(markWeight1, markHeight1);
let johnBMI1 = calculateBMI(johnWeight1, johnHeight1);

// BMI Calculation for Data 2
let markBMI2 = calculateBMI(markWeight2, markHeight2);
let johnBMI2 = calculateBMI(johnWeight2, johnHeight2);

// Comparing BMIs
let markHigherBMI1 = compareBMI(markBMI1, johnBMI1);
let markHigherBMI2 = compareBMI(markBMI2, johnBMI2);

// function to calculate BMI
function calculateBMI(weight, height) {
    return weight / (height ** 2);
}

//function to compare BMI
function compareBMI(markBMI, johnBMI) {
    return markBMI > johnBMI;
}


// Display Results in Console
console.log("Mark's BMI for Data 1: " + markBMI1.toFixed(2));
console.log("John's BMI for Data 1: " + johnBMI1.toFixed(2));
console.log("Does Mark have a higher BMI than John in Data 1? " + markHigherBMI1);
if (markHigherBMI1) {
    console.log("Mark BMI (" + markBMI1.toFixed(2) + ")" + " is higher than John BMI (" + johnBMI1.toFixed(2) + ")");
} else {
    console.log("John BMI (" + johnBMI1.toFixed(2) + ")" + " is higher than Mark BMI" + markBMI1.toFixed(2));
}

console.log("Mark's BMI for Data 2: " + markBMI2.toFixed(2));
console.log("John's BMI for Data 2: " + johnBMI2.toFixed(2));
console.log("Does Mark have a higher BMI than John in Data 2? " + markHigherBMI2);
if (markHigherBMI2) {
    console.log("Mark BMI (" + markBMI2.toFixed(2) + ")" + " is higher than John BMI" + johnBMI2.toFixed(2));
} else {
    console.log("John BMI" + johnBMI2.toFixed(2) + " is higher than Mark BMI" + markBMI2.toFixed(2));
}