function calculateTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

function calculateTotal(bill) {
    return bill + calculateTip(bill);
}

var bill1 = 275;
var bill2 = 40;
var bill3 = 430;

var tips = [calculateTip(bill1), calculateTip(bill2), calculateTip(bill3)];

console.log('The bill was ' + bill1 + ', the tip was ' + tips[0] + ', and the total value is ' + calculateTotal(bill1));
console.log('The bill was ' + bill2 + ', the tip was ' + tips[1] + ', and the total value is ' + calculateTotal(bill2));
console.log('The bill was ' + bill3 + ', the tip was ' + tips[2] + ', and the total value is ' + calculateTotal(bill3));