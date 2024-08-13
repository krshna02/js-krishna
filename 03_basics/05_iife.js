//Immediately Invoked Function Expressions(IIFE)-we use this to removw global scope problems
 // syntax of iife -- ()() ,example-chai()
(function chai(){
    // named iife it has a name chai
    username="krihsa"
    console.log(`db connnected`);
    
})();
((name)=>console.log(`krishna is here in ${name}`) // by arrow function
)("agra")