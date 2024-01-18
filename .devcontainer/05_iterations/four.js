const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}
for (const key in myObject) {   // as for of loop doesnt work for object so we will use for in loop
    //console.log(`${myObject[key]} is used as ${key}`);  // the ${key} basically will give you the key and the myobject[key] will give you value 

}
// so you might be thinking that does for in loop works for array then lets have a look

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key]);
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

 for (const key in map) {   // when we use for of we get the array of the same but not in for in 
     console.log(key);
 }