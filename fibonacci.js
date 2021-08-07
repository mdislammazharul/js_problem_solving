let first = 0
let second = 1

for (let i = 0; i < 10; i++) {
    [first, second] = [second, first + second]

    console.log([first, second])
}