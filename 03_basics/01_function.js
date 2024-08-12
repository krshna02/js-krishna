function samyName(){
    console.log("k");
    console.log("r");
    console.log("i");
    console.log("s");
}
//samyName()// to call a function
 function added2number(num1,num2){ // num1 , num2 are parameters, when we make function defination
   console.log(num1+num2);
    
 }
const results= added2number(3,2) // 3,2 are arguments ,when we call a function
 console.log("result:",results);// it will give undefined as a answer not 8 becoz we did not take any return value 
 function add2number(num1,num2){ 
    // let result = num1+num2
    // return result 
    // console.log("krishna");//anything after return will not execute
    return (num1+num2)
      
 }
 const result=add2number(3,5)
  console.log("result:",result); // now it will give answer as 8 because we take return in function
   function isloggedin(username){
    if(username=== undefined){
        console.log("please enter a name");
        return
        

    }
    return `${username} is logged in`
   }
   console.log(isloggedin("hitesh"))
   console.log(isloggedin());// return undefined
   

  