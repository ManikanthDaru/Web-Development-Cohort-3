function greet(user) {
    if (user.gender === "male") {
        console.log("Hi Mr " + user.myName + " your age is " + user.age);
    }
    else {
        console.log("Hi Mrs " + user.myName + " your age is " + user.age);
    }
}

let user = {
    myName: "Manikanth Daru",
    age: 20,
    gender: "male"
};

greet(user)