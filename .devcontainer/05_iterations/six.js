 const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item) => {          // we are trying to store the items in values but it will rather give undefined or nothing
//     console.log(item);                          
//     return item               // even if you write console.log(values) it wont give you the output
// } )

//console.log(values); // so it will be undefined

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]  //array

// const newNums = myNums.filter( (num) => {  // its a filter 
//     return num > 4
// } )

//********* OR */  // YOU CAN RATHER USE FILTER OR FOREACH WILL GIVE YOU THE SAME OUTPUT

// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')  // its a callback function and arrow function with filteras a method

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History" // here we have checked two conditions using logical and
})
  console.log(userBooks); 