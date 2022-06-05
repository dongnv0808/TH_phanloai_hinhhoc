import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { Shape } from "./Shape";
import { Square } from "./Square";

let shape = new Shape("Red", false);
console.log(shape);

let circle = new Circle("Yellow", false, 10);
console.log(circle);

let rectange = new Rectangle("Blue", false, 10, 20);
console.log(rectange);

let square = new Square("Violet", false, 5.2);
console.log(square);