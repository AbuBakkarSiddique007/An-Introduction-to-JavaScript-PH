// 01. JSON => stringify, parse
//stringify : convert normal object into json string format
//parse : convert json string into normal object


const student = {
    name: 'Abu Bakkar Siddique',
    id: 1020,
    institute: 'iiuc',
    movies: ['a', 'b', 'c', 'd', 'e', 'f']
}

// const studentJSON = JSON.stringify(student)
// console.log(studentJSON);
// {"name":"Abu Bakkar Siddique","id":1020,"institute":"iiuc","movies":["a","b","c","d","e","
//     f"]}

// const studentObj = JSON.parse(studentJSON)
// console.log(studentObj);
// {
//     name: 'Abu Bakkar Siddique',
//     id: 1020,
//     institute: 'iiuc',
//     movies: [ 'a', 'b', 'c', 'd', 'e', 'f' ]
//   }


// 02.Fetch:
// fetch('url')
//     .then(response => response.json())
//     .then(data => console.log(data))

// Keys, value:
// keys : object er key niye ekta array create korte

// const keys = Object.keys(student)
// console.log(keys);  //[ 'name', 'id', 'institute', 'movies' ]

const values = Object.values(student)
console.log(values);
// [
//     'Abu Bakkar Siddique',
//     1020,
//     'iiuc',
//     [ 'a', 'b', 'c', 'd', 'e', 'f' ]
//   ]



// for 
const numbers = [23, 54, 67, 87, 23, 78];
numbers.forEach(num => console.log(num));
numbers.map(num => num * 2);

// for of on array like object
// loop on an object using for in 


// add or remove from an array
const products = [
    { name: 'laptop', price: 3200, brand: 'len', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'HTC', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sungalss', price: 300, brand: 'ray', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }
];


const newProduct = { name: 'webcam', price: 700, brand: 'Lal' };

// copy products array and then add newProduct 
const newProducts = [...products, newProduct];
// create a new array without one specific item 
// remove phone means create a new array without the phone
const remaining = products.filter(p => p.name !== 'phone');