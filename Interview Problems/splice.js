// in splice method the second index value is included. that means .slice(2, 5) means --> 2, 3, 4, 5 no index. so till the 5 no index

// .slice[3] --> from index no 3 to the last index of the given array
let arrayIntegersOriginal1 = [1, 2, 3, 4, 5, 6];
let arrayIntegersOriginal2 = [1, 2, 3, 4, 5, 6];
let arrayIntegersOriginal3 = [1, 2, 3, 4, 5, 6];

let arrayIntegers1 = arrayIntegersOriginal1.splice(2, 5); // returns [3, 4, 5, 6]; original array: [1, 2]
let arrayIntegers2 = arrayIntegersOriginal2.splice(3); // returns [4, 5, 6]; original array: [1, 2, 3]
let arrayIntegers3 = arrayIntegersOriginal3.splice(3, 1, "a", "b", "c"); //returns [4]; original array: [1, 2, 3, "a", "b", "c", 5]

console.log(arrayIntegers2);
console.log(arrayIntegersOriginal2);