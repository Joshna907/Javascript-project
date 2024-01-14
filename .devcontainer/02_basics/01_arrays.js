   //Arrays are zero indexed , they can be written in mixed data type, shallow copies and deep copies.
const myArr = [0, 1, 2, 3, 4, 5]  //one way to declare arrays. 
const myHeroes = ["aastha", "pagli"];
 
const myArr2 = new Array(1, 2, 3, 4) // The other way to declare array use parantheses, new keyword 
//console.log(myHeroes);
console.log(myArr2); //The array can be accesed using non-negative integer buy not with string "zero"

//                           Array methods

//myArr.push(4)  // It adds 4 in the array in last
//console.log(myArr);

// myArr.pop()  //it just pops an element from the array

// myArr.unshift(9) //it adds the element from the beginning 9
// myArr.shift() // It just removes the element from the beginning

// console.log(myArr.includes(9)); // It will tell if array includes 9 or not 
// console.log(myArr.indexOf(3)); // It will tell index of element 3

// const newArr = myArr.join()  // It joins the element to give output in form of string

// console.log(myArr);  
// console.log( newArr);  

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1); // the slice does not include range
console.log("B ", myArr);  // but the main reason is that slice does not change the main array


const myn2 = myArr.splice(1, 3) 
console.log("C ", myArr);   // the main reason is that splice changes the main array
console.log(myn2);       // the splice does include range


