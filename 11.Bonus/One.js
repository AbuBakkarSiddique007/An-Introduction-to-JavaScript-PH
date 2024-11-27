//Repo link: https://github.com/ProgrammingHero1/js-core-concepts-bonus.git



// 24_5-1 (optional) Explore what you can do with JavaScript Object

//Object:
// let student = {
//     name: 'Abu Bakkar Siddique',
//     id: 201008,
//     address: 'CTG',
//     isMarried: false,
//     riki: function () {
//         console.log('Hello World!');

//     },
//     friends: ['a', 'b', 'c'],
//     car: {
//         model: 'Tesla X',
//         price: 100000,
//         made: 2024,
//         manufacturer: {
//             name: "Tesla",
//             CEO: 'Elon  Mask'
//         }
//     }
// }
// console.log(student.car);
// student.riki()


// 24_5-1 (optional) Explore what you can do with JavaScript Object

// let products = [
//     {
//     name: 'Apple',
//     price: 200000,
//     isGood: true
// },

//     {
//     name: 'Orange',
//     price: 200000,
//     isGood: true
// }

// ]


//24_5-2 (advanced) Find the matching product by searching products


// let numbers = [12, 21, 12, 33, 44, 55]

// for (let i = 0; i < numbers.length; i++) {
//     let number = numbers[i]
//     console.log(number);
// }


// for (let number of numbers) {
//     console.log(number);
// }


// let products = [
//     { name: 'riki ahmed', id: 1, roll: 51 },
//     { name: 'ahmed', id: 2, roll: 52 },
//     { name: 'robi ahmed', id: 3, roll: 53 },
//     { name: 'kobi', id: 4, roll: 54 },
//     { name: 'rakib Ahmed', id: 5, cool: 55 },
//     { name: 'sakib', id: 6, cool: 56 },
//     { name: 'musa', id: 7, cool: 57 },
//     { name: 'kekha', id: 8, cool: 58 }
// ]


// for (let product of products) {
//     console.log(product);
// }

// function matchedProducts(products, search) {

//     let matched = []
//     for (let product of products) {
        
//         if(product.name.toLowerCase().includes(search.toLowerCase())){
//             matched.push(product)
//         }

//     }
//     return matched
// }

// let results = matchedProducts(products, 'ahmed')
// console.log(results);


// 24_5-3 Problem solving priority and get best out of this course
