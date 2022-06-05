export class Circle{
    _color: string;
    _filled: boolean;
    _radius: number;
    constructor(color: string, filled: boolean, radius: number){
        this._color = color;
        this._filled = filled;
        this._radius = radius;
    }
    getArea():number{
        return this._radius * this._radius * Math.PI;
    }
    getPerimeter(): number{
        return 2 * this._radius * Math.PI;
    }
}