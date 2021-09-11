function factorial(n) {
    var mul = 1;
    for (var i = 1; i <= n; i++) {
        mul = mul * i;
    }
    return mul;
}

var n = 6;
var result = factorial(n);
console.log(result);