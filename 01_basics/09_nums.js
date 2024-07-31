const num=100
const num1= new Number(200);
console.log( typeof num1);
console.log( typeof num);
console.log(num1.toString().length);
console.log(num1.toFixed(2));// it will give decimal points till 2 digits
const num2=123.8777
console.log(num2.toPrecision(3));// return type is string
const hundreds=100000
console.log(hundreds.toLocaleString('en-IN'));// return commas between zeroes

