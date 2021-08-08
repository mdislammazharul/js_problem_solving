function jungleAnimals(miles) {
    if (miles <= 10) {
        firstStage = miles * 10
        return firstStage
    }
    else if (miles <= 20) {
        firstStage = 10 * 10
        secondStage = (miles - 10) * 50
        return firstStage + secondStage
    }
    else if (miles > 20) {
        firstStage = 10 * 10
        secondStage = 10 * 50
        thirdStage = (miles - 20) * 100

        return firstStage + secondStage + thirdStage
    }
}

totalAnimal = jungleAnimals(13)
console.log(totalAnimal)