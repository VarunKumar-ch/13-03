"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shape = void 0;
class Shape {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    get X() {
        return (this.x);
    }
    set X(x) {
        this.x = x;
    }
    get Y() {
        return (this.y);
    }
    set Y(y) {
        this.y = y;
    }
    getInfo() {
        return (this.x + " " + this.y);
    }
}
exports.Shape = Shape;
