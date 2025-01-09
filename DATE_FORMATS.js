// const d = new Date("2015-03-25");
// console.log(d);

// const d1 = new Date("2015-03");
// console.log(d1);

// const d2 = new Date("2015-03-25");
// console.log(d2);


// const d3 = new Date("2015");
// console.log(d3);


// const d4 = new Date("2015-03-25T12:00:00Z");
// console.log(d4);

// const d5 = new Date("03-25-2015");
// console.log(d5);

// const d6 = new Date("Mar 25 2015");
// console.log(d6);


// const d7 = new Date("25 Mar 2015");
// console.log(d7);


// let m_sec =Date.parse("March 21,2012");
// console.log(m_sec);


// let m_sec2=Date.parse("March 21,2012");
// const d8 = new Date(m_sec2);
// console.log(d8);



// GET DATE METHOD
// ***************


// const d = new Date("2021-03-25");
// d.getFullYear();
// console.log(d);



// const d= new Date();
// d.getFullYear();
// console.log(d);

// RETURNS TODAY'S DATE




// const d= new Date();
// d.getMonth();
// console.log(d);


// const d1 = new Date("2021-03-25");
// d1.getMonth();
// console.log(d1);


// const months=["JAN","FEB","MARC","APR","MAY","JUNE","JULY","AUG","SEPT","OCT","NOV","DEC"];
//  const d = new Date("2021-03-25");
//  let month=  months[d.getMonth()];
//  console.log(month);

//  RETURNS THE 3RD MONTH(0,1,2)....

// const months=["JAN","FEB","MARC","APR","MAY","JUNE","JULY","AUG","SEPT","OCT","NOV","DEC"];
//  const d = new Date("2021-03-25");
//  let date=  months[d.getDate()];
//  console.log(date);



// const d = new Date("202-03-25");
// m_sec=d.getMilliseconds();
// console.log(m_sec);

// const d = new Date("202-03-25");
// Day=d.getDay();
// console.log(Day);

// const d = new Date();
// Day=d.getDay();
// console.log(Day);


// AND MANY MORE METHODS.....



// SET METHODS

// const d = new Date();
// d.setFullYear(2020);
// d.setMonth(11);
// d.setDate(25);
// console.log(d);


// combination of get and set

// const d= new Date();
// m=d.getMonth();
// console.log(m);
// d.setDate(d.getDate()+50);
// // d.getMonth();
// console.log(d);
// mn=d.getMonth();
// console.log(mn);


// const d = new Date();
// d.setMinutes(30);
// console.log(d);
// d.getSeconds(30);
// console.log(d);


let text="";
const today= new Date();
const someday=new Date();
 someday.setFullYear(2100,0,14);
 console.log(someday);


 if(someday>today)
 {
    text="today is before 14 jan 2100";
    console.log(text);
 }
 else{
    text="today is after jan 14 2100";
    console.log(text);
 }

 




