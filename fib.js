var cash = [0, 1, 1];

function fibo(n, deep = 0) {

    if (cash[n] === undefined) {
        cash[n] = fibo(n - 1, deep + 1) + fibo(n - 2, deep + 1);
        console.log(cash);
    }

    return cash[n];
}

var f = fibo(100);

for (var j = 1; j < cash.length; j++) {
    document.write(`${j}: ${cash[j]}<br />`);
}