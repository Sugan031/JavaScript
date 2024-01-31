//object.assign()
//this method used to copy or assign one properties of one source  to  properties of other sources
//it returns target object
const object_1 = {
    a: 1,
    b: 2,
    c: 3
};
const object_3 = {
    g: 1,
    h: 2,
    i: 3
};

const object_2 = Object.assign({ c: 4, d: 5 }, object_1);
const object_4 = Object.assign({ g: 34, h: 25 }, object_3);
console.log(object_2.c, object_2.d);
console.log(object_4.g, object_4.h);

for (const key in object_2) {
    console.log(`${key}=> ${object_2[key]}`);
}
for (const key in object_4) {
    console.log(`${key}=> ${object_4[key]}`);
}

//object.create() methods creates new object with specified prototypes object
//and property


const people = {
    printIntroduction: function () {
        console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
};
const me = Object.create(people);
me.name = "Marry"; // "name" is a property set on "me", but not on "person"  
me.isHuman = true; // inherited properties can be overwritten  
me.printIntroduction();

employeeDetails = {
    firstName: "John",
    lastName: "Doe",
    age: 23,
    Salary: "$250k",
    Domain: "Development"
};

console.log(Object.keys(employeeDetails))
console.log(Object.values(employeeDetails));
console.log(Object.entries(employeeDetails));

//Object.seal() method make sure that we can modify objects values but not add or remove or change its property

// Object.seal(employeeDetails);
// employeeDetails["age"] = 24;
// console.log(employeeDetails.age);
// employeeDetails["Timings"] = "9-6";
// console.log(Object.entries(employeeDetails));
// console.log(Object.isSealed(employeeDetails));

//Object.freeze() does not allow any changes to the object

// Object.freeze(employeeDetails);
// employeeDetails["age"] = 24;
// console.log(employeeDetails.age);
// console.log(Object.isFrozen(employeeDetails));


// Object.preventExtensions(employeeDetails);
// employeeDetails["age"] = 24;
// console.log(employeeDetails.age);
// employeeDetails["Timings"] = "9-6";
// employeeDetails.surName= employeeDetails.firstName;
// delete employeeDetails.firstName;
console.log(Object.entries(employeeDetails));

//return true when the properties can be added
console.log(Object.isExtensible(employeeDetails));

