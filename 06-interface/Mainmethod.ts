import { Coach } from "./Coach";
import { cricketCoach } from "./cricketCoach";
import { Golf } from "./Golf";


let a = new cricketCoach();
let b = new Golf();

let nums:Coach[] = [];
nums.push(a);
nums.push(b);


for(let i of nums){
    console.log(i.getDailyworkout());
}