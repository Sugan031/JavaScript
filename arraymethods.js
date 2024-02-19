//to find the length of the array

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;

console.log(size);

//The JavaScript method toString() converts an array to a string of (comma separated) array values.

console.log(fruits.toString());

// The at() method returns an indexed element from an array.
//The at() method returns the same as [].

console.log(fruits.at(1));//banana
console.log(fruits[0]);//Orange
console.log(fruits.at(-1));//Mango

//The join() method also joins all array elements into a string.
//It behaves just like toString(), but in addition you can specify the separator
console.log(fruits.join("$"));//Banana$Orange$Apple$Mango

//pop() renmoves the last element
//push() add the value at the end
//shift() removes the first array element 
//unshift() adds the element at the start


//Changing the values in array
fruits[2] = "Guava";
console.log(fruits[2]);//Guava

//Using delete() leaves undefined holes in the array. use shift or pop instead
const fruits1 = ["Banana", "Orange", "Apple", "Mango", "Guava"];
delete fruits1[2];
console.log(fruits1[2]);//undefines 

//concat array method creates new array by merging existing arrays
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myPets = ["Mani", "Jackie", "Harry"]
const myChildren = myGirls.concat(myBoys, myPets);
console.log(myChildren);

console.log(myBoys.concat("Peter"));

//The copyWithin() method copies array elements to another position in an array:
console.log(fruits.copyWithin(2, 0));//'Banana', 'Orange', 'Banana', 'Orange'
console.log(fruits1.copyWithin(2, 0, 2));//'Banana', 'Orange', 'Banana', 'Orange', 'Guava'

//Flattening an array is the process of reducing the dimensionality of an array.

//Flattening is useful when you want to convert a multi-dimensional array into a one-dimensional array.

//The flat() method creates a new array with sub-array elements concatenated to a specified depth

const myArr = [[1, 2], [3, 4], [5, 6]];
const newArr = myArr.flat();
console.log(newArr);//1, 2, 3, 4, 5, 6

//Splicing and slicing of arrays

//The splice() method adds new items to an array.
const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
fruits3.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits3);//'Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango'

// The first parameter (2) defines the position where new elements should be added (spliced in).

// The second parameter (0) defines how many elements should be removed.

// The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.

//The slice() method slices out a piece of an array into a new array:

const citrus = fruits3.slice(2);
console.log(citrus);

//The difference between the new toSpliced() method and the old splice() method is that the new method creates a new array, 
//keeping the original array unchanged, while the old method altered the original array.

const months = ["Jan", "Feb", "Mar", "Apr"];
const spliced = months.toSpliced(0, 1);
console.log(spliced);


