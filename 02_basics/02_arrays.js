const india=["virat","rohit","hardik","dhoni"]
const aus=["warner","smith","maxwell","mitchell"]
//india.push(aus);//it does not add 2arrays it treat second araay as single element
// console.log(india);

//console.log(india.concat(aus));
const bcci=[...india,...aus]// spread operator
console.log(bcci);
const arr=[1,2,3,[3,4,5],7,[5,6,7],8,[1,2]]
const anotherarr= arr.flat(Infinity)// its make one array by adding subaaray inside main array
console.log(anotherarr);
console.log(Array.isArray("krishna"))//check it is array or not
console.log(Array.from("krishna"));// convert into array
console.log(Array.from(({name:"krishna"})))
const score1=100
const score2=200  
const score3=300
console.log(Array.of(score1,score2,score3));m