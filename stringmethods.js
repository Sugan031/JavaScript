//to find the length of the string .length

let string1 = "Pomegranate";
console.log(string1.length);

//to return a specfied index in a string .charAt()
console.log(string1.charAt(7)); //if pass a index out of box it returns empty string


//to return a code(number) of a character of specified index .charCodeAt()
console.log(string1.charCodeAt(0)); //if pass a index out of box it returns NaN

//to return a specified index of a string same like charAt but we can pass negative index .at()
console.log(string1.at(-2));    //if pass a index out of box it returns undefined d in es2022 in march 2022

//Property access
console.log(string1[7]);    //if pass a index out of box it returns undefined //Property acces on strings are read only

//Extraxting string parts
//to return a extracted part of string to a new string .slice()
console.log(string1.slice(4));//grante
console.log(string1.slice(4, 10));//granat
console.log(string1.slice(-10));//omegrante
console.log(string1.slice(-10, -2)); //omegrana

//substring() is similar to slice() but values less than 0 is considered as 0 in this
console.log(string1.substring(4));//grante
console.log(string1.substring(4, 10)); //granat
console.log(string1.substring(-10)); //Pomegranate
console.log(string1.substring(-10, -2)); // it returns empty string
console.log(string1.substring(4, -1)); //pome

//substr() is similar to slice() but second paramater mentions the length of the  extracted string
console.log(string1.substr(4)); //granate
console.log(string1.substr(4, 4));//gran
console.log(string1.substr(-10));//omegranate
console.log(string1.substr(-10, 7));//omegran

//to convert to uppercase
console.log(string1.toUpperCase());//POMEGRANATE
//to convert to lowercase
console.log(string1.toLowerCase());//pomegranate

//to concatenate it joins two or more strings
let string2 = "I";
let string3 = "like";

console.log(string2.concat(" ", string3, " ", string1));// I like Pomegranate

//trim(), removes the spaces front and back
let string4 = " Hello World! from the world! ";
console.log(string4.trim());

//trimstart() it removes the space from the start
console.log(string4.trimStart());//Hello World! 

//trimend() it removes the space from the end
console.log(string4.trimEnd());// Hello world!

//padstart() pads a string from the start
console.log(string2.padStart(4, "O"));//OOOI
console.log(string1.padEnd(string1.length + 2, "y"));
console.log(string1.padStart(string1.length + 3, "A"));

//padend() pads a string from the end
console.log(string2.padEnd(4, "o"));

//repeat() returns a string with number of copies of string
console.log(string1.repeat(3));
console.log((string3.concat(" ")).repeat(3));

//replace() method replaces the string of first occurence
console.log(string1.replace("e", "o"));
console.log(string4.replace(/world!/i, "Ulagam"));

//replaceAll() method replaces the string of all occurence
console.log(string1.replaceAll("e", "o"));
console.log(string4.replaceAll(/world!/ig, "Ulagam"));

//convert a string to array
let stringValues = string4.split(" ");
console.log(stringValues);
stringValues.forEach(element => {
    console.log(element)
});
