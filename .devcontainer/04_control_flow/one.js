// if
const isUserloggedIn = true  // for running the if (condition) should be true so it will be executed  
const temperature = 41

// if ( temperature === 40 ){    // for only if statement we can use directly true 
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !== // we can also use comparing operators


// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);  // so this will give an error as let cannot be accessed out of the scope


// if (balance > 500) console.log("test"),console.log("test2");
// ***just dont do this its unprofessional


// const balance = 1000
// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {            // when you want to check more than two options
//     console.log("less than 750");
    
// } else if (balance < 900) {           // else if ladder
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {  // logical and in condition
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}

