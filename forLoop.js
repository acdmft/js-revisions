// 01 - Somme des carrés
for (let i = 5; i <= 10; i++) {
    console.log(i ** 2);
}

// 02 - Comptons
let numOfMultOf7 = 0;
for (let i = 100; i <= 1000; i++) {
    if (i % 7 === 0) {
        numOfMultOf7 += 1;
    }
}
console.log(numOfMultOf7);

// 03 - Chanceux 
let result = 0;
for (let i = 0; i <= 19; i++) {
    let score = Math.floor(Math.random() * 6 + 1); 
    if ( score >= 5) {
        result += score;
    } 
}
console.log(result);

// des boites
var box1 = 12;
var box2 = 5;
for (var i = 12; i < 14; i++) {
    box1 = box2;
    console.log(box1 + box2);
    box2 = box1 + i;
}
console.log(box1);
console.log(box2);
console.log(i);

// 05 - Des setiob
var box1 = 12;
for (var i = 12; i !== 0; i = i - 3) {
    console.log(box1);
    box1 = box1 + i;
}
console.log(box1);
console.log(i);

// 06 - Encore des boites
var box1 = 0;
var box2 = 3;
for (var i = 0; i > -4; i--) {
    if (i % 2 === 0) {
        console.log(box1 + i);
        box2++;
    } else {
        console.log(box2 + i);
        box1--;
    }
}

console.log(box1);
console.log(box2);
console.log(i);