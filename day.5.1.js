//Functions 
//(  A function is a reusable block of code that performs a specific task. )
//1. Function Declaration
//( A function declared using the function keyword.)
function greet() {
    console.log("Hello");
}
greet();



//2. Function Expression ( A function stored inside a variable. )
const greets = function() {
    console.log("Hello world");
};
greets();



//3. Arrow Function (A shorter way to write functions. )
const hope = () => {
    console.log("Hello Mansoor");
};
hope();

//With Parameters
const happy = (name) =>{
    console.log("hello " + name);
}
happy("mansoor");



//4. Callback Function  ( A function passed as an argument to another function. )
function message (name, hello) {
    console.log("Hello " + name);
    hello()   
}
function bye() {
    console.log("Bye Bye");
}
message("Mansoor", bye);



//5. Pure Function [ "A pure function always returns the same output for the same input and does not cause side effects." ]
function multiply(a, b) {
    return a * b;
}
result = multiply(2,4);
console.log(result);
console.log(result);


//b. Impure Function
let total = 0;
function add(num) {
    total += num;
    return total;
}
console.log(add(5));
console.log(add(5));



//6. IIFE (Immediately Invoked Function Expression)
//
(function() {
    console.log("Hello");
})();



//7. Lexical Environment or Lexical Scope
//( a function can access variables from its outer (parent) scope. )
let name = "Mansoor";
function greetss() {
    console.log(name);
}
greetss();



//8. Closure [ A Closure is created when an inner function remembers and uses variables from its outer function, even after the outer function has finished executing ]
function outer() {
    let count = 0;

    return function inner() {
        count++;
        console.log(count);
    };
}
const increment = outer();
increment();
increment();
increment();



//9. Currying
//Currying converts a function with multiple arguments into a series of functions with one argument.
function adds(a) {
    return function(b) {
        return a + b;
    };
}
console.log(adds(5)(3));