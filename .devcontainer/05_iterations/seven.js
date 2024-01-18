const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})     

const newNums = myNumers
                .map((num) => num * 10 ) // its chaining over here
                .map( (num) => num + 1) // where we have used two maps
                .filter( (num) => num >= 40) // filter will filter the conditn and will give the o/p

console.log(newNums);