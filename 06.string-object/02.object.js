//20_5 Introduction to Objects properties and values


//Object:

let bottle = {
    brand: "china",
    price: 20,
    color: 'white',
    isClean: true
}

const subject = {
    name: "Chemistry",
    teacher: 'Forid sir',
    exams: {
        date: "32 feb",
        time: "21:21"
    }
}
// console.log(bottle.color);



//20_6 What is Object Animated video
//20_7 Multiple ways to get & set object properties slide

let person = {
    name: "Riki Ahmed",
    age: 25,
    profession: "Developer",
    salary: 20000,
    isMarried: false,

    'fab place': ["ehhh iiuc", 'coxs bazar', 'kua kata']

    //space thakle dot notation  diye access kora jai nh.
    //So e khetre bracket [''] notation use kora lagbe.
}

// console.log(person);

// {
//     name: 'Riki Ahmed',
//     age: 25,
//     profession: 'Developer',
//     salary: 20000,
//     isMarried: false
//   }

//dot notation
let income = person.salary
// console.log(income);
//20000

//bracket notation
console.log(person['age']); //25

let maritalStatus = person['isMarried']
console.log(maritalStatus); //false

let favoritePlaces = person["fab place"]
console.log(favoritePlaces);    //[ 'ehhh iiuc', 'coxs bazar', 'kua kata' ]



person.salary = 30000
person['age'] = 26

console.log(person);

// {
//     name: 'Riki Ahmed',
//     age: 26,
//     profession: 'Developer',
//     salary: 30000,
//     isMarried: false,
//     'fab place': [ 'ehhh iiuc', 'coxs bazar', 'kua kata' ]
//   }


let profName = 'profession'
console.log(person[profName]);  //Developer

person[profName] = 'devops'
console.log(person['profession']);  //devops
