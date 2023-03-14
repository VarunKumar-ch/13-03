"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Student2_1 = require("./Student2");
let myStudent2 = new Student2_1.Student2("hel", "wor");
console.log(myStudent2.firstName1);
console.log(myStudent2.lastName1);
myStudent2.firstName1 = "a";
console.log(myStudent2.firstName1);
