function Person_1(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

const myFather_1 = new Person_1("John", "Doe", 50, "blue");

console.log(myFather_1.firstName+" "+myFather_1.lastName+" "+myFather_1.age+" "+myFather_1.eyeColor);

class Person {
    constructor(first, last, age, eye) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.eyeColor = eye;
    }
}

const myFather = new Person("John", "Doe", 50, "blue");
