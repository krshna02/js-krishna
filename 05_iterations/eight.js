const num=[1,4,3]
const myTotal=num.reduce(function(acc,currval){
    //console.log(`acc:${acc}and currentvalue${currval}`);
    
    return acc+currval;
    
},0)
console.log(myTotal);//
//const mytotal=num.reduce((acc,currval)=>acc+currval,0)
const shoppingcart=[
    {
        item_brand:"barcelona",
        price:3000,
    },
    {
        item_brand:"argentina",
        price:3000,
    },
    {
        item_brand:"nadrid",
        price:8000,
    }
]
const val=shoppingcart.reduce((acc,item)=> acc+ item.price,0)
console.log(val);


