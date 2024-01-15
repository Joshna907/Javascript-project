const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) // push operator

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

 //const allHeros = marvel_heros.concat(dc_heros)// It concatenates dc_heros to marvel_heros and it does not change the existing array.
 //console.log(allHeros);
//console.log(marvel_heros);

const all_new_heros = [...marvel_heros, ...dc_heros] // its spread operator which basically does the same work as push, concatenate
 console.log(all_new_heros);

 const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]] //  depth can be made to normal using flat 

const real_another_array = another_array.flat(Infinity) //just take it infinity so that it would handle any depth
console.log(real_another_array);

console.log(Array.isArray("Hitesh")) // It tells if the array is array or not
console.log(Array.from("Hitesh")) // It gives you array of the string Hitesh 

console.log(Array.from({name: "hitesh"}))// This will not give you output, as we need to tell the key before
                                          //  and it will give you square brackets (empty).
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // This will give you array also as Array.from
