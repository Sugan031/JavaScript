//The indexOf() method searches an array for an element value and returns its position.

const fruits = ["apple", "Orange", "Banana", "Mango", "Orange"];
console.log(fruits.indexOf("Orange"));//1
console.log(fruits.indexOf("Orange", 2));//4
console.log(fruits.indexOf("Orange", -2));//4

//Array.lastIndexOf() is the same as Array.indexOf(), but returns the position of the last occurrence of the specified element.

console.log(fruits.lastIndexOf("Orange"));//4
console.log(fruits.lastIndexOf("Orange", -2));//1

//ECMAScript 2016 introduced Array.includes() to arrays. This allows us to check if an element is present in an array (including NaN, unlike indexOf).
//it returns boolean

console.log(fruits.includes("Banana"));


//The find() method returns the value of the first array element that passes a test function.

const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);

function myFunction(value, index, array) {
    return value > 18;
}
console.log(first);

function searchArray(value, index, array) {
    return /^[A-Z][a-z]{5}$/.test(value);
}

let findedFruit = fruits.find(searchArray);
console.log(findedFruit);//Orange
//The findIndex() method returns the index of the first array element that passes a test function.
console.log(fruits.findIndex(searchArray));//1

//ES2023 added the findLast() method that will start from the end of an array and return the value of the first element that satisfies a condition.
const fruits1 = ["apple", "Orange", "Banana", "Mango", "Guava", "Kiwi"];
console.log(fruits1.findLast(searchArray));//Banana

//The findLastIndex() method finds the index of the last element that satisfies a condition.
console.log(fruits1.findLastIndex(searchArray));//2
