                                //  PRIMITIVE
  // 7 types : String , Number, Boolean, null, undefined, Symbol, BigInt(values bigger than integer)
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);
const bigNumber = 3456543576654356754n

 // REFERENCE (non-primitive) - they allocate reference in the memory
  // Array, Objects, Functions
  
  const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId); // null has object type, but myfunction returns function
console.log(typeof bigNumber); //undefined
// https://262.ecma-international.org/5.1/#sec-11.4.3