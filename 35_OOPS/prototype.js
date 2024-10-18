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
const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

let abc = Teacher.__proto__ = User
console.log(abc);

//program 4 write a modern method inheritance
obje
