function greet(user) {
    console.log("Hi " + user.myName + " your age is " + user.age);
}

let user = {
    myName: "Manikanth Daru",
    age: 20
};

greet(user)