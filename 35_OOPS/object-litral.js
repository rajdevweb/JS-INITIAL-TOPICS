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


//program 4

//  myFunc = (first_name , last_name) =>{
//      this.first_name = first_name;
//      this.last_name = last_name;

// }
// let person1 = new myFunc("raj","vishwakarma")
// let person2 = new myFunc("krishna","vishwakarma")

// console.log(myFunc.first_name);

//program 5

//example of geeksforgeeks
// function person(first_name,last_name) { 
//      this.first_name = first_name;
//      this.last_name = last_name;

// }
// let person1 = new person("krishna", "govinda");
// console.log(`you first name is ${person1.first_name}, and your last name is ${person1.last_name}`);


// program 2
// let user2 = {
//      name : "raj vishwakarma",
//      program : "BCA",
//      signIN : true,
//      person:function() {
//        console.log(`Username is ${this.name}`);
//      return
//      },
     
// }
// console.log(user2.name);

// program 3
// function user(firstname , lastname, isloggin){
//      this.firstname = firstname;
//      this.lastname = lastname;
//      this.isloggin = isloggin;
     
//      return this// return keyword ka use kar sakte hai or nahi bhi kar sakte hai.
// }

// let userOne = new user("raj", "bca", 427)
// let userTwo = new user("rohit", "bca", 123) 
// //overiding userOne value userTwo automatically change value without declare

// console.log(userOne);

//program 4
// function user() {
//      this.firstname = "raj vishwakarma",
//      this.age = 23
// }
// let users = new user();
// console.log(users.firstname);
// console.log(users.age);


