// let cars=["hyundai","g wagon","SUV","honda"];
// let text="";
// for(let i=0;i<cars.length;i++)
// {
//     text+=cars[i]+"<br>";
// }
// console.log(text);

// const person={name:"john", lname:"doe", age:25}
// let text="";
// for(let x in person)
// {
//     text+=person[x]+" ";
// }
// console.log(text);

// const numbers=[2,3,4,5];
// let text="";
// for(let x in numbers)
// {
//     text+=numbers[x]+" ";
// }
// console.log(text);



// WHEN THE ORDER IS IMPORTANT use for each loop


// const numbers=[2,3,4,5];
// let text="";
// numbers.forEach(myFunction);

// function myFunction(value,index,array)  
// // order of parameters is default
// {
// text+=value;
// console.log(text);
// console.log(index);
// console.log(value);
// }



// const numbers=[2,3,4,5];
// let text="";
// numbers.forEach(myFunction);

// function myFunction(value)  
// // order of parameters is default
// {
// text+=value;
// console.log(text);
// // console.log(index);
// // console.log(value);
// }



// For OF LOOP
const cars=["hyundai","g wagon","SUV","honda"];
let text="";
for(let x of cars)
{
    text+=x+" ";
}
console.log(text);

let lang="JAVASCRIPT";
let text2="";
for(let x of lang)
{
    text2+=x+" ";   
}
console.log(text2);
