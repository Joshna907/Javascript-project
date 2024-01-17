function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

//sayMyName()  // I call the function over here

//  function addTwoNumbers(number1, number2){ //number1, number2 are parameters 
//      console.log(number1 + number2);  // This will also print other than numbers 
//  }

// addTwoNumbers(3, "a"); // The output is 3a over here due to string

function addTwoNumbers(number1, number2){

    // let result = number1 + number2 //  one way - we have stored this in result variable
    // return result // and returned or else just return through number1 + number2
   // console.log(number1 + number2); // Its printing 8 so for that return we will store this whole thing in a variable and return that variable
    return number1 + number2 ; 
}

//const result = addTwoNumbers(3, 5)
//console.log(result); // Its showing undefined as it should return from the function 
console.log(addTwoNumbers(3,5));

//lets go with some random examples

function loginUsermessage(username){
    return `${username} Hey !!!`
}
// result1 = loginUsermessage("Hiteshh") // we dont need to store over this in variable which is strange!!
// console.log(result1);
// just use the below syntax
console.log(loginUsermessage("hitesh"));

function loginUserMessage(username = "sam"){
    if(username == undefined){                   // can also be writtened as !username defaultly the empty string is considered as false
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

 console.log(loginUserMessage("hitesh")) 
// console.log(loginUserMessage()) // empty calling without arguments gives us undefined

function calculateCartPrice(val1, val2, ...num1){   // so over here we are using the rest operator or spread operator which allows you to give as many arguments as you want
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))  // due to rest operator it gives you the whole output asl like array but over here the rest operator is for num1 so by returning that we will get 500, 2000 over here as val1, val2 has no dot operator

  //Object
const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){  //anyobject is given as a parameter so we can give any number of objects
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",  // we can also directly put in the handleObject
    price: 399
})

const myNewArray = [200, 400, 100, 600] //declare array

function returnSecondValue(getArray){
    return getArray[1]                   // getting the first index value in the array
}

// console.log(returnSecondValue(myNewArray));  // then you are ready to access the array
console.log(returnSecondValue([200, 400, 500, 1000]));  // you can also do this without declaring the array