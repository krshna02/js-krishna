
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
function one(){
    const username="krishna"
     function two(){
        const website="vscode"
     console.log(username);
     }
     //console.log(website); it will give en arror becoz we accessing outside the scope of website
     //closure -when child function can call parent funct element
     two()
}
one()
if(true){
    const username="krishna"
    if(username==="krishna"){
        const website=" vscode"
       console.log(username+website);
        
    }
    //console.log(website);
    
}
//console.log(username);

//+++++++++++++++++++ MINI HOISTING+++++++++
console.log(addone(5)) // ease hum pre intialize kr skte h 
function addone(num1){
    return num1+1
}
//addtwo(5) ease nhi kr skte agr ye kisi variable mai store h toh
const addtwo=function(num1) { // if we assign in a variable then it will throw an error
    return num1+2
    
}
console.log(addtwo(5));


