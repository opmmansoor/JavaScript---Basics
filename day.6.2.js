//Destructuring
// [ Destructuring is a JavaScript feature used to extract values from arrays or properties from objects and store them in variables easily. ]

//1. Array Destructuring [ extract array values into variables based on their position.] 
let fruits = ["Apple", "Orange", "Mango"];
let [first, second, third] = fruits;
console.log(first);

//b.
let animals = ["cat","dog","rabbit","lion"];
let [one,two,three,four] = animals
console.log(three);



//2. Object Destructuring  [ extract object properties into variables based on their property names."]

let student = {
    name: "Mansoor",
    age: 22
};
let { name, age } = student;
console.log(name);
console.log(age);

