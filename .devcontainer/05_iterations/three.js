// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {     // the iterator is num over here
    //console.log(num);          // the iterator num is printed over here
}

const greetings = "Hello world!"
for (const greet of greetings) {  // the greet is iterator over here
    //console.log(`Each char is ${greet}`)    // 
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


console.log(map);                  // map is unique and here we get the same array 

for (const [key, value] of map) {     
    console.log(key, ':-', value);    // and here we get in the form of key and value, by using for of loop
}

// const myObject = {   // its an object
//     game1: 'NFS',      
//     game2: 'Spiderman'
// }

// for (const [key, value] of myObject) {  // for of loop does not work for objects
//     console.log(key, ':-', value);
    
// }