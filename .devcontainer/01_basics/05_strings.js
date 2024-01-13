const name = "joshna"
const repoCount = 50

// console.log(name + repoCount + " Value");   // this is not suggested (concatenation)

console.log(`Hello my name is ${name}`); //use backticks instead of concatenation

const game = new String('joshhh')
 console.log(game[0]);
 console.log(game.__proto__); //prototype


 //console.log(game.length);
 //console.log(game.toUpperCase());
 console.log(game.charAt(2)); //gives you character at the position
 console.log(game.indexOf('s')); //gives you index at that position

 const newString = game.substring(-6, 4)  //substring doesnt obey negative values. (means it will start from last)
 console.log(newString);           // It just gives you substring between the intervals

 const another = game.slice(-3, 5)  // It accepts negative values means it will start from negative values
 console.log(another);

                         // Now, suppose the customer gives spaces while typing mistakenly so to overcome that trim can be used

 const newStringone = "  shraddha  "
 console.log(newStringone);
 console.log(newStringone.trim());  
 
 const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('https', 'shit'))

console.log(url.includes('shit')); //shit is not included in url, It basically tells does the url includes this or not

// If you want more of this functions go to mdn web docs