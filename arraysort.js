//Alphabetic sort
//The sort() method sorts an array alphabetically

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits);

//The reverse() method reverses the elements in an array
console.log(fruits.reverse());

//ES2023 added the toSorted() method as a safe way to sort an array without altering the original array.

// The difference between toSorted() and sort() is that the first method creates a new array, keeping the original array unchanged, 
// while the last method alters the original array.

const months = ["Jan", "Feb", "Mar", "Apr"];
const sorted = months.toSorted();
console.log(months);
console.log(sorted);

// ES2023 added the toReversed() method as a safe way to reverse an array without altering the original array.

// The difference between toReversed() and reverse() is that the first method creates a new array, 
// keeping the original array unchanged, while the last method alters the original array.

const reversed = months.toReversed();
console.log(reversed);

//Numeric sort
const points = [40, 100, 1, 5, 25, 10];
console.log(points.sort());//we do like the sort() considers only the first character of a element
console.log(points.sort(function (a, b) { return a - b }));

//Math.min

console.log(Math.min.apply(points));//infinity
console.log(Math.min.apply(null, points));

//Math.max
console.log(Math.max.apply(null, points));
console.log(Math.max.apply(points));//-infinity






