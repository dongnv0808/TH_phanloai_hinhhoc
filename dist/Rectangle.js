"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
class Rectangle {
    constructor(color, filled, width, length) {
        this.color = color;
        this.filled = filled;
        this.width = width;
        this.length = length;
    }
    getArea() {
        return this.length * this.width;
    }
    getPerimeter() {
        return (this.length + this.width) * 2;
    }
}
exports.Rectangle = Rectangle;
