x =5;
var x;
console.log(x);

// y =6;
// let y; //let does not support hoisting // Produces REFERENCE ERROR

// z = 7;
// const z; //const does not support hoisting // SYNTAX ERROR
// console.log(z);

myFunction(); // this can be hoisted

function myFunction(){
    console.log("Hello world!");
}
// funcHolder(); //this cannot be hoisted because when the function expression is called it considers  the function as variable 
// var funcHolder = function(){
//     console.log("Hello PHP!");
// }
