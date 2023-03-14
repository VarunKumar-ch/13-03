class Student1{

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

let myStudent1 = new Student1("hell","worl");


console.log(myStudent1.firstName1);
console.log(myStudent1.lastName1);
myStudent1.firstName1="a";
console.log(myStudent1.firstName1);
