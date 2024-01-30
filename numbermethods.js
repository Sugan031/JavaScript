// tostring() returns a number as a string

let number1 = 1089;
console.log(number1 + 4);
console.log(number1.toString() + 4);
let str = number1.toString() + 4;
console.log(typeof str);

//toExponential() returns a string, with a number rounded and written using exponential notation.

let number2 = 8769;
console.log(number2.toExponential());
console.log(number2.toExponential(2));
console.log(number2.toExponential(9));
console.log(number2.toExponential(13));
console.log(number2.toExponential(7));

//toFixed() returns a string, with the number written with a specified number of decimals:

let number3 = 6.49;
console.log(number3.toFixed());
console.log(number3.toFixed(2));
console.log(number3.toFixed(4));
console.log(number3.toFixed(6));

//toPrecision() returns a string, with a number written with a specified length:

let number4 = 9.66;
console.log(number4.toPrecision(2));
console.log(number4.toPrecision(4));
console.log(number4.toPrecision(6));

//valueOf() returns a number as a number.
let x = 123;
console.log(x.valueOf());

//The Number() method can be used to convert JavaScript variables to numbers: like type cohersion

console.log(Number(true));//1
console.log(Number(false));//0
console.log(Number("10"));//10
console.log(Number("10 "));//10
console.log(Number(" 10 "));//10
console.log(Number("10.33"));//10.33
console.log(Number("10, 33"));//NaN
console.log(Number("10 33"));//NaN
console.log(Number("John"));//NaN
console.log(Number("10", "55"));//10

//parseInt() converts string to number
console.log(parseInt("10"));//10
console.log(parseInt("-10"));//10
console.log(parseInt("10.33"));//10
console.log(parseInt("-10.33"));//10
console.log(parseInt("10 20 30"));//10
console.log(parseInt("10 years"));//10
console.log(parseInt("10y"));//10
console.log(parseInt("years10"));//NaN

//parseFloat() converts string to float
console.log(parseFloat("10"));//10
console.log(parseFloat("-10"));//-10
console.log(parseFloat("10.33"));//10.33
console.log(parseFloat("-10.33"));//-10.33
console.log(parseFloat("10 20"));//10
console.log(parseFloat("10.3yy"));//10.3
console.log(parseFloat("yyy10"));//NaN

//isInteger checks it is integer or not
console.log(Number.isInteger(10));//true
console.log(Number.isInteger(10.5));//false
console.log(Number.isInteger(1098764323459887766655555443));//true
console.log(Number.isInteger("10"));//false

//isSafeInteger checks it is safe integer or not A safe integer is an integer that can be exactly represented as a double precision number.
console.log(Number.isSafeInteger(10));//true
console.log(Number.isSafeInteger(10.5));//false
console.log(Number.isSafeInteger(107546790009887655432345));//false
console.log(Number.isSafeInteger("10"));//false

//isNaN
console.log(Number.isNaN(10));//false
console.log(Number.isNaN(NaN));//true




