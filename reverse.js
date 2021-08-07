function reverse(myString) {
    let j = 0
    console.log(myString.length)
    let reverseString = []
    for (i = myString.length; i > 0; i--) {
        reverseString[j] = myString[i - 1]
        j++
    }
    return String(reverseString)
}

let string = reverse('I love my country!')
let finalString = string.replace(/,/g, "")

console.log(finalString)