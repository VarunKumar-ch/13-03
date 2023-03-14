class Customer{
    firstName : string;
    lastName : string;


    constructor(firstName:string,lastName:string){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let mycustomer = new Customer("hello","world");



console.log(mycustomer.firstName);

console.log(mycustomer.lastName);