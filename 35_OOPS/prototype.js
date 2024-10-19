// let languageName = {
//     html: "hyper text markup langauge",
//     css: "cascasding style sheets",
//     style:function () {
//         console.log(`full name is css ${this.css}`); 
//     }
// }
// languageName.style()
// myCourse.style()//erroe shoes bcoz myCourse is not a function


//declare with direct object

//program 2

// let myCourse = ["html","css", "javascript","bootstrap","tailwaind","mysql","gitbase","github"];

// Object.prototype.raj = function(){
//     console.log("we have multiple courses which is you can choose from these option");
// }
//  myCourse.raj()

//direct arrray
// Array.prototype.krishna = function () {
//     console.log("access will array and direct object");
// }
// myCourse.krishna();


//program 3 inheritance
const customer = {
    name: "raj",
    sex:"male",
    mobile:"9313679935"
}
const hotel = {
    room: true
}
const staffSupport = {
    isAvailable:true
}
 const foodService = {
    meals: "punjabi dees",
    bevarage:"coca cola",
    water:"mineral water"
 }
// console.log(hotel.__proto__ = customer);

//write modern method inheritance
// let objects = Object.setPrototypeOf(hotel,customer)

// console.log(objects,customer);

//program 4
let anotherUser = "govind madhaveti    ";

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`true lenght is: ${this.trim().length}`)
}
anotherUser.trueLength()
"hari       ".trueLength()
"swarna".trueLength()