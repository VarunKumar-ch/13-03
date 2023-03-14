import { Shape } from "./Shape";

export class Circle extends Shape{
    
    private radius: number;
    constructor(x:number,y:number,radius:number){
        super(x,y);
        this.radius = radius;

    }
   
    get radiu(): number {
       return this.radius;
   }
    set radiu(radius: number) {
       this.radius = radius;
   }
getInfo(): string {
    return (this.radius +" "+super.getInfo());
}

calculateArea(): number {
    return (Math.PI*Math.pow(this.radius,2));
}

}
