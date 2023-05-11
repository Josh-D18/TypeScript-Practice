// Write a Typescript function that takes in an array of numbers and returns the largest number in the array. This exercise will help you learn how to work with arrays in Typescript.
var largestNumber = function (array) {
    var highestNumber = array[0];
    for (var index = 1; index < array.length; index++) {
        var element = array[index];
        if (highestNumber < element) {
            highestNumber = element;
        }
    }
    return highestNumber;
};
console.log(largestNumber([3, 2, 1, 4, 10, 11]));
console.log(largestNumber([9, 10, 50, 60, 21, 10, 99]));
