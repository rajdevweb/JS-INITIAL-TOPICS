//exercise 1 simple function
// let number = [5,10,15,17,19,20];
// let even = number.filter(function (num) {
//     return num % 2 === 0
// })
// console.log(even);

//exercise using arrow function 
//  let number = [5,10,15,17,19,20];
//  let sum = number.filter(num => num % 2 === 0)
// console.log(sum);


// suppose we want to filter out the number that are greater  than 10  from an array;

let number = [5,10,15,17,19,20];
let filtered = number.filter(function (greater) {
     return greater > 5;
});
console.log(filtered);
