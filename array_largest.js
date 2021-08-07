function largest_array(numbers) {
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i + 1] > numbers[i]) {
            var largest = numbers[i + 1];
        }
    }
    return largest
}

var largest = largest_array([3, 5, 8, 1, 9, 12, 6])
console.log(largest)