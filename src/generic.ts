// generic is reusable block of code

const addID=<T extends {name:string,age:number}>(obj:T)=>{
    let id = Math.floor(Math.random()*100)
    return {...obj,id}
}
let user = addID({name:'shaikh al nahian',age: 23,country:"fsl"})

// console.log(user);

// interface a generic er babohar
enum RType {Success,Failure,Auathenicated,Forbidden}
interface ApiResponse<T>{
    status: number,
    type: RType,
    data: T
}
const response:ApiResponse<object>={
    status: 200,
    type: RType.Success,
    data: {
        name:"test",
        smothing: 'ok'
    }
}

// enum er babohar



const response1:ApiResponse<string>={
    status:200,
    type: RType.Success,
    data:"test"

}
// console.log(response1)
// tupples

let a =[3,"hello",{p:3}]
a[1]=1
// console.log(a)
let b:[string, number,object]=["nahian",4,{p:2}]
b[1]=1
// console.log(b)