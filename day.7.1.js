//Map()
//A Map is a collection of key-value pairs.

let student = new Map();

student.set("name","thahir");
student.set("age",20);

console.log(student);
console.log(student.get("name"));
console.log(student.get("age"));

let user = new Map();
user.set("name","Mansoor");
console.log(user);


//Set()
//A Set is a collection of unique values.
//Duplicate values are not allowed.
let numbers = new Set([10, 10, 20, 30, 20, 10]);
console.log(numbers); 



let number = new Set([25,20,30]);

number.add(10);
number.add(20);
number.add(10);

console.log(number);



let users = new Set();
users.add("Mansoor");
console.log(users);
