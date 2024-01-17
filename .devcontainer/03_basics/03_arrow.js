const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`); // this function is used in, in the context it cant be dealt with out of context
        console.log(this); // Here I get the all methods
    }

}

// user.welcomeMessage()
// user.username = "sam"  // Now, here I have changed the username now i will get output as sam
// user.welcomeMessage() // when I call this

// console.log(this);  // Now, when I call this function over here I get empty brackets, but at the console I get window 
                        //  due to the reason of as in older time javascript was used in console 

// function chai(){
//     let username = "hitesh"  
//     console.log(this.username);// it will give you undefined as this does not work in fn
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username); // here also we will get undefined
// }

const chai =  () => { // this can be used in arrow function where the output is empty curly braces
    let username = "hitesh"
    console.log(this);
}


chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2                //this is an explicit return type where we use curly braces and return 
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )  // Its an implicit return type where we dont need to write return and use parantheses

const addTwo = (num1, num2) => ({username: "hitesh"}) // here it is an object so we need to have curlybraces in arrow function  of objects


console.log(addTwo(3, 4))
