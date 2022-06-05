export class Rectangle{
    color: string;
    filled: boolean;
    width: number;
    length: number;
    constructor(color: string, filled: boolean, width: number, length: number){
        this.color = color;
        this.filled = filled;
        this.width = width;
        this.length = length;
    }
    getArea(): number{
        return this.length * this.width;
    }
    getPerimeter(): number{
        return (this.length + this.width) * 2
    }
}