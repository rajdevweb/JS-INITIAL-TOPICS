//program 1
// function multiple5(num){
//     return num * 5;
// }
// multiple5.power = 2

// console.log(multiple5(1));
// console.log(multiple5.power);
// console.log(multiple5.prototype);

//program 2
//using this keyword and it explain 
function createUser(username , salary){
    this.username = username;
    this.salary = salary
}

createUser.prototype.increment = function() {
  this.salary++ 
}

createUser.prototype.printMe = function(){
    console.log(`salary is ${this.salary}`);
    
}

let a = new createUser("rahul",10000)
// let b = createUser("rahul","$100")
console.log(a);


