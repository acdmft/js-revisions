// 01 - Comptons
/*
let n = 50;
while (n <= 200) {
    if (n % 2 === 0) {
        console.log(n);
    } 
    n++;
}

// 02 - Try again
let dice = null;
let count = 0;

while (dice < 6) {
    let score = Math.floor(Math.random() * 6 + 1); 
    dice = score;
    count ++;
}
console.log(count); */

// 03 - Course
let ussainBolt = 0,
    tysonGay = 0;
let lessThan100 = ussainBolt < 100 || tysonGay < 100;
while (lessThan100) {
    let firstRandom = Math.floor(Math.random() * 10 + 1),
        secondRandom = Math.floor(Math.random() * 10 + 1);
    ussainBolt += firstRandom;
    tysonGay += secondRandom;
    lessThan100 = ussainBolt < 100 || tysonGay < 100;
    console.log(firstRandom);
    console.log(secondRandom);
}
// if (ussainBolt > tysonGay) {
//     console.log("Ussain Bolt won! Result: ", ussainBolt);
// } else if (tysonGay > ussainBolt) {
//     console.log("Tyson Gay won! Result: ", tysonGay);
// } else {
//     console.log('Equal');
// }
