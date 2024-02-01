let text = "Visit Clarity!";
let n = text.search("Clarity");
console.log(n);
let m = text.search(/[C][a-z]+/);
console.log(m);

let result = text.replace(/[C][a-z]+/, "Chennai");
console.log(result);

console.log(/[C][a-z]+/.test("Clarity"));
console.log(/[C][a-z]+/.exec(text));