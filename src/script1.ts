let palyer;
// console.log(palyer) this is undefined, mane type define e kora hoy nai tai next a jakono type er value assign kora jabe

palyer ="sakib"

palyer = 45
// console.log(palyer);

// now we will ses in the case of funcion
function multiply(a:number,b:number){
    return a*b
}
// console.log(multiply(3,4))

//let see in the case of array

// let fruits =['apple',"banana","jackfruit"]
let fruits =[]
//now it will take anything
// fruits.push(true)

//this will give error becaues ts dore niace ata sudu string er array

let mixed =["apple",3,true,{}]
// mixed.push(4)
//now we can push string number and bollen types because we take this types of value in the array

// mixed.push({
//     name: "shakib"
// })

//object
let person={
    name: 'nahian',
    age: 23,
    adult: true
}
// person.name=32
//this is not possible
// person.country ="bd"
//this is not possible, karon object ta declare er somoy ata akta schema or structure dhore nay.

//type bole dawa jay kono akta variable er

let a:string;
let b:number;
// a=45
// b="nahian"
//this is not possible becaues this already decalre as static type string

//array object a o type bole dawa jay

let color:string[] =[]
// color.push(44)
//this not possible, because this is already declare as string
// color.push('red')
// this is now ok

let c: string | number;
// c=4
// c='nahian'
//this is ok

let d:(number | string)[] = []
d.push(33)
d.push("nahian")
//this is ok
//but
// d.push(true)
//this will give the error

let e:object
//this will take only the object
//but
// e=5
//this will give the error

e={
    name: 'shaikh al nahian',
    age: 34
}

//ater modhe ja khusi tai dawa jabe
//  but schema bole dawa thakle home nah

let f:{
    name: string,
    age: number
}
f={
    name: 'nahian',
    age: 23,

}

// in js array is a one kind of object

let g:object
g=[1,3,4]

let t:any;
t={name:"nahaina",
    age: 34
}
//using any we can declare any types
//but it makes ts same as js, it should not do this
t="sumit"
//any type can be push in array
let y:any[]=[]
y.push('bd')
y.push(23)
//now it will take any data types

//amara object er schema defination er modhe o any er babohar ta dekte pari

let u:{
    eat: any,
    number: any
}
u={
    eat: 23,
    number: "lfsj"
}