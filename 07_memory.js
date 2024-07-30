//stack(change into copied memory)
let user1="hair"
let user2=user1
user2="voltas"
 console.log(user1);
 console.log(user2);

 //heap (change in to original memory)
let username1= {
    email:"ha@gmail.com",
    id:"carpenter"
}
let username2= username1
username2.email="qs@gmail.com"
console.log(username2);
console.log(username1);