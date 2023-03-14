"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Circle_1 = require("./Circle");
const Rectangle_1 = require("./Rectangle");
//let myShape = new Shape(1,2);
//console.log(myShape.getInfo());
let myCircle = new Circle_1.Circle(15, 20, 25);
console.log(myCircle.getInfo());
let myRectangle = new Rectangle_1.Rectangle(3, 4, 7, 14);
console.log(myRectangle.getInfo());
console.log(myCircle.radiu);
let n = [];
//n.push(myShape);
n.push(myCircle);
n.push(myRectangle);
for (let i of n) {
    console.log(i.getInfo());
}
console.log("Area");
for (let i of n) {
    console.log(i.calculateArea());
}
