function Calculation(value1, value2) {
    console.log(value1 * value2);
}

Calculation(10, 20);
console.log(Calculation);
console.log(Calculation());

// function with return statement

function calci(value1, value2) {
    return value1 + value2;
}
console.log(calci);
console.log(calci());
console.log(calci(10, 20));

//function expression

let functionHolder = function (value1, value2) {
    return value1 / value2;
}

console.log(functionHolder);
console.log(functionHolder());
console.log(functionHolder(10, 2));

//nested function

function add(value1) {
    let addition = function (value2) {
        return value1 + value2;
    }
    return addition;
}

function controller() {
    console.log(`The added value is : ${add(45)(20)}`);
    add(45)(20);;
}
controller();


// function outerFunc(){
//     console.log("gdjgdd");
//     function innerFunc(){
//         console.log("ggggg");
//     }
//     return innerFunc
// }
// function mainFunc(){
//     console.log("jjjjj");
//     outerFunc()();
// }

