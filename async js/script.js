// asynchronous -> not happening or done at the same time or speed
const a = require('fs'); // fs->external library file system

const contents = a.readFileSync("a.txt", "utf-8");
console.log(contents);

function sum(a, b) {
    return (parseInt(a) + parseInt(b));
}

const ans = sum("20", "-9");
console.log(ans);

function asum(n) {
    return n * (n + 1) / 2;
}

console.log(asum(1000));