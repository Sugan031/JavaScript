//For each
const numbers = [45, 4, 9, 16, 25];
numbers.forEach(element => {
    console.log(element + " ");
});
let sum = 0;
numbers.forEach(num => {
    sum += num;
});
console.log(sum);

//map
// let y = 1;
let array = [1, 2, 3, 4, 5, 6];

let square = x => Math.pow(x, 2);

square = array.map(square);

console.log(array);
console.log(square);


let prod = x => (x * 5);

prod = array.map(prod);

console.log(prod);

//flatmap

const newArr = array.flatMap((x) => x + 2);
console.log(newArr);
const newArr1 = array.map((x) => x * 2);
console.log(newArr1);

//filter

const over18 = numbers.filter(myFunction);

function myFunction(value) {
    return value > 18;
}
console.log(over18);

const fruits = ["apple", "Orange", "Banana", "Mango", "Orange"];

function searchArray(value, index, array) {
    return /^[A-Z][a-z]{5}$/.test(value);
}

const expected = fruits.filter(searchArray);
console.log(expected);


//The reduce() method runs a function on each array element to produce (reduce it to) a single value.
//works on left to right
let y = 0;
const singleValue = array.reduce((x) => y += x);
console.log(singleValue);

//The reduceRight() method runs a function on each array element to produce (reduce it to) a single value.
//works on right to left

let reducedValue = numbers.reduceRight((x) => y += x);
console.log(reducedValue);

//every() checks whether all the method passes the test

const allExpected = fruits.every(searchArray);
console.log(allExpected);

//The some() method checks if some array values pass a test.

let someExpected = fruits.some(searchArray);
console.log(someExpected);

//The Array.from() method returns an Array object from any object with a length property or any iterable object.

const charArray = Array.from("King Queen Joker");
console.log(charArray);

//The Array.keys() method returns an Array Iterator object with the keys of an array.

const keys = fruits.keys();
for (let x of keys) {
    console.log(x);
}

//entries() returns keys and value pair

const keyValues = fruits.entries();
for (let x of keyValues) {
    console.log(x);
}

//with() alters without modifiying the other elements

const months = ["Januar", "Februar", "Mar", "April"];
const myMonths = months.with(2, "March");
console.log(myMonths);


// spread operator ...

const daysWeekDay = ["Monday", "Tuesday", "Wednesday"];
const daysWeek = ["Thursday", "Friday"];
const daysWeekEnd = ["Saturday", "Sunday"];

const weeks = [...daysWeekDay, ...daysWeek, ...daysWeekEnd];
console.log(weeks);


