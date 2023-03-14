import { Coach } from "./Coach";

export class Golf implements Coach{
    getDailyworkout(): string {
        return ("I am Practicing Golf");
    }
}