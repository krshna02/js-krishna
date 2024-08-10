//destructuring
const course={name:"sher",
    coursename:"js",
    price:22,
    courseinstructor:"krishnasharma"
}
//console.log(course.courseinstructor);
const{courseinstructor:instructor}= course// destructure courseinstructor as instructor
console.log(instructor);
//apii
//json is a js object  notation
 {
     "name":"krishna",
     "class":"btech"
 } //it is a json is this both key and values are in the form of string 
[
    {},
    {},
    {}
]// json in the form of array