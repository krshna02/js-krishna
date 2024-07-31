const mydate= new Date();
 console.log(mydate);
console.log(mydate.toString());
console.log(mydate.toDateString());
 console.log(mydate.toTimeString());
 console.log(mydate.toLocaleString());
 console.log(typeof mydate);
 const createddate= new Date(2024,23,1,5,3);
 console.log(createddate.toLocaleString());
 const newdatee=new Date("2023-03-01")
 console.log(newdatee.toDateString());
 const timestamp= Date.now();//it gives valye in milli second
 console.log(timestamp);
 console.log(newdatee.getTime());// it gives te time after that date till now
console.log(Math.floor((timestamp)/1000));// it gives value in second
console.log(createddate.toLocaleString('default',{
    weekday:"long"
}));