console.log(null>0);
 console.log(null==0)
 console.log(null>=0);//the reason is this equality works as == while comparison operator >,<,>=,<== works diffrently
                     // comparison converts null to a number which is treating as zero thats why 1st statement is false(0>0) adn 3rd is true(0>=0)
 console.log("2">1);
 console.log(undefined==0);
 console.log(undefined>0);
 console.log(undefined>=0);
//==== for strict check
const id=Symbol("123")
const anotherid=Symbol("123")
console.log(id===anotherid)
