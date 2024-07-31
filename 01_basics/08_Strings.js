const name="krishna"
const repocount=40
console.log(`Hello my name ${name} and my repo is ${repocount}`); //backticks used to define string and string interpolation-${}
const gamename=new String("BGMIINDIA")// treated as object
// console.log(typeof gamename);// object
// console.log(gamename[2]);
// console.log(gamename.toLowerCase());
// console.log(gamename.charAt(2));
// console.log(gamename.indexOf('I'));
// console.log(gamename.__proto__);
console.log(gamename.substring(0,4));// cannot take -ve values in substring
console.log(gamename.slice(-8,4));// can take -ve values in slice
const user="   krishna   "
console.log(user.trim());// two types of trim end and start
const email="kk@gmail.co%20m"
console.log(email.replace('%20'," "))
console.log(gamename.includes("india"));//if values incldues then it rturns true otherwise false

