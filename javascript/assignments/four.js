function even(age) {
    return age % 2 == 0;
}

let arr1 = [10, 11, 12, 13, 14, 15];
let arr2 = arr1.filter(even);
console.log(arr2);