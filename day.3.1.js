//Array Methods
//Array methods are built-in functions used to perform operations on arrays

//1.Array slice() [ extracts a portion of an array and returns a new array.
// It does not change the original array.]
//[ start,length -->>> ]
let fruits = ["Apple", "Orange", "Mango", "Grapes"];
console.log(fruits.slice(0,3));


//2.splice()  [ used to: Add elements , Remove elements It changes the original array.]
let fruit = ["Apple", "Orange", "Mango","plum"];
fruit.splice(0,2,"Grapes","pienapple");
console.log(fruit);


//3.toString()  [Converts an array into a string.]
let fruitss = ["Apple", "Orange", "Mango"];
console.log(fruitss.toString());


//4. at()  [ Returns the element at a specific index ]
let animals = ["dog","cat","cow","rabbit"];
console.log(animals.at(3));


//5. join() [Joins all array elements into a string]
let animal = ["dog","cat","cow","rabbit"];
console.log(animal.join(" - "));


//6. pop() [ Removes the last element from an array. ]
let birds = ["duck","crow","parott"]
birds.pop();
console.log(birds);


//7. push() [Adds an element to the end of the array.]
let pet = ["duck","macaw","parott"]
pet.push("peacock");
console.log(pet);


//8. shift() [Removes the first element from the array.]
let fruitz = ["Apple", "Orange", "Mango"];
fruitz.shift();
console.log(fruitz);


//9. unshift() [Adds an element at the beginning of the array ]
let items = ["Orange", "Mango"];
items.unshift("Apple");
console.log(items);


//10. delete [Used to delete an array element.]
//⚠️ Not recommended because it leaves an empty slot.
let item = ["Apple", "Orange", "Mango"];
delete item[1];
console.log(item);


//11. concat() [Used to combine two or more arrays.]
let arr1 = ["Apple", "Orange"];
let arr2 = ["Mango", "Grapes"];
console.log(arr1.concat(arr2));

//let result = arr1.concat(arr2);
//console.log(result);
