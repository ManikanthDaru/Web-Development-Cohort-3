let myName = "Manikanth Daru";
console.log(myName);
myName = "Bhavya Sri Daru";
console.log(myName);
let color = "Yellow";
let height = 173.736;
let likePizza = true;
console.log(color);
console.log(height);
console.log(likePizza);
let friend1 = "Harshith";
let friend2 = "Bharath";
let friend3 = "Manish";
console.log(friend2);
let friends = ["Harshith", "Bharath", "Manish"];
console.log(friends[1]);
function sum(a, b) {
    return a + b;
}
let ans = sum("5", "9");
function canVote(age) {
    return (age > 18); 
}
console.log(canVote(24));
console.log(canVote(18));
let num = 20;
if (num % 2 == 0) console.log("The number is even");
else console.log("The number is odd");
function asum(a) {
    let sum = 0;
    for (let i = 1; i <= a; i++) {
        sum += i;
    }
    return sum;
}
console.log(asum(20));
let student = {
    name: "Manikanth Daru",
    rollNo: 478
};
console.log(student.name);
console.log(student["rollNo"]);

