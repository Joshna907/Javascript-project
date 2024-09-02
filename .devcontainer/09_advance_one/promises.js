const promiseOne = new Promise(function(resolve, reject){ // promise is an object 
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()
    }, 1000)
})

// tHERE are microstack queue and callback queue where microstack queue returns first no matter what
promiseOne.then(function(){ // then is an property of promise object used when resolve
    console.log("Promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

 promiseFour
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){ //catch is an property of promise object used when reject
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected")) // used at resolve and reject both 



const promiseFive = new Promise(function(resolve, reject){ // callback function 
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){ // async makes a function return a promise
//     try { // try actually test the code 
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json() // await is like jab tak ye complete nahi hoga aage nahi iske liye it should be used with async 
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);   
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error)) // catch gets the error


// promise.all
// ki jar mi parameters takhel te jar resolve jhaale tarach yaatla program madhe yeu shakto 