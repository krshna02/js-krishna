function calccartprice(val1,val2,...num1){ // ... rest operator for print more than 1 value 
    return num1
    
}
//console.log(200);
console.log(calccartprice(200,4000,600,300));// val1=200 ,val2=4000,...num1=600,300 in array
//function in object
function handleobject(anyobject){
    console.log(`Username is ${anyobject.username}  and price is ${anyobject.price}`);
}
handleobject({
    username:"krishna",
    price:"399"
})
const mynewArray=[200,400,300,500]
function returnsecondvalue(getarray){
    return getarray[2]
} 
//console.log(returnsecondvalue(mynewArray));
console.log(returnsecondvalue([ 200,400,500,600,700]));
