//scope

//Variables declared inside a { } block cannot be accessed from outside the block that is called block scope
//let and const are block scope
{
    let x =6;
    var y =7;
}
// console.log(x);
console.log(y);

//function scope
// Variables defined inside a function are not accessible (visible) from outside the function.

// Variables declared with var, let and const are quite similar when declared inside a function.

function myFunction() {
    var carName_1 = "Volvo";   // Function Scope
  }
  function myFunction() {
    let carName_2 = "Nissan";   // Function Scope
  }
  function myFunction() {
    const carName_3 = "BMW";   // Function Scope
  }

//   console.log(carName_1);
//   console.log(carName_2);
//   console.log(carName_3);

//globalscope

var bikeName_1 = "pulsar";
let bikeName_2 = "R15";
const bikeName_3 = "Royal Enfield";

sampleFunction();

function sampleFunction(){
    console.log(bikeName_1);
    console.log(bikeName_2);
    console.log(bikeName_3);
}

//If you assign a value to a variable that has not been declared, it will automatically become a GLOBAL variable.
// console.log(carname);
function checkFunction(){
    carname = "Volvo";
}
console.log(carname);