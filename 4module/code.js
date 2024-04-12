var a = 1.5, p = 10;
var sum = 0;
for (var i = 1; i <= p; i++) {
    sum += a;
    a = a + 1;
}
alert("Result: " + sum);