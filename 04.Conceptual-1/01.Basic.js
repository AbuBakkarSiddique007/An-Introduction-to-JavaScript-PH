// console.log(5);
// console.log("Hello World!");
// console.log(3.2323);
// console.log(1+1);



// var name = "Abu Bakkar Siddique";
// name = 121212   //Reassign
// console.log(name);  //121212

// name = "Riki Ahmed"
// console.log(name);  //Riki Ahmed



//Data Types: number(integer, float), string, boolean(true, false) , undefined, null, NaN


//typeof:
//number:
// var a = 1212;
// console.log(typeof a);  //number

// var a = 11.11
// console.log(typeof a);  //number


//string:
// var a = "1212";
// console.log(typeof a);  //string

// var a = "Abu Bakkar Siddique"
// console.log(typeof a);  //string


//boolean:
// var a = true;
// console.log(typeof a);  //boolean

// var a = false
// console.log(typeof a);  //boolean


//undefined:
// var b;
// console.log(typeof b);  //undefined


//truthy , falsy:

//truthy values => true, "abu", number(1 to ...)
//falsy values  => false, empty string, "", 0

//To check the value is truthy or falsy:

// var x = 12
// console.log(!!x);   //true

// x = 0;
// console.log(!!x);   //false

// x = -0
// console.log(!!x);    //false

// var y = ""
// console.log(!!y); //false

// y = " "
// console.log(!!y); //true

// var y = " " is a string with one space character. Since it’s not an empty string (""), it’s treated as truthy.



//Variable Naming Convention:
//Possible Way:

// var abu;
// var abu_bakkar_siddique;    //Snake Case
// var abuBakkarSiddique;      // Camel Case
// var AbuBakkarSiddique;      //Pascal Case
// var abu1;


//Not Possible :
// var 99;
// var abu-1;
// var abu-bakkar-siddique;
// var @riki;
// can not use reserve keyword like var, let, true, false, class.


// var abu = "abu"
// var AbU = "Abu Bakkar Siddique"

// console.log(abu);       //abu
// console.log(AbU);       //Abu Bakkar Siddique

