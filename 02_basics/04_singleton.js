//obejct by constructor
const tinderuser= new Object()
  tinderuser.name="krishna"
  tinderuser.age=19
  tinderuser.isloggedin=false
 //  console.log(tinderuser);
 const newuser={
     name:"krishna",
     fullname:{
         name:{             firstname:"krih",
         lastname:"you"      }
     }
 }
 console.log(newuser.fullname.name.firstname);
const obj1={1:"a",2:"b",3:"c"}
const obj2={4:"d",5:"e",6:"f"}
const obj3={7:"g",8:"h",9:"i"}
const objfinal=Object.assign({},obj1,obj2,obj3)// concat obj
const finalobject={...obj1,...obj2,...obj3}
console.log(finalobject);


 console.log(Object.keys(tinderuser));
 console.log(Object.values(newuser));
 console.log(Object.entries(tinderuser));
 console.log((tinderuser.hasOwnProperty('isloggedin')));// gives result in boolean
 
 

