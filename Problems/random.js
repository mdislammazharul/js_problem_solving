function randomNumber(n) {
    let random_numbers = [];
    for (let i = 0; i < n; i++) {
        let numbers = Math.random() * 10
        numbers = Math.round(numbers)
        if (random_numbers.indexOf(numbers) == -1) {
            random_numbers.push(numbers)
        }
        else {
            i--;
        }
    }
    return random_numbers
}
const rand = randomNumber(10)
console.log(rand)

