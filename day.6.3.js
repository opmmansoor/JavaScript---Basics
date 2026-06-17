//1. Object Method
//[ An Object Method is a function stored inside an object.]
let student = {
    name: "Mansoor",
    age: 22,

    greet: function() {
        console.log("Hello");
    }
};
student.greet();


//2. this Keyword
//[  this refers to the object that is currently calling the method. ]

let students = {
    name: "Mahfoos",

    showName: function() {
        console.log(this.name);
    }
};
students.showName();

//3. call() Method
//call() is used to borrow a method from another object

let person1 = {
    name: "Amal"
};

let person2 = {
    name: "Ali"
};

function greet() {
    console.log("Hello " + this.name);
}

greet.call(person1);
greet.call(person2);
greet.call(person1,person2);


//4. apply() Method
// [ apply() works like call().
// The difference is that arguments are passed as an array]

function greets(city, country) {
    console.log(this.name + " " + city + " " + country);
}

let person = {
    name: "shyam"
};

greets.apply(person, ["Calicut", "India"]);


//5. bind() Method
//bind() does not execute the function immediately.
//It creates a new function with a fixed this value.

let persons = {
    name: "vinu"
};

function message() {
    console.log("Hello " + this.name);
}

let newfun = message.bind(persons);
newfun();



//DAY 6 . 4//

///Recursion
// Recursion is a programming technique where a function calls itself repeatedly until a condition is met.
//
function operation(num) {
    if (num === 0) {
        return;  
    }

    console.log(num);
    operation(num - 1);
}
operation(4)



function factorial(n) {
    if (n === 5) {
        return 5;
    }

    return n * factorial(n + 1);
}

console.log(factorial(1));