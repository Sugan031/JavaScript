var string = "apple"; //using double quotes
var string2 = 'banana'; //using single quotes
var string3 = 'this is my "page"';
var string4 = `I like ${string}`; // using backticks or template string
console.log(string);
console.log(string2);
console.log(string3);
console.log(string4);

console.log(typeof string);


//Number datatype

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

let number1 = 340;
let number2 = 500;

let float1 = 0.3;
let float2 = 0.2;

// console.log(`Float value is ${float1* float2}`); // float value when use in arithmetic function the value will not be accurate
console.log(`Float value is ${float1 + float2}`);
console.log(number1);
console.log(number2);
console.log(number1+number2);

let number3 = 9007199254740991;
console.log(number3);
console.log(typeof number3);

let number4 =67n;
console.log(number4);
console.log(typeof number4);

let y = 123e-5;
console.log(y);

let x = BigInt("123456789012345678901234567890");
console.log(x);


//Arithmetic operations with string and number
console.log("*********************************************");

console.log("10"+"10");//1010
console.log("10"+10);//1010
console.log(10+"10");//1010
console.log("10"-2);//8
console.log(10-"2");//8
console.log("10"-"2");//8
console.log("10"*"2");//20
console.log("10"*2);//20
console.log(10*"2");//20
console.log("10"/"2");//5
console.log("10"/2);//5
console.log(10/"2");//5

console.log("10"/"apple");//NaN
console.log("10"*"apple");//NaN
console.log("10"-"apple");//NaN

console.log(45-NaN);//NaN



console.log("*********************************************");
// boolean datatype

let bool1 = 5;
let bool2 = 5;
let bool3 =6;
let name1;

console.log((bool1==bool2));//false
console.log((bool2==bool3));//false
console.log(Boolean(name1)); //false

console.log(Boolean(1)); //true
console.log(Boolean(-1)); //true
console.log(Boolean(0)); //false
console.log(Boolean(NaN)); //false
console.log(Boolean("a")); //trur
console.log(Boolean("")); //false
console.log(Boolean(undefined));//false

//undefined
console.log(name1);//undefined
// let myname = ""; // type of string
let myname = undefined;
console.log(myname);
console.log(typeof myname);

//null

let value = null;
console.log(value);
console.log(typeof value);

//object
const franchise={
    teamName: "CSK", 
    teamWorth: "75Cr", 
    CaptainName: "Dhoni",
    playersCount:25 
};

console.log(franchise.CaptainName);
console.log(franchise["teamName"]);

for (let key in franchise) {
    console.log(franchise[key]);
}

// for (const x of franchise) {
//     console.log(franchise[x]);
// } not iterable


//symbol()

const mySymbol = Symbol(100);
console.log(mySymbol);