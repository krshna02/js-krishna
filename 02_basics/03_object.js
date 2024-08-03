//singleton
//Object.create>>singleton only use in this type
//object literals
const mysym= Symbol("key1")
const myobj={
    name:"krishna" ,
    "fullname":"krishna sharma",
    [mysym]:"key1",
    age:18,
    gmail:"krishna.shamra@gmail.com",
    location:"agra"

}
 console.log(myobj);
 console.log(myobj["age"]); console.log(myobj.gmail);
 console.log(myobj.fullname);
 console.log(myobj[mysym]);

 myobj.age=19
 console.log(myobj);
 Object.freeze(myobj)// it freezes the object means object value will not change after this
 myobj.age=20
 console.log(myobj);
myobj.greeting=function(){
    console.log("hello this side")
}
console.log(myobj.greeting());
myobj.greetingtwo=function(){
     console.log(`hello this side ${this.name}`)
 }
 console.log(myobj.greetingtwo());




