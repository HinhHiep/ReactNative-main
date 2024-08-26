// create an array bills containing all 10 test data
var bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

var tips = [];
var totals = [];



Array.prototype.calcTip = function(callback) {
    for (var i = 0; i < this.length; i++) {
        tips.push(callback(this[i]));
        totals.push(this[i] + tips[i]);
    }
};

bills.calcTip(function(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
});
console.console.log(bills, tips, totals);