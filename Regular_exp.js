// Search Method
// let text="Visit ABESEC!";
// let n=text.search("ABESEC");
// console.log(n);


let text="Visit abesec!";
let n=text.replace(/ABESEC/i,"HOME");
console.log(n);


const pattern=/e/;
console.log(pattern.test("the best things in life are free!"));

console.log(/e/.exec("the best things in life are free!"));
