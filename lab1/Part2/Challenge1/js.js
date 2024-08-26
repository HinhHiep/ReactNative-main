var dolphins1 = [44, 23, 71];
var koalas1 = [65, 54, 49];

var dolphins2 = [85, 54, 41];
var koalas2 = [23, 34, 27];

// create a function to calculate the average of the scores
function calcAverage(scores) {
    return scores.reduce((a, b) => a + b) / scores.length;
}

var avgDolphins1 = calcAverage(dolphins1);
console.log(avgDolphins1);
var avgKoalas1 = calcAverage(koalas1);
console.log(avgKoalas1);

var avgDolphins2 = calcAverage(dolphins2);
var avgKoalas2 = calcAverage(koalas2);
console.log(avgDolphins2);
console.log(avgKoalas2);

console.log(checkWinner(avgDolphins1, avgKoalas1));
console.log(checkWinner(avgDolphins2, avgKoalas2));

// create a function to check the winner
function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
    } else if (avgKoalas >= 2 * avgDolphins) {
        return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
    } else {
        return `No winner`;
    }
}