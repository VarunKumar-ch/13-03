"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
const Shape_1 = require("./Shape");
class Circle extends Shape_1.Shape {
    constructor(x, y, radius) {
        super(x, y);
        this.radius = radius;
    }
    get radiu() {
        return this.radius;
    }
    set radiu(radius) {
        this.radius = radius;
    }
    getInfo() {
        return (this.radius + " " + super.getInfo());
    }
    calculateArea() {
        return (Math.PI * Math.pow(this.radius, 2));
    }
}
exports.Circle = Circle;
