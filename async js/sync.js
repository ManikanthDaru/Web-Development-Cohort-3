// asynchronous -> not happening or done at the same time or speed
const a = require('fs'); // fs->external library file system

const contents1 = a.readFileSync("abc.txt", "utf-8");
console.log(contents1);
const contents2 = a.readFileSync("b.txt", "utf-8");
console.log(contents2);

function sum(a, b) {
    return (parseInt(a) + parseInt(b));
}

const ans = sum("20", "-9");
console.log(ans);

function asum(n) {
    return n * (n + 1) / 2;
}

console.log(asum(1000));