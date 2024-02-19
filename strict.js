// "use strict" , defines that the js code must be executed in strict mode
//it is not a statement but a literal expression introduced in es version 5
//in strict mode you cannot execute without declaring the varibale
//it is declared by adding "use strict" in the beginning of the function  or a script
//Declared at the beginning of a script, it has global scope (all code in the script will execute in strict mode)

// "use strict";
// x=5; this cause an error because x is not declared
// console.log(x);

// myFunction();

// function myFunction(){
//     y = 10; this cause an error because y is not declared
//     console.log("ddd"+y);
// }

// x = 1.5; // this will not cause an error
// console.log(x);

// myFunction();
// function myFunction(){
//     "use strict";
//     y = 1.4; //this will cause an error
//     console.log(y)
// }

//it is more easier to wrtie secure javascript code


//Deleting a variable/function is not allowed
"use strict";
// var y = 4;
// console.log(y);
// delete y;//this causes an error

// //octol litrals are not allowed
// let oct = 010; //this will cause an error

// //Octal escape characters are not allowed:
// let oct_1 = "\010"//this will cause an error

//Writing to a read-only property is not allowed:

const obj = {};
Object.defineProperty(obj, "x", {value:0, writable:false});

obj.x = 3.14;            // This will cause an error

