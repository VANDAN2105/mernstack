// This code demonstrates common string methods (trim, toUpperCase, toLowerCase, indexOf, slice, replace, repeat) 
// and basic array operations (access, mutability, push, pop, unshift, shift) in JavaScript.

// trim method
// The trim() method removes whitespace from both ends of a string (spaces, tabs, etc.)
let pwd;
console.log("enter your password");
pwd= prompt("enter your password");
console.log("actual pwd-> ",pwd);
console.log("trimmed pwd-> ",pwd.trim());
pwd="hello world";
console.log(pwd);

//uppercase and lowercase methods

console.log(pwd.toUpperCase());
console.log(pwd.toLowerCase());

console.log(pwd[7]);

// str methods with arguments

// (1) indexof method
let str = "hello world i am vandan";
console.log(str.indexOf("vandan") , "the length of str is :", str.length);
console.log(str.indexOf("p"));
console.log(str.indexOf("l")); // returns only first occurrence of l

// (2) slice method
// The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.

let message = "JavaScript is awesome!";
console.log(message.slice(14)); // Extracts characters from index 14 to the end
console.log(message.slice(0, 10)); // Extracts characters from index 0 to 9
console.log(message.slice(0, -6)); // Extracts characters from index 0 to the 6th last character
console.log(message.slice(-6)); // Extracts the last 6 characters
console.log(message.slice(-8,-1)); // Extracts characters from the 8th last character to the 2nd last character

// replace method
// The replace() method returns a new string with some or all matches of a pattern replaced by a replacement.
// It does not change the original string.

let text = "I love JavaScript!";
let newText = text.replace("JavaScript", "coding");
console.log(newText); // Output: "I love coding!"
console.log(text);    // Original string remains unchanged: "I love JavaScript!"

// repeat method
// The repeat() method constructs and returns a new string which contains the specified number of copies of the string it was called on, concatenated together.

let word = "hello ";
console.log(word.repeat(3)); // Output: "hello hello hello

// question 
 let name = "ApnaCollege";
 //saperate this college from the string and replace that l with t .
console.log(name.slice(4).replaceAll("l", "t")); // "College" -> "Cottage");


// arrays

let stdnames = ["vandan", "sachin", "sahil", "sachin", "sahil"];
console.log(stdnames[1]);
console.log("stdnames");
console.log(typeof stdnames);
console.log(stdnames[2][1]);

let arr = ["hello", "world", 0, 1.3, -5];
console.log(arr);
console.log(typeof arr);

// arrays are mutable
arr[0] = "hi"; // changing the first element

// arrays are mutable
console.log(arr);

// arrays methods
// (1) push method
arr.push("new element"); // adds a new element to the end of the array
console.log(arr);
// (2) pop method
arr.pop(); // removes the last element of the array
console.log(arr);
// (3) unshift method
arr.unshift("first element"); // adds a new element to the beginning of the array
console.log(arr);
// (4) shift method
arr.shift(); // removes the first element of the array
console.log(arr);