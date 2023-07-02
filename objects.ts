
// type aliases

// best practice for don't repeat yourself
type Student ={
    readonly id:number,name:string,islearning(a:string,b:string):boolean
}




let student:{readonly id:number,name:string,islearning(a:string,b:string):boolean}={
   id:2,
   name:"utjhjhtjhj",
   islearning:(a,b)=>{
    return a==b
   }
}

// this will should return error because it's readonly
//student.id = 9