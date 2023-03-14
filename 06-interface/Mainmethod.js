"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cricketCoach_1 = require("./cricketCoach");
const Golf_1 = require("./Golf");
let a = new cricketCoach_1.cricketCoach();
let b = new Golf_1.Golf();
let nums = [];
nums.push(a);
nums.push(b);
for (let i of nums) {
    console.log(i.getDailyworkout());
}
