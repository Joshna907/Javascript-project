// Immediately Invoked Function Expressions (IIFE)
//  it is used as a prevention for global scope pollution 

(function chai(){  // so the function is wrapped with parantheses 
    // named IIFE
    console.log(`DB CONNECTED`); // eg :- ()()
})(); // but apparently you need to have a semicolon at last when its only a function not a arrow fm

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh') 