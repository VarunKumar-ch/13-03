"use strict";
class Student1 {
    // private firstName:string;
    // private lastName:string;
    // constructor(firstName:string,lastName:string){
    //     this.firstName=firstName;
    //     this.lastName=lastName;
    // }
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get firstName1() {
        return this.firstName;
    }
    set firstName1(firstName) {
        this.firstName = firstName;
    }
    get lastName1() {
        return this.lastName;
    }
    set lastName1(lastName) {
        this.lastName = lastName;
    }
}
let myStudent1 = new Student1("hell", "worl");
console.log(myStudent1.firstName1);
console.log(myStudent1.lastName1);
myStudent1.firstName1 = "a";
console.log(myStudent1.firstName1);
