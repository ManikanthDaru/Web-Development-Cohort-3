let users = [{
    name: "Manikanth",
    age: 20,
    gender: "M"
}, {
    name: "Harshitha",
    age: 18,
    gender:"F"
}, {
    name: "Manish",
    age: 21,
    gender: "M"
    }];
let res = users.filter(checkAge);
function checkAge(user) {
    return user.age > 18 && user.gender==="M";
}
console.log(res);