//Rest Parameter (...)
//The Rest Parameter allows a function to accept any number of arguments and store them in an array.
function num(...numbers) {
    console.log(numbers);
}
num(10, 20, 30, 40);


//FOR OF LOOP 
function sum(...numbers) {
    let total = 0;

    for(let num of numbers) {
        total += num;
    }

    return total;
}
console.log(sum(10, 20, 30, 40));


//Spread Operator (...)
//The Spread Operator expands an array or object into individual elements(values).
let numbers = [10, 20, 30];
console.log(...numbers);

//Combine Arrays
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let result = [...arr1, ...arr2];
console.log(...result);

//object
//a
let student = {
    name: "Mansoor",
    age: 22
};
 let callStudent = {
     ...student
 };
 console.log(callStudent);


//b
let Student = {
    name: "Mansoor",
    age: 20
};
console.log(Student);

let newStudent = {
    ...Student,
    course: "Frontend"
};
console.log(newStudent);


 //m a n s o o r
var name = "mansoor"
console.log(...name);