// 01. array destructuring

//Array:
const numbers1 = [1, 2, 3, 4, 5]
const x = numbers1[0]
const y = numbers1[1]
console.log(x, y);   //1 2


const numbers2 = [10, 20, 30, 40, 50]
const [a, b] = numbers2
console.log(a, b);   //10 20

const [m, n] = [60, 70]
console.log(m, n);   //60 70


const makeArray = (num1, num2) => {
    const num = [num1, num2]
    return num
}

const array1 = makeArray(10, 20)
console.log(array1);    //[ 10, 20 ]

const [g, h] = makeArray(100, 200)

console.log(g, h);   //100 200
console.log([g, h]); //[ 100, 200 ]

const student = {
    name: 'Riki',
    age: 24,
    institute: 'eye eye you see',
    city: 'Chittagong',
    friendList: ['a', 'b', 'c', 'd', 'e']

}


const [firstFriend, secondFriend] = student.friendList
console.log(firstFriend, secondFriend);  //a b


// object destructuring
const { nam, old } = { nam: 'Riki', old: '24' }
console.log(nam, old);   //Riki 24


const { name, age } = { id: 12, name: 'alu', salary: 3400, age: 14 };
console.log(name,age);



const employee = {
    ide: 'VS Code',
    designation: 'developer',
    machine: 'mac',
    languages: ['html', 'css', 'js'],
    specification: {
        height: 66,
        weight: 67,
        address: 'kumarkhali',
        drink: 'water',
        watch: {
            color: 'black',
            price: 500,
            brand: 'garmin'
        }
    }
}

// const { machine, ide } = employee;
// const { weight, address } = employee.specification;

//chaining:
// const { brand } = employee?.specification?.watch;


// const { brand } = employee.specification.watch;

console.log(brand);