//31-0 Basic ES6 Concept
//31-1 Module Introduction and Basic ES6 Recap

//recap:



//31-2 Access Value, nested object, Optional chaining
//Chaining  :
//data access:

// const data = [{ id: 1, name: 'Riki Ahmed', address: 'CTG' }]
// console.log(data);
// console.log(data[0]);
// console.log(data[0].name);

// const products = {
//     count: 5000,
//     data: [
//         { id: 1, name: 'Dell', price: 50000 },
//         { id: 1, name: 'Lenovo', price: 40000 },
//     ]
// }

// console.log(products.data[1].name);     //Lenovo
// console.log(products.data[1].price);    //40000


// const user = {
//     id: 100,
//     name: 'Riki',
//     address: {
//         street: {
//             first: 'Satkhania',
//             second: 'kumira',
//             third: '2no gate'
//         },
//         city: 'Chittagong'
//     }
// }
// console.log(user);
// console.log(user.address.street.third);



//optional Chaining: ***
// const user_2 = {
//     id: 100,
//     name: 'Riki',
//     address: {
//         home: {
//             first: 'Satkhania',

//         },
//         city: 'Chittagong'
//     }
// }
// console.log(user.address.street?.third);    //2no gate
// console.log(user_2.address.street.third);   //error

//Optional Chaining:
// console.log(user_2.address.street?.third);     //undefined




//31-3 Array map to do one line loop magic
//map:
