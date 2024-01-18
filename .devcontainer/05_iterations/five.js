const coding = ["js", "ruby", "java", "python", "cpp"]  // this is an array

// coding.forEach( function (val){  // using . operator we can get methods where this fn is callback fun so we wont give a name

//     console.log(val);
// } )

// coding.forEach( (item) => { // this is also a callback fn so we wont write name
//     console.log(item);
// } )

// function printMe(item){  // we just write a normal functn
//     console.log(item);
// }

// coding.forEach(printMe) //and pass it to the forEach functn

// coding.forEach( (item, index, arr)=> {  
//     console.log(item, index, arr);
// } )

const myCoding = [  
    {
        languageName: "javascript",  // these are  objects
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName); // This is where we access the objects with the parameter called as item over here
    
} )