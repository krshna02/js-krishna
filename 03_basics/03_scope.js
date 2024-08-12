
// console.log(a);
// console.log(b);
// console.log(c);
let a=60
if(true){
    let a=10 //{} this a scope of this function
    const b=3
    console.log("inner:",a);
    
    //var c=8// thats we avoid var 

}
// scope is inside if statement is block scope and outside this is global scope
 console.log(a);// it will return error because a is not defined outside of if (the scope of a is inside {})

 //console.log(b);// it will return error because b is not defined outside of if (the scope of b is inside {})
 // console.log(c);// it will return 8 becoz the scope of var is also outsied if statement


