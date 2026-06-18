//STRING METHODs ( “A string is a sequence of characters used to store text in JavaScript.”)
// buit-in functions; used to perform operation on STRING

// 1.SPLIT [convert to Array]
let items = "apple,orange,mango"
// console.log(items);
console.log(items.split(","));



//2.slice() [extracts part] (start,end)
// [start-->>>   , <<<--end ]
let text = "happy day"
console.log(text.slice(1,-5));



//3. substring() [also extracts part of a string] (start,end)
//[start,end-->>> ]
let texts = "Java Script";
console.log(texts.substring(0,5));



/*4. substr() [extracts characters based on:
Start position :
Length  :        ]*/
let title = "good morning"
console.log(title.substr(5,7));



//5. toUpperCase() [Converts string to capital letters]
let message = "hai";
console.log(message.toUpperCase())



//6. toLowerCase() [Converts string to small letters]
let name ="MANSOOR";
console.log(name.toLowerCase())



//7. concat()  [join stings]
let first = "Ahmed";
let last  = "Ashik";
console.log(first.concat(" ", last));



//8. charAt() [return only Specific index character ]
let call = "Mansoor";
console.log(call.charAt(3));



//9. replace()  [old teext replace to new text]
let master = "how are you";
console.log(master.replace("how are you","fine"));



//10. trim()  [Beginning and ending spaces remove]
let topic = "   hai  ";
console.log(topic.trim());



//11. padStart() [ adding extra characters in beginning String]
// string.padStart(totalLength, value)
//a.
let num = "5";
console.log(num.padStart(3,"1"));


//b.
let count = "NE";
console.log(count.padStart(3,"O"));