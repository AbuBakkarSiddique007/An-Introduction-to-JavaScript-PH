//Repo Link: https://github.com/ProgrammingHero1/js-problems-part2.git
//Task Link: 


// 23-1 Can you find out who will get the delicious cake?
//get max value between two:
let a = 10
let b = 20

if (a > b) {
    console.log(`${a} is greater than ${b}`);


}
else {
    console.log(`${b} is greater than ${a}`);

}



//get max using function between two:
function getMax(a, b) {
    if (a > b) {
        return `${a} is greater than ${b}`


    }
    else {
        return `${b} is greater than ${a}`

    }
}

// let result = getMax(100,120)
// console.log(`Result: ${result}`);

let max1 = getMax(100, 200)
let max2 = getMax(300, 400)

let ultimateMax = getMax(max1, max2)
console.log(`The Ultimate max is: ${ultimateMax}`);


//get max between three value:
let one=10
let two =20
let three = 30

