//type checking at the time of define and declare a variabale

let palyer = "mashrafi"
//aikhane akber palyer string dhorar por ar kono type er varibale er value niba nah

// palyer = 45
// console.log(palyer)

// declare and assgin separtely we can do this

//how to use function
//Function this word refers to a type of function

let myFunc:Function;
myFunc=()=>{
    console.log("hello arrow function")
}
// myFunc()

const myFunc1:Function=(a:string, b:string)=>{
    console.log(`${a} and ${b}`)

}
// myFunc1('nahian','sojib')
//now we will see the optional parameter
const myFunc2=(a:string,b?:string)=>{
    console.log(`${a} and ${b} exploring optional`)

}
// myFunc2('A')
// here the parameter b is opional
// const myFunc2: (a: string, b?: string | undefined) => void

// now we will seethe default value

const myFunc3=(a:number,b:number,c:string='ok')=>{
    console.log(`the value are ${a},${b},${c}`)
}
// myFunc3(23,34)

const myFunc4 =(a:string,b:string,c:number):string=>{
    return a+b+c;
}
// console.log(myFunc4('A',"B",4))
//return type ta bole dawa jay....

//now we will see alies
type userType={
    name:string,
    age: number
}
type idType =string | number

const userDetails =(id:idType,user: userType)=>{
    console.log(`${user.name} and id: ${id} and user age:${user.age}`)
}
// userDetails(324,{name:"hakim",age:45})
const sayHello=(user:userType)=>{
    console.log(`hello ${user.name} and age:${user.age}`)
}
// sayHello({name:"hakim",age:45})
//function signature

let myFunction:(x:number,y:number)=>number;

myFunction=(a:number,b:number):number=>{
    return a+b;

}
// console.log(myFunction(2,5))
type num=number;
type workType = string;
let calculation:(x:num,y:num,z:workType)=>number

calculation=(a:number,b:number, c:string):number=>{
    if(c=='add'){
        return a+b;
    }
    else{
        return a-b;
    }
}
// console.log(calculation(5,6,"ad"))

//object er name chage kora jay nah varibale er moto pore use korar khetre

let userFullDetails:(user:{name:string,age:number})=>void

userFullDetails=(use:{name:string,age:number})=>{
    console.log(`${use.name} and age: ${use.age}`)
}
// userFullDetails({name:'shaikh',age:33})