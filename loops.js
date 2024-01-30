let number = 2;
for (let i = 0; i <= 10; i++) {
  console.log(number * i);
}

const person = { fname: "John", lname: "Doe", age: 25 };

let text = "";
for (let x in person) {
  text += person[x];
}
console.log(text);

const numbers = [45, 4, 9, 16, 25];

let txt = "";
for (let x in numbers) {
  txt += numbers[x];
}
console.log(txt);

const numbers1 = [45, 4, 9, 16, 25];
let value = 0;
for (let i = 0; i < numbers1.length; i++) {
  value = + numbers1[i];
}
console.log(value);

const cars = ["BMW", "Volvo", "Mini"];

let textLine = "";
for (let x of cars) {
  textLine += x;
}
console.log(textLine);

let language = "JavaScript";

let textCheck = "";
for (let x of language) {
  textCheck += x;
}

console.log(textCheck);

let j = 1;
while (j < 10) {
  console.log("The number is " + j);
  j++;
}

do {
  console.log("The number is " + j);
  j--;
}
while (j > 0);

