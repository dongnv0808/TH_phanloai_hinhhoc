"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
class Circle {
    constructor(color, filled, radius) {
        this._color = color;
        this._filled = filled;
        this._radius = radius;
    }
    getArea() {
        return this._radius * this._radius * Math.PI;
    }
    getPerimeter() {
        return 2 * this._radius * Math.PI;
    }
}
exports.Circle = Circle;
