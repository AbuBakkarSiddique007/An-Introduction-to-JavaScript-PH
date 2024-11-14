//Repo link: https://github.com/ProgrammingHero1/js-string-object.git

//Object Task: https://github.com/ProgrammingHero1/js-object-tasks.git
//String Task: https://github.com/ProgrammingHero1/js-string-tasks.git



// console.log("Hello World!");

// const name = 'Abu Bakkar Siddique'
// const country = "Bangladesh"
// const division = `Chittagong`
// const thana = new String("Bahaddarhat")


// console.log(typeof name, name);
//string Abu Bakkar Siddique

// console.log(typeof country, country);
//string Bangladesh

// console.log(typeof division, division);
//string Chittagong

// console.log(typeof thana);
//object 

// console.log(thana);
//[String: 'Bahaddarhat']


// let arr = [1, 3, 4, 2, 6, 8, 9, 5, 6, 4]

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// 1
// 3
// 4
// 2
// 6
// 8
// 9
// 5
// 6
// 4


// for (const a of arr) {
//     console.log(a);
// }
// 1
// 3
// 4
// 2
// 6
// 8
// 9
// 5
// 6
// 4


// let numbers = [2, 3, 6, 77, 8, 1, 2, 94, 7]

// console.log(numbers.length); //9
// console.log(numbers[1]);     //3


// console.log(numbers);
// [
//     2, 3, 6, 77, 8,
//     1, 2, 94, 7
// ]
// numbers[0] = 1
// console.log(numbers);

// [
//     1, 3, 6, 77, 8,
//     1, 2, 94, 7
// ]
//So that means Array is mutable.
//Mutable : Change able.


// let mySelf = "AbuBakkar"

// console.log(mySelf.length);   //9
// console.log(mySelf[1]);       //b  

// console.log(mySelf);    //AbuBakkar
// mySelf[1] = "a"
// console.log(mySelf);    //AbuBakkar //No change
//So that means: String is immutable.
//Immutable :Not change able




// 20_2 String Comparison lowercase uppercase and trip

let institute = "International Islamic University"

// console.log(institute);
//International Islamic University

//toLowerCase()
// console.log(institute.toLowerCase());
//international islamic university

//toUpperCase()
// console.log(institute.toUpperCase());
//INTERNATIONAL ISLAMIC UNIVERSITY



let subject = "Programming"
let book = "programming"

// if (subject.toLowerCase() === book.toLowerCase()) {
//     console.log("Matched");
// }
// else {
//     console.log("Not match");
// }
//Matched

//trim => for remove space in  start or end point.
//trimStart
//trimEnd

let drink = "water"
let liquid = " water "

// if (drink === liquid) {
//     console.log("match");
// }
// else {
//     console.log("Not Match");
// }
//Not Match


// if (drink.trim() === liquid.trim()) {
//     console.log("match");
// }
// else {
//     console.log("Not Match");
// }
//match


//20_3 String Slice, Join, Concat and includes


//slice:
//slice(startIndex, endIndex)

// let nam = "Abu Bakkar Siddique"

// let first = nam.slice(4,10)
// console.log(first); //Bakkar
// console.log(typeof first); //string

//split: separate then represent as an array.
// console.log(nam.split()); //[ 'Abu Bakkar Siddique' ]

// console.log(typeof nam.split());    // object



// console.log(nam.split(''));
// [
//     'A', 'b', 'u', ' ', 'B',
//     'a', 'k', 'k', 'a', 'r',
//     ' ', 'S', 'i', 'd', 'd',
//     'i', 'q', 'u', 'e'
//   ]

// console.log(nam.split(' ')); //added a space in the quotation
//Je khane je khane space ase oi kahe  separate hoise.
// [ 'Abu', 'Bakkar', 'Siddique' ]

// console.log(nam.split('a'));
// [ 'Abu B', 'kk', 'r Siddique' ]


// let friendsStr = 'abu,bakkar, siddique, riki, ahmed'

// console.log(friendsStr);
//abu,bakkar, siddique, riki, ahmed

// let friends = friendsStr.split(',')

// console.log(friends);
// [ 'abu', 'bakkar', ' siddique', ' riki', ' ahmed' ]

//join('jeta diye separate korbo oita dibo')
// let realFriends = ['rohim', 'korim', 'jabbar', 'rahman', 'sakib']

// console.log(realFriends);
// [ 'rohim', 'korim', 'jabbar', 'rahman', 'sakib' ]

// console.log(realFriends.join());
//rohim,korim,jabbar,rahman,sakib

// console.log(realFriends.join(','));
// rohim,korim,jabbar,rahman,sakib

// console.log(realFriends.join('-'));
//rohim-korim-jabbar-rahman-sakib

// console.log(realFriends.join('|'));
// rohim|korim|jabbar|rahman|sakib



//concat:

// let firsName = 'Abu'
// let midName = 'Bakkar'
// let lastName = 'Siddique'

// let fullName = firsName + midName + lastName
// console.log(fullName);  //AbuBakkarSiddique


// fullName = firsName + ' ' + midName + ' ' + lastName
// console.log(fullName);  //Abu Bakkar Siddique

// fullName = firsName.concat(midName,lastName)
//Abu Bakkar Siddique


//includes:
// console.log(lastName.includes('d'));    //true
// console.log(lastName.includes('x'));    //false


//20_4 Reverse a String in Three different ways


//Reverse string:
// let name = "Abu Bakkar Siddique"

// let reverse = ""
// for (let letter of name) {
//     reverse = letter + reverse

    //1st iteration:
    //reverse = A = A
    //2nd iteration
    //reverse = b+A => bA
    //3rd iteration:
    //reverse = u+bA => ubA
// }
// console.log(reverse);


//Another Way:
// for (let i = 0; i < name.length; i++) {
    // console.log(name[i]);
    // reverse = name[i]+reverse
// }
// console.log(reverse);
//euqiddiS rakkaB ubA



//shortcut:
// let name = "Abu Bakkar Siddique"

// let reversed = name.split('').reverse().join('')
// console.log(reversed);
//euqiddiS rakkaB ubA

