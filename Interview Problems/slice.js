// in slice method the second index value is excluded. that means .slice(2, 5) means --> 2, 3, 4 no index, not till 5 no index
// .slice[4] --> from index no 4 to the last index of the given array
let arrayIntegers = [1, 2, 3, 4, 5, 6, 7];
let arrayIntegers1 = arrayIntegers.slice(0, 2); // returns 0 & 1 no index's element [1,2]
let arrayIntegers2 = arrayIntegers.slice(2, 5); // returns 2 no index's element [3]
let arrayIntegers3 = arrayIntegers.slice(4); //returns 4 no index's element [5, 6, 7]

// Slice method won't mutate the original array but it returns the subset as a new array.
console.log(arrayIntegers3);
console.log(arrayIntegers);