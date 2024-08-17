// for of
const greetiing="hello world"
for (const greet of greetiing) {
   // console.log(`each char is ${greet}`);
    if(greet==" "){
        break;
    }
 }
 // Maps for unique values
 const map=new Map();
 map.set("kr","krishna")
 map.set("dhr","dheeraj")
 map.set("ab","abhishek")
 map.set("dhr","dheeraj")
 //console.log(map);
 for (const [key,value]  of map) {
    console.log(key,":-",value);
 
 }

 
