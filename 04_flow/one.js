//if
const v=2
if(v===2){
    console.log("executed");
    
}
else{
    console.log("not executed");
    
}
// comparison oprators- <,>,<=,==,===(for datatype checking),!=,!==,>=
// const score=200
// if(score>100){
//     const power="fly"
//     console.log(`user power: ${power}`);
    
// }
// console.log(`user power: ${power});
const price=800;
if(price<500){
    console.log("less than 500");
    
}else if(price<750){
    console.log("less than 750");
}else if(price<900){
    console.log("less than 900");
}
else{
    console.log("less than 1200");
    
}
const userloggedin=true
const debitcard=true
let userfromggogle=false
let userfromemail=true
if(userloggedin && debitcard){
    console.log("allow to buy course");
    
}
if(userfromemail || userfromggogle){
    console.log("user logged in");
    
}