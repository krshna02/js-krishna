const usermail="krishna.ai"
if(usermail){
    console.log("got a mail");
    
}else{
    console.log("dont get a mail");
    
}
//falsy values
//-  false,0-0,BigInt 0n,"",null,undefined,nan
// ink alava sb truthy value h
//truthy values
// "0",'false'," ",[],{},function(){}
const user=[]
 if(user.length==0){ //to check an araay is empty or not
    console.log("array is empty");
    
 }
 const emptyobj={}
 if(Object.keys(emptyobj).length==0){ //check whether object is empty or not
    console.log("object is empty");
    
 }

 // Nullish Coalescing Operator(??): null undefined
 let val1;
 val1=5 ??10
 val2=null??10 // it gives output 10 and remove null becoz ut can guve an error
 val3=undefined ??3 //output=3
 val4= null ?? 20?? 10 //output=20
 console.log(val1);
 console.log(val2); 
 console.log(val3);
 console.log(val4);

 // Terniary Operator
 // condtion ? true:false
 const batprice=2000
 batprice>=2000 ? console.log("paise kamao aur bhai") : console.log("baut h paisa");
 
 
 
 
 
