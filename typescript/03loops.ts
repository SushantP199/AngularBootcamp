for(let i = 0; i < 4; i++){
    console.log("Value is " + i)
}

let myArray = [10, 12, 15, 18, 19];

for(var val of myArray){
    console.log(val);
}

for (var index in myArray){
    console.log(myArray[index]);
}

// while (condition){
//     block of code

//     incre / decre
// }