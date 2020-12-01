var cash = [0, 1, 1];
var g = prompt('Введите по какое число вам нужно вывести ряд Фиббоначчи');


function fibo(n) {

    if (cash[n] === undefined) {
        cash[n] = fibo(n - 1) + fibo(n - 2);
        console.log(cash);
    }

    return cash[n];
}

var f = fibo(g);

for (var j = 1; j < cash.length; j++) {
    document.write(`<p style="font-size:18pt;">${j}: ${cash[j]}</p>`);
}