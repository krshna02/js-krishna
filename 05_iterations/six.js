const codie=["java","c","python"]
const values=codie.forEach( (item) => {
    console.log(item);
    
    return item;
});
console.log(values);// for each loop does not return any value..
const number=[1,2,3,4,5,6,7,8,9,10]
//const newnums=number.filter((nums) => nums>=5)
const newnums=number.filter((nums)=>{
    return  nums>=5
    //if we use curly braces{} then need to write return keyword for output
})
console.log(newnums);
const newnum2=[]
// by foreach loop
number.forEach((nums)=>{
    if(nums>5){
        newnum2.push(nums);
        
    }

})
console.log(newnum2);
const mem=number.map((num)=>num+10)
console.log(mem);



