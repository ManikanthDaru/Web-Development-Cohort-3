class Box {
    constructor(l, b, h, c) {
        this.length = l;
        this.breadth = b;
        this.height = h;
        this.color = c;
    }
    volume() {
        return this.length * this.breadth * this.height;
    }
    paint() {
        console.log(`The color of the box is ${this.color}`);
    }
    print() {
        console.log(this);
    }
}
const b1 = new Box(3, 4, 5,"red");
console.log(b1.volume());
b1.paint();
b1.print();

let obj = {
    l: 12,
    b: 2,
    h: 3
};
console.log(area(obj))
function area(obj) {
    return obj.l * obj.b * obj.h;
}