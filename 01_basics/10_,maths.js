 console.log(Math);
 console.log(Math.abs(-4));// change -ve value into +ve
 console.log(Math.round(4.5));//round off the value
 console.log(Math.ceil(4.2));//it gives upper values only
 console.log(Math.floor(4.9));//it gives lower value only
console.log(Math.random());//it gives values between 0 and 1 only 
console.log((Math.random()*10)+1);// it alwys give value greater than zero
console.log(Math.round(Math.random()*10)+1);
//++++++
const max=1;
const min=6;
console.log(Math.round(Math.random()*(max-min+1)+min));// it will give values between 10 and 20