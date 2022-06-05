"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Circle_1 = require("./Circle");
const Rectangle_1 = require("./Rectangle");
const Shape_1 = require("./Shape");
const Square_1 = require("./Square");
let shape = new Shape_1.Shape("Red", false);
console.log(shape);
let circle = new Circle_1.Circle("Yellow", false, 10);
console.log(circle);
let rectange = new Rectangle_1.Rectangle("Blue", false, 10, 20);
console.log(rectange);
let square = new Square_1.Square("Violet", false, 5.2);
console.log(square);
