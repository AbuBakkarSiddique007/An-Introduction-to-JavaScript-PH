//20_9 Loop an object and Ways to declare an Object

//1: Object Literal:
let penOne = {
    brand: 'matador',
    price: 10,
    color: 'gray'
}

//2: new keyword
let penTwo = new Object()

penTwo.firstName = 'abu'
penTwo.lastName = 'bakkar'


//3: Object.create()
let orgObject = {
    company: 'Samsung'
}

let employee = Object.create(orgObject);
console.log(employee.company);
