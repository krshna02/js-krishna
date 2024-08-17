// for
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }
for (let i = 1; i <=10; i++) {
    const element = 2*i;
    if(element==10){
        //console.log("10 is best");
        
    }
    //console.log(element);
}
for (let i = 0; i <=5; i++) {
    //console.log(`Outer loop is${i}`);
    for (let j = 0; j <=10; j++) {
        //console.log(`Inner loop is ${j}and inner loop is${i}`);
        ;
        
    }
    
    
}
//table from 1 to 5
for (let i = 1; i <=5; i++) {
     console.log(`table of ${i}`);
    for (let j = 1; j <=10; j++){
       //console.log(i+"*"+j +'=' + i*j);
        console.log(`${i}*${j}=${i*j}`);
        
       
    }
    
}
let myarray=["sher","cheeetah","jaduu"]
for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    //console.log(element); 
}
 for (let i = 0; i <=20; i++) {
    if(i==5){
        //console.log(`detected 5`);
        break
        
    }
    //console.log(`value of i is ${i}`); //returns values till 4 then detected 5
    
    
 }
 for (let i = 0; i <=20; i++) {
    if(i==5){
        console.log(`detected 5`);
        continue
        
    }
    console.log(`value of i is ${i}`); //returns values till 4 then detected 5
    
    
 }