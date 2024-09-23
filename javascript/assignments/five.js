let users = [{
    name: "Manikanth",
    age: 20
}, {
    name: "Harshith",
    age: 18
}, {
    name: "Manish",
    age: 21
    }];
let res = users.filter(checkAge);
function checkAge(user) {
    return user.age > 18;
}
console.log(res);