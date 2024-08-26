// every
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
Array.prototype.myEvery = function(callback) {
    for (var index in this) {
        if (!callback(this[index], index, this)) {
            return false;
        }
    }
    return true;
};
var isEven = numbers.myEvery(function(number) {
    return number % 2 === 0;
});
console.log(isEven); // false

// some
Array.prototype.mySome = function(callback) {
    for (var index in this) {
        if (callback(this[index], index, this)) {
            return true;
        }
    }
    return false;
};
var isEven = numbers.mySome(function(number) {
    return number % 2 === 0;
});
console.log(isEven); // true

// find
Array.prototype.myFind = function(callback) {
    for (var index in this) {
        if (callback(this[index], index, this)) {
            return this[index];
        }
    }
};
var isEven = numbers.myFind(function(number) {
    return number % 2 === 0;
});
console.log(isEven); // 2

// findIndex
Array.prototype.myFindIndex = function(callback) {
    for (var index in this) {
        if (callback(this[index], index, this)) {
            return index;
        }
    }
    return -1;
};
var isEven = numbers.myFindIndex(function(number) {
    return number % 2 === 0;
});
console.log(isEven); // 1

// filter
Array.prototype.myFilter = function(callback) {
    var result = [];
    for (var index in this) {
        if (callback(this[index], index, this)) {
            result.push(this[index]);
        }
    }
    return result;
};
var isEven = numbers.myFilter(function(number) {
    return number % 2 === 0;
});
console.log(isEven); // [2, 4, 6, 8, 10]

// map
Array.prototype.myMap = function(callback) {
    var result = [];
    for (var index in this) {
        result.push(callback(this[index], index, this));
    }
    return result;
};
var double = numbers.myMap(function(number) {
    return number * 2;
});
console.log(double); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

// reduce
Array.prototype.myReduce = function(callback, initialValue) {
    var accumulator = initialValue === undefined ? undefined : initialValue;
    for (var index in this) {
        if (accumulator !== undefined) {
            accumulator = callback.call(undefined, accumulator, this[index], index, this);
        } else {
            accumulator = this[index];
        }
    }
    return accumulator;
};
var sum = numbers.myReduce(function(accumulator, number) {
    return accumulator + number;
}, 0);
console.log(sum); // 55

// reduceRight
Array.prototype.myReduceRight = function(callback, initialValue) {
    var accumulator = initialValue === undefined ? undefined : initialValue;
    for (var index = this.length - 1; index >= 0; index--) {
        if (accumulator !== undefined) {
            accumulator = callback.call(undefined, accumulator, this[index], index, this);
        } else {
            accumulator = this[index];
        }
    }
    return accumulator;
};
var sum = numbers.myReduceRight(function(accumulator, number) {
    return accumulator + number;
}, 0);
console.log(sum); // 55

// forEach
Array.prototype.myForEach = function(callback) {
    for (var index in this) {
        callback(this[index], index, this);
    }
};
numbers.myForEach(function(number) {
    console.log(number);
});

// includes
Array.prototype.myIncludes = function(searchElement, fromIndex) {
    var fromIndex = fromIndex === undefined ? 0 : fromIndex;
    for (var index = fromIndex; index < this.length; index++) {
        if (this[index] === searchElement) {
            return true;
        }
    }
    return false;
};
console.log(numbers.myIncludes(2)); // true
console.log(numbers.myIncludes(20)); // false

// indexOf
Array.prototype.myIndexOf = function(searchElement, fromIndex) {
    var fromIndex = fromIndex === undefined ? 0 : fromIndex;
    for (var index = fromIndex; index < this.length; index++) {
        if (this[index] === searchElement) {
            return index;
        }
    }
    return -1;
};
console.log(numbers.myIndexOf(2)); // 1
console.log(numbers.myIndexOf(20)); // -1

// lastIndexOf
Array.prototype.myLastIndexOf = function(searchElement, fromIndex) {
    var fromIndex = fromIndex === undefined ? this.length - 1 : fromIndex;
    for (var index = fromIndex; index >= 0; index--) {
        if (this[index] === searchElement) {
            return index;
        }
    }
    return -1;
};
console.log(numbers.myLastIndexOf(2)); // 1
console.log(numbers.myLastIndexOf(20)); // -1

// keys
Array.prototype.myKeys = function() {
    var result = [];
    for (var index in this) {
        result.push(index);
    }
    return result;
};
var keys = numbers.myKeys();
console.log(keys); // ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]