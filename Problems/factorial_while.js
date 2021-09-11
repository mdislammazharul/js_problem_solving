function factorial(n) {
    var i = n;
    var mul = 1;
    while (i > 0) {
        mul = mul * i;
        i--;
    }
    return mul;
}

var result = factorial(6);
console.log(result);