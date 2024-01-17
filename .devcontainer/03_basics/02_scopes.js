//var c = 300
let a = 300
if (true) {
    let a = 10 // also not let they are available
    const b = 20 // but not const
    var c = 1 // you will see var is available as globally 
    // console.log("INNER: ", a);

}

// Good interview question, is that global scope is different in console and in coding environment

// console.log(a);
// console.log(b);
 //console.log(c);
 
 function one(){                 
    const username = "hitesh"         // the bigger functions variables are accepted in smaller fun

    function two(){
        const website = "youtube"  // but the smaller function variables `cant give bigger function access
        console.log(username);
    }
    // console.log(website);

     two()

}
  // in short parents can give you icecream but we cant buy them icecream when we are small 
// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }

    // ++++++++++++++++++ interesting ++++++++++++++++++