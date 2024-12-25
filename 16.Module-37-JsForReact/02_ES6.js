const numbers = [1, 2, 3, 4, 5]
const students = {
    name: 'Riki Ahmed',
    age: 24,
    movies: ['A', 'B', 'C', 'D']
}

// 01. template string

const aboutMe = `My self ${students.name} and i am ${students.age} year old and my favorite movie is ${students[1]}`

console.log(aboutMe);


// 02. arrow function
const getFiftyFive = () => 55
const addSixtyFive = num => num + 65
const isEven = num => num % 2 === 0
const addThree = num => num + 3
const doMath = (num1, num2) => {
    const sum = num1 + num2
    return sum
}


// 03.spread operator
//Basically eta use kora hoi new ekta array copy make korte,
//from a existing array.

//Copy kora array te modify korle original array te khono effect porbe nh.

const arrayOne = [10, 20, 30, 40, 50]

console.log(arrayOne);  //[ 10, 20, 30, 40, 50 ]

const arrayTwo = [...arrayOne, 60]
console.log(arrayTwo);  //[ 10, 20, 30, 40, 50, 60 ]

arrayTwo.push(100)

console.log(arrayOne);  //[ 10, 20, 30, 40, 50 ]
console.log(arrayTwo);  //[ 10, 20,  30, 40, 50, 60, 100]