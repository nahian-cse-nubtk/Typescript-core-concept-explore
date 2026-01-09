import { IsPlayer } from "./interfaces/IsPlayer";

export class player1 implements IsPlayer{
    constructor(public name:string,public age: number,readonly country: string){}
    play(){
        console.log(`${this.name} is play who's age is ${this.age}`)

    }
    getPorperty(): void {
        console.log(`${this.age}`)
    }

}
