//for of => array

//for in => Object

const mobile = {
    brand: 'Samsung',
    price: 25000,
    color: 'gray',
    camera: '45px',
    isNew: true
}

// console.log(mobile.brand);

for (let prop in mobile) {

    // console.log(prop);
    // brand
    // price
    // color
    // camera
    //isNew

    // console.log(mobile[prop]);

    // Samsung
    // 25000
    // gray
    // 45px
    // true
}

let person = {
    name: 'Abu Bakkar Siddique',
    age: 24,
    isLogged: false,
    address: 'CTG'
}

let keys = Object.keys(person);
// console.log(keys);
//[ 'name', 'age', 'isLogged', 'address' ]


for (let key of keys) {
    // console.log(key);
    // name
    // age
    // isLogged
    // address

    console.log(person[key]);
    // Abu Bakkar Siddique
    // 24
    // false
    // CTG


}