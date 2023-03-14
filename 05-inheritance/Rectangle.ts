import { Shape } from "./Shape";

export class Rectangle extends Shape{
    private width: number;
    private length:number;


    constructor(x:number,y:number,width:number,length:number){
        super(x,y);
        this.width=width;
        this.length=length;

    }
    public get widt(): number {
        return this.width;
    }
    public set widt(width: number) {
        this.width = width;
    }
    public get lengt(): number {
        return this.length;
    }
    public set lengt(length: number) {
        this.length= length;
    }

    getInfo(): string {
        return (this.width+" "+this.length+" "+super.getInfo());

    }
    calculateArea(): number {
        return (this.width*this.length);
    }
}