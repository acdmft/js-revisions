// 01 - Sum
let vide = [];
for (let i = 0; i <= 49; i++) {
    vide.push(Math.floor(Math.random() * 100));
}
let sumOfVide = 0;
for (let i = 0; i < vide.length; i++) {
    sumOfVide += vide[i];
}
console.log(sumOfVide);
// 02 - Max
let maximum = 0;
for (let i = 0; i < vide.length;i++) {
    maximum = maximum >= vide[i] ? maximum : vide[i];
}
console.log(maximum);
// console.log(vide);

// 03 -  Unique
let numbers = [];
for (let i = 0; i < 50; i++) {
    numbers.push(Math.floor(Math.random() * 150 + 50));
}

let n = 0;
while (n < numbers.length) {
    if (numbers[n] >= 75 && numbers[n] <= 100) {
        console.log(numbers[n]);
        break;
    }
    n++; 
}
// console.log(numbers);

// 04 - Nested Loop 
var words = ["hello", "goodbye", "yes", "no", "stop", "go go go"];
let res = 0;
for (let i = 0; i < words.length; i++) {
    let letters = words[i].split("");
    for (let n = 0; n < letters.length; n++) {
        if (letters[n] === "o") {
            res += 1;
        }
    }
}
console.log(res);