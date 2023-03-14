class Student{

    private firstName:string;

    private lastName:string;

    constructor(firstName:string,lastName:string){
        this.firstName=firstName;
        this.lastName=lastName;
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

let myStudent = new Student("hello","world");


console.log(myStudent.firstName1);
console.log(myStudent.lastName1);
myStudent.firstName1="a";
console.log(myStudent.firstName1);
