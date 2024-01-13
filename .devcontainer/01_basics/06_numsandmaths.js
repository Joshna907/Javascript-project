const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);  // you can also check the length from string
//console.log(balance.toString())  //Now, its converted to string 
// console.log(balance.toFixed(1));

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(4)); //It will give precision to that much digits 

//const hundreds = 1000000 // as its tough to read how many zeroes are they!!!!
// console.log(hundreds.toLocaleString('en-IN')); // It will convert them into indian local string as in with commas and all

 // +++++++++++++ Maths +++++++++++++++++++++++++++++
console.log(Math);
console.log(Math.abs(-5)); // The negative value would be converted to +ve value but the +ve value would be +ve value
// console.log(Math.round(4.6)); // You will get the roundoff value
// console.log(Math.ceil(4.2));  // You will get the upper value as in its 4.2 which is greater than 4 so ceil is 5
// console.log(Math.floor(4.9)); // You will get the lower value as in its 4.9 which is greater than 4 so ceil is 4
// console.log(Math.min(4, 3, 6, 8)); // We will get the minimum value in this values
// console.log(Math.max(4, 3, 6, 8)); // We will get the max value in this values

console.log(Math.random());  // So, the range is basically between 0 to 1


//console.log(Math.floor(Math.random()*10) + 1);
console.log(Math.random()*10); // So, this will shift the digit
console.log((Math.random()*10) + 1);// and this will assure the digit greater than 1

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)  // so, just use this formula =