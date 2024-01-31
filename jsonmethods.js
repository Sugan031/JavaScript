let text = '{"employees":[' +
'{"firstName":"John","lastName":"Doe" },' +
'{"firstName":"Anna","lastName":"Smith" },' +
'{"firstName":"Peter","lastName":"Jones" }]}';

const obj = JSON.parse(text);
console.log(obj);

let arraySample = '{"Students" :["Sanjeev","Sugan","Harish"]}';

const array = JSON.parse(arraySample);
console.log(array);


employeeDetails = {
    firstName: "John",
    lastName: "Doe",
    age: 23,
    Salary: "$250k",
    Domain: "Development"
};

let textline = JSON.stringify(employeeDetails);

let objSample = JSON.parse(textline);
console.log(objSample);