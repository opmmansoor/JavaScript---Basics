//for of loop [ The for...of loop is used to iterate through the values of an iterable object such as:
// Arrays , String , Maps , Sets]

//Array 
let students = ['nafi','arun','joe']
for (let student of students){
    console.log(student)
}

// string
let message = "hello"
for (let x of message){
    console.log(x)
    //console.log(message[1])
}

//I will post after studiying Maps and Sets examples 

//for in loop [for...in loop is used to iterate through the keys (property names) of an object.]
//object
var student = {
    name: "jhon",
    age : 25,
    course: "it"
}
console.log(student);

for (var key in student){
    console.log(key);
    //console.log(student[key]);
}


//SCOPE [ “A variable can work only in some places. That area is called scope.” ]
//GLOBAL SCOPE ( A variable declared outside all functions and blocks is called a global variable. )
var name = "Anas";
function show(){
    console.log(name);
}

show();
console.log(name);


//function scope ( A variable declared inside a function can only be accessed inside that function. )
function test(){
   let age = 20;
   console.log(age);
}
test();
//console.log(age); //(called outside of function, So, not working )


//block scope ( Variables declared with: "let" or "const" inside a block work only inside that block)
{
   let city = "Calicut";
   console.log(city);
}

//console.log(city); ( not access)