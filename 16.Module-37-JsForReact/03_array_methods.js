const products = [
    { name: 'laptop', price: 3200, brand: 'lenovo', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'iphone', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sungalss', price: 300, brand: 'ray', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }
];




//01.map : khono ekta array of object tekhe ekta element  niye arekta array make korte chaile. map kisu ekta(array) return  korbe always

const itemsList = products.map(product => product.name)
console.log(itemsList); //[ 'laptop', 'phone', 'watch', 'sungalss', 'camera' ]

const priceList = products.map(product => product.price)
console.log(priceList); //[ 3200, 7000, 3000, 300, 9000 ]




//02.ForEach : amra array te kisu ekta korbo but amdr khono kisu return er proyojon nai.

products.forEach(product => console.log(product))

// { name: 'laptop', price: 3200, brand: 'lenovo', color: 'silver' }
// { name: 'phone', price: 7000, brand: 'iphone', color: 'golden' }
// { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' }
// { name: 'sungalss', price: 300, brand: 'ray', color: 'black' }
// { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }


products.forEach(product => console.log(product.color))
// silver
// golden
// yellow
// black
// gray

products.forEach(product => {

})



//Filter : amra ekta condition dibo, oita fullfil korle oita dibe.
//Ekta array return korbe.

const priceChart = products.filter(product => product.price <= 5000)
console.log(priceChart);
// [
//     { name: 'laptop', price: 3200, brand: 'lenovo', color: 'silver' },
//     { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
//     { name: 'sungalss', price: 300, brand: 'ray', color: 'black' }
//   ]



const specificName = products.filter(p => p.name.includes('n'));
// console.log(specificName);


//Find : similar to  filter, filter match kora shob dibe but find  match kora shob gula tekhe just first er ta dive.

const special = products.find(p => p.name.includes('n'));
console.log(special);