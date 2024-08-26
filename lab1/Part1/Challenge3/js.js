let dolphins = [96, 108, 89];
let koalas = [88, 91, 110];

function calculateAverageScore(scores) {
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    return sum / scores.length;
}
//1. Calculate the average score for each team
let dolphinsAverage = calculateAverageScore(dolphins);
let koalasAverage = calculateAverageScore(koalas);
console.log("Dolphins average score: " + dolphinsAverage);
console.log("Koalas average score: " + koalasAverage);
//2. Check the winner
if (dolphinsAverage > koalasAverage) {
    console.log("Dolphins win with an average score of " + dolphinsAverage);
} else if (koalasAverage > dolphinsAverage) {
    console.log("Koalas win with an average score of " + koalasAverage);
} else {
    console.log("It's a draw with an average score of " + dolphinsAverage);
}
//3. Check the bonus
let minScore = 100;
if (dolphinsAverage > koalasAverage && dolphinsAverage >= minScore) {
    console.log("Dolphins win with an average score of " + dolphinsAverage);
} else if (koalasAverage > dolphinsAverage && koalasAverage >= minScore) {
    console.log("Koalas win with an average score of " + koalasAverage);
} else if (dolphinsAverage === koalasAverage && dolphinsAverage >= minScore && koalasAverage >= minScore) {
    console.log("It's a draw with an average score of " + dolphinsAverage);
} else {
    console.log("No team wins the bonus");
}