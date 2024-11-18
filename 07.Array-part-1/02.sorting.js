//sort:
//Its priority the ASCII value

let persons = ['riki', 'bakkar', 'abu', 'siddique']

// let sortedPersons = persons.sort()
// console.log(persons);

//[ 'abu', 'bakkar', 'riki', 'siddique' ]


//In number, its not work perfectly,
//its need some functionality for number sorting

let numbers = [44, 33, 2, 1, 6, 77, 7, 89, 1, 11]

// numbers.sort()
// console.log(numbers);
// [
//     1, 1, 11,  2, 33,
//    44, 6,  7, 77, 89
//  ]



/* 
Ascending ----> smaller to larger: [2, 3, 4, 6, 7, 8]
Descending --> larger to smaller:  [8, 7, 6, 4, 3, 2]
*/

let values = [4, 7, 2, 8, 3, 6];

//Ascending
let values_asc = [...values].sort(
    function (a, b) {
        return a - b;
    }
)
console.log(values_asc);
//[ 2, 3, 4, 6, 7, 8 ]


//Descending
let values_dsc = [...values].sort(
    function (a, b) {
        return b - a;
    }
)
console.log(values_dsc);
//[ 8, 7, 6, 4, 3, 2 ]


//20.5_4 Module Summary and Practice Tasks
