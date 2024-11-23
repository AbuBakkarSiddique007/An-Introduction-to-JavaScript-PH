//22-8 Swap variable, swap without temp, destructing

// let a = 10
// let b = 20
// let c;
// c = a
// a = b
// b = c

// console.log(a, b);


//Without using temp variable:

let x = 100;
let y = 200;

[x, y] = [y, x]

console.log(x, y);
