// switch (key) {           // syntax
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break; // if you dont write break then it will give you continue whole output except default
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}