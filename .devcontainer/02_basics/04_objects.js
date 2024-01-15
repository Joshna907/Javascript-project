// const tinderUser = new Object()  // Its a single ton object, empty curly braces.
const tinderUser = {} // same output like above but non-singelton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false  // we cant use const as i dont want to declare it again and again 

// console.log(tinderUser)           // you will get id, name , isLoggedIn as you accessed tinderUser

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
 }  

  console.log(regularUser.fullname.userfullname.firstname); // You can be as specific as you want

  // there exist optional chaining if we dont have fullname in the function for ex.

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }  // one way to add the obj1 and obj2 in obj3
// const obj3 = Object.assign({}, obj1, obj2, obj4) // The other way to assign other values in obj3
const obj3 = {...obj1, ...obj2} // other way using spreaad operator
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    { 
        id: 2,
        email: "j@gmail.com"
    },
    {
        id: 3,
        email: "sj@gmail.com"
    },
]

  users[1].email     // dont know what is this hitesh explained but not understood
console.log(tinderUser); // we just get the values in tinderUser

// console.log(Object.keys(tinderUser)); // We get all the keys in the tinderUser
// console.log(Object.values(tinderUser)); // We get all the values in the tinderUser
// console.log(Object.entries(tinderUser)); the keys : values are separated in an array and then kept in an array

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // It tells that isLoggedin is their in the tinderUser or not

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor // so , i cant write course.courseInstructor everytime so 

const {courseInstructor: instructor} = course //just by using this syntax we can write only instructor instead of courseInstructor

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",  //json format
//     "price": "free"
// }

[
    {},
    {},
    {}
]



