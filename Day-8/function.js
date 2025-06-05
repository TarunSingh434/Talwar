//let x = 10;
//let y = 3;
//console.log(x + y);
//console.log(x - y);
//console.log(x * y);
//console.log(x / y);
//console.log(x % y);
//console.log(x ** y);

//let x = 7;
//let updated = x++;
//console.log(x++);
//console.log(x);



function fact(n) {
    let res = 1;
    for (let i = 1; i <= n; i++) {
        res *= i;
    }
    return res;
}
console.log(fact(5));