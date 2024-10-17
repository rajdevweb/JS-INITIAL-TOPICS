//part of oops
//-constructor function 
//prototypes
//classes
//instances(new,this)

//pillars of oops
// abstraction
// encapsulation
//inheritance
//polymorphism




//program 1
// let user = {
//      name : "raj vishwakarma",
//      program : "BCA",
//      signIN : true
// }
// console.log(user.name);


// program 2
// let user2 = {
//      name : "raj vishwakarma",
//      program : "BCA",
//      signIN : true,
//      enrolNo:function () {
//           console.log("get user detils from database ");
          
//      }
  
// }
// console.log(user2.name);
// console.log(user2.enrolNo);

//program 3
// geeksforgeeks
// let person = {
//      first_name:"raj",
//      last_name:"vishwakarma",
//      getFunction:function () {
//      return(` the first name is ${this.first_name } and last name is  ${person.last_name}`)
//      }
// }
// console.log(person.getFunction());

 myFunc = (first_name , last_name) =>{
     this.first_name = first_name;
     this.last_name = last_name;

}
let person1  = new person("raj" , "vishwakarma");
let persen2 = new person("krishna", "govind")

console.log(myFunc.persen.first_name);


