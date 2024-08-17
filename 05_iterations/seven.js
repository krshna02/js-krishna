//MAP function
const mynumbers=[1,2,3,4,5,6,7,8,9]
let  k;
//const result=mynumbers.map((nums)=>nums*10+1 )
//console.log(result);
// const result2=mynumbers.forEach((nums)=>{
//     return nums*20;
    
    
    
//})
 
let result3=mynumbers.map((nums)=>nums*10).map((nums)=>nums+1).filter((nums)=>nums>=30)
console.log(result3);





