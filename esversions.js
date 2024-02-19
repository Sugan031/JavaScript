//bind() used to use properties of one object in ther other object introduced in es5
const details = {
    firstName: "John",
    lastName: "Doe",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

const PersonOne = {
    firstName: "Tony",
    lastName: "Stark"
}


let firstPerson = details.fullName.bind(PersonOne);
console.log(firstPerson);


//Spread Operator ...  expands an itertable into more elements introduced in es6
let sampleArray = [1, 2, 3, 4];
let sampleArrayOne = [5, 6, 7, 8];
// $sampleArrayTwo = [$sampleArray,$sampleArrayOne];
let sampleArrayTwo = [...sampleArray, ...sampleArrayOne];
// $sampleArrayThree = [$sampleArray,4,5];
let sampleArrayThree = [...sampleArray, 4, 5];
console.log(sampleArrayTwo);
console.log(sampleArrayThree);

//from es6 we can pass default value in the parameter

function myFunction(x, y = 10) {
    // y is 10 if not passed or undefined
    return x + y;
}
console.log(myFunction(5));

//... rest parameter allow us to use infinite parameter introduced in es6

function sum(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
}

let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
console.log(x);

//some of the math functions are introduced in es6
//Math.trunc(x) returns the integer part of x:
console.log(Math.trunc(4.6));
console.log(Math.trunc(4.9));
console.log(Math.trunc(4.1));

//Math.sign(x) returns if x is negative, null or positive:

console.log(Math.sign(-4.6));
console.log(Math.sign(4.6));
console.log(Math.sign(0));

//Math.cbrt(x) returns the cube root of x:

console.log(Math.cbrt(256));
console.log(Math.cbrt(27));