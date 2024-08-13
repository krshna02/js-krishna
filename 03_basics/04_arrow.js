const user={
    username:"krishna",
    price:999,
    welcomemssg:function(){
        console.log(`${this.username},welcome to website`);//this keyword returns current value of username
        
    }
}
user.welcomemssg()
user.username="sameish"
user.welcomemssg()
console.log(this);// return an empty object
console.log(this.username);// return undefined because username is in block scope not in global scope.
// this keyword only  used in object not in functions
const add=(num1,num2)=>{ // synstax of arrow function== ()=>{}
    return num1+num2 //explicit return

}
console.log(add(3,4))
const multiply=(num1,num2)=> (num1*num2) //implicit return means 1 line of code ,if we use curly braces then need to write return keyword
console.log(multiply(3,2));
const chai=()=>{
    let username="krishna"
    console.log(this.username);
    
}
chai()//undefined output


