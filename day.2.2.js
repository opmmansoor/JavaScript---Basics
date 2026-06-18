//String Search Methods
//used to find,check and locate text inside a STRING

//1. indexOf()  [Returns the first position (index) of a specified value]
let text = "Hello World hai World";
console.log(text.indexOf("World"));
console.log(text.indexOf("Java"));


//2. lastIndexOf() [Returns the last occurrence of a value.]
let texts = "what is this.. it is a castel?";
console.log(texts.lastIndexOf("is"));


//3. search()  [Searches for a value and returns its position.]
let call = "Hai Happy Day";
console.log(call.search('Happy'));


// 4. match() [ Returns matched values from a string and return as array]
let message = "I love JavaScript";
console.log(message.match("Script"));


/*5.includes() [Checks whether a string contains a value.
Returns: true or false   ]*/
let type = "Happy World";
console.log(type.includes("World"));


/*6.startsWith()  [Checks whether a string starts with a specified value.
Returns: true or false ] */
let tip = "JavaScript";
console.log(tip.startsWith("Java"));
console.log(tip.startsWith("Script"));


//7. endsWith() [Checks whether a string ends with a specified value.]
let tips = "JavaScript";
console.log(tips.endsWith("Script"));




/*topic ..... 3

Template Literals
(`  `) backticks      ${} Interpolation
Template Literals are a way to create strings using backticks (` `) instead of single quotes (' ') or double quotes (" "). */ 
// (`  `) This symbol is called a backtick.

//normal STRING
let name = `jhon`;
let age = 20;
console.log(`My name is ${name} and I am ${age} years old`);

//CALCULATION
let a = 10;
let b = 20;
console.log(`Sum = ${a + b}`);

//Multi-line Strings
let item = `Hello
Welcome`;
console.log(item);