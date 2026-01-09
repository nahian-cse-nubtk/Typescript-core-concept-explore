//type checking at the time of define and declare a variabale
let palyer = "mashrafi";
//aikhane akber palyer string dhorar por ar kono type er varibale er value niba nah
// palyer = 45
// console.log(palyer)
// declare and assgin separtely we can do this
//how to use function
//Function this word refers to a type of function
let myFunc;
myFunc = () => {
    console.log("hello arrow function");
};
// myFunc()
const myFunc1 = (a, b) => {
    console.log(`${a} and ${b}`);
};
// myFunc1('nahian','sojib')
//now we will see the optional parameter
const myFunc2 = (a, b) => {
    console.log(`${a} and ${b} exploring optional`);
};
// myFunc2('A')
// here the parameter b is opional
// const myFunc2: (a: string, b?: string | undefined) => void
// now we will seethe default value
const myFunc3 = (a, b, c = 'ok') => {
    console.log(`the value are ${a},${b},${c}`);
};
// myFunc3(23,34)
const myFunc4 = (a, b, c) => {
    return a + b + c;
};
const userDetails = (id, user) => {
    console.log(`${user.name} and id: ${id} and user age:${user.age}`);
};
// userDetails(324,{name:"hakim",age:45})
const sayHello = (user) => {
    console.log(`hello ${user.name} and age:${user.age}`);
};
// sayHello({name:"hakim",age:45})
//function signature
let myFunction;
myFunction = (a, b) => {
    return a + b;
};
let calculation;
calculation = (a, b, c) => {
    if (c == 'add') {
        return a + b;
    }
    else {
        return a - b;
    }
};
// console.log(calculation(5,6,"ad"))
//object er name chage kora jay nah varibale er moto pore use korar khetre
let userFullDetails;
userFullDetails = (use) => {
    console.log(`${use.name} and age: ${use.age}`);
};
export {};
// userFullDetails({name:'shaikh',age:33})
//# sourceMappingURL=script.js.map