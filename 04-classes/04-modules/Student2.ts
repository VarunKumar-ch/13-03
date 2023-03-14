export class Student2{

    // private firstName:string;

    // private lastName:string;

    // constructor(firstName:string,lastName:string){
    //     this.firstName=firstName;
    //     this.lastName=lastName;
    // }
    constructor(private firstName:string,private lastName:string){

    }

   public get firstName1():string{
        return this.firstName;
    }
    public set firstName1(firstName:string){
            this.firstName=firstName;
    }

    public get lastName1():string{
        return this.lastName;
    }
    public set lastName1(lastName:string){
            this.lastName=lastName;
    }

}


