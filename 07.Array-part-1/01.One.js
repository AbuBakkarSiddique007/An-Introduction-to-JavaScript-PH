//Repo link: https://github.com/ProgrammingHero1/js-array-more.git
//Tas Link:  https://github.com/ProgrammingHero1/array-looping-tasks.git


//20.5_1 Array Traversal using for and while Loop
/**
 * LOOPING Technique
 * 1. for loop
 * 2. while loop
 * 3. do while --> ignore
 * 4. for of --> array loop korar jonno
 * 5. for in --> object loop korar jonno
 * 
*/

//Using for of loop:
let friends = ['Abu', 'Bakkar', 'Siddique', 'Riki', 'Ahmed']

for (let friend of friends) {
    // console.log(friend);

}

//Abu
// Bakkar
// Siddique
// Riki
// Ahmed


//Using for loop:
for (let i = 0; i < friends.length; i++) {
    // console.log(friends[i]);
}

// Abu
// Bakkar
// Siddique
// Riki
// Ahmed


//Reverse array: 
let re = ''
for (let i = 0; i < friends.length; i++) {
    re = friends[i] + re;
}

// console.log(re);
//AhmedRikiSiddiqueBakkarAbu


//Array reverse using reverse() method:

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// numbers.reverse()
// console.log(numbers);

// [
//     10, 9, 8, 7, 6,
//      5, 4, 3, 2, 1
//   ]



//20.5_2 Reversing an array with/without reverse method


let a = [1, 2, 3, 4, 5, 6]

//reverse():
// a.reverse()
// console.log(a);


//unshift in for of:
//unshift => Insert new element start of the array
// let empt_a = []
// for (const aa of a) {
// console.log(aa);
//     empt_a.unshift(aa)

// }
// console.log(empt_a);
//[ 6, 5, 4, 3, 2, 1 ]



//unshift in for loop:

// let empty_arr = []
// for (let i = 0; i < a.length; i++) {

//     let num = a[i]
//     empty_arr.unshift(num)

// }
// console.log(empty_arr);
//[ 6, 5, 4, 3, 2, 1 ]


//reverse side array:
let temp_arr = []
for (let i = a.length - 1; i >= 0; i--) {
    let num = a[i]
    // console.log(num);

    temp_arr.push(num)


}
// console.log(temp_arr);



let names = ['abu', 'bakkar', 'siddique', 'riki', 'ahmed']

let temp_array = []
// console.log(names);
for (let i = 0; i < names.length; i++) {
    temp_array.unshift(names[i])
}

console.log(temp_array);
//[ 'ahmed', 'riki', 'siddique', 'bakkar', 'abu' ]