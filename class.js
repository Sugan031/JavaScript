class Employee {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    detail(){
        document.writeln(this.id + " " + this.name);
    }
}


let Employee_1 = new Employee(101, "Sanjeev");
let Employee_2 = new Employee(304, "AK");

Employee_1.detail();
Employee_2.detail();






