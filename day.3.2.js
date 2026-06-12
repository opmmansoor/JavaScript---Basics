//Array Search Methods [ Array search methods are used to find elements in an array. ]
//1. indexOf()  [ returns the first index of a specified element.]
let fruits = ["Apple","Mango","Orange", "Mango"];
console.log(fruits.indexOf("Mango"));


//2. lastIndexOf() [ lastIndexOf() returns the last index (position) of a specified value in an array.
//If the value is not found, it returns -1. ]
let numbers = [10, 20, 30, 20];
console.log(numbers.lastIndexOf(20));


//3. includes()  [ checks whether a value exists in an array.
// true  or false ]
let fruit = ["Apple", "Orange", "Mango"];
console.log(fruit.includes("Mango"));


//4.find() [returns the first element in an array that matches a condition.]
//If no element matches the condition, it returns undefined.
//array.find(function)
let number = [10, 20, 30, 40];
let result = number.find(num => num > 10);
console.log(result);


//5.findIndex() [ returns the index (position) of the first element that matches a condition.
//If no element matches the condition, it returns -1. ]
let nums = [10, 20, 30, 40];
let results = nums.findIndex(num => num > 20);
console.log(results);
