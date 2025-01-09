// MATH OBJECTS (ceil,floor,trunc,sign,pow,sqrt,abs,sin,cos,)

console.log(Math.ceil(-4.2));
console.log(Math.floor(-4.2));
console.log(Math.trunc(-4.2));
console.log(Math.sign(0));
console.log(Math.pow(8,2));
console.log(Math.sqrt(144));
console.log(Math.abs(-4.4));
console.log(Math.sin(90* 3.14/180));
console.log(Math.min(14,4,43));
console.log(Math.max(14,4,43));
console.log(Math.random());
console.log(Math.log(23));


let random= Math.floor(Math.random()*9);
// for 0 to 8 range  (do +1)
//  if we want to start from 1 do +1 at the end
console.log(random);



// min max normalisation (data science concept)

function getRndInteger(min,max) 
{
 return Math.floor(Math.random()*(max-min))+min;   
}
let res=getRndInteger(0,9);
console.log(res);



function getRndInteger2(min,max) 
{
 return Math.floor(Math.random()*(max-min+1))+min;   
}
let res2=getRndInteger(0,9);
console.log(res2);



// NUMBER METHODS


let num=Number("3.14");
console.log(num);

let num1=Number("Math.PI");
console.log(num1);

let num2=Number("");
console.log(num2);

let num3=Number("99 88");
console.log(num3);

let num4=Number("dd");
console.log(num4);

let y="john";
let x = +y;
console.log(x);




// STRING METHODS
let x1 =1101972;
x1.toString();
console.log(x1);


let d = new Date();
d.getTime();
console.log(Number(d));

console.log(String(Date()));