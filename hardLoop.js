// 01 - Sum
let vide = [];
for (let i = 0; i <= 49; i++) {
    vide.push(Math.floor(Math.random() * 100));
}
// 02 -Max
let maximum = 0;
for (let i = 0; i < vide.length;i++) {
    maximum = maximum >= vide[i] ? maximum : vide[i];
}
console.log(maximum);