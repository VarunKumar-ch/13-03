"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
const Shape_1 = require("./Shape");
class Rectangle extends Shape_1.Shape {
    constructor(x, y, width, length) {
        super(x, y);
        this.width = width;
        this.length = length;
    }
    get widt() {
        return this.width;
    }
    set widt(width) {
        this.width = width;
    }
    get lengt() {
        return this.length;
    }
    set lengt(length) {
        this.length = length;
    }
    getInfo() {
        return (this.width + " " + this.length + " " + super.getInfo());
    }
    calculateArea() {
        return (this.width * this.length);
    }
}
exports.Rectangle = Rectangle;
