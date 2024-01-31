//when used alone this refers to a global object
let x = this;
document.write(x);
//In a function, the global object is the default binding for this.
function myFunction() {
    return this;
  }

  document.write(myFunction());

//in this eg this is a person object
  const person = {
    firstName  : "John",
    lastName   : "Doe",
    id     : 5566,
    myFunction : function() {
      return this;
    }
  };

  document.write(myFunction());


  const person_1 = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };

  document.write(person_1.fullName());
//   The call() and apply() methods are predefined JavaScript methods.

//   They can both be used to call an object method with another object as argument.

//call() takes argument separetly
//apply() takes argument as an array

  const person_2 = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const person_3 = {
    firstName:"John",
    lastName: "Doe",
  }
  
  let y = person_2.fullName.call(person_3); 
  document.write(y);
  document.write(person_2.fullName.apply(person_3));

  const member = {
    firstName:"Hege",
    lastName: "Nilsen",
  }
  
  let fullName = person_1.fullName.bind(member);

document.write(fullName());

//Precdence of this goes like 1)bind() , 2)apply() and call(), 3)object method,4) Global scope
