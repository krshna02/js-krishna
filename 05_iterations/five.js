// for each loop mainly for array
const coding=["java","riby","python","html","js","css"]
coding.forEach( function(val){
    //console.log(val);
    
})
coding.forEach((item,index,array)=>{
    console.log(item,index,array)
    
})
const mycoding=[
    {
        languagename:"java",
        languagecode:"01"
    },
    {
        languagename:"css",
        languagecode:"02"
    },
    {
        languagename:"html",
        languagecode:"03"
    }
]
mycoding.forEach((item)=>{
    console.log(item.languagecode);
    
})