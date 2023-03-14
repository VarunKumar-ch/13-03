"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student2 = void 0;
class Student2 {
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
exports.Student2 = Student2;
