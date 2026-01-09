// class player{
//     private name: string;
//     readonly age: number;
//     country: string;
//     constructor(n:string,a:number,c:string){
//         this.name = n,
//         this.age = a,
//         this.country = c
//     }
//     play(){
//         console.log(`${this.name} is playing from ${this.country} his age ${this.age}`)
//     }
// }
// const mashrafi = new player('shakib',38,'bangladesh')
// const sakib = new player('sakib al hasan',66,'bd')
// // sakib.age = 55;
// // read only kore dile ata change kora jabe nah but read kora jabe
// console.log(mashrafi,sakib.age)
// // masrfi.name is not accesable if it is declared as private
// const players:player[]=[]
// players.push(mashrafi)
// players.push(sakib)
// console.log(players)
// prcaticing ts shortcut method
export class player {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    play() {
        console.log(`${this.name} is playing from ${this.country} his age ${this.age}`);
    }
}
// declare inter face here, it is predesign of a structure
//# sourceMappingURL=class.js.map