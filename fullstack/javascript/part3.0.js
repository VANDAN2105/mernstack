// indexof & include elements in array

let primary = ['red', 'blue', 'green', 'purple', 'red'];
console.log(primary.indexOf('red'));
console.log(primary.indexOf('yellow')); // -1 if not found
console.log(primary.includes('blue')); // true
console.log(primary.includes('yellow')); // false

// concatenation of arrays
let secondary =["pink" , "lion" , 4 ,-2];
let third = primary.concat(secondary);
console.log(third);

// splice in array

let colors = ["orange", "yellow", "red", "pink", "green", "blue" ,"purple","black"];
colors.splice();
console.log(colors);

console.log(colors.splice(6));
console.log(colors);

console.log(colors.splice(0,2));
console.log(colors);

console.log(colors.splice(1,1,"indigo","violet"));
console.log(colors); // final output = red , indigo , violet , green , blue

// if we want to add white in btw indigo and violet
console.log(colors.splice(2,0,"white"));
console.log(colors); // final output = red , indigo , white , violet , green , blue

// method 2
// console.log(colors.splice(1,1,"indigo","white"));
// console.log(colors);

// sorting of an array
console.log(colors.sort());
/*
question : return the index of "javascript" from the given array  , if it was reversed 
*/ 
let languages = ["python", "java", "javascript", "c++", "ruby","c#", "php", "swift"];
console.log(languages.reverse().indexOf("javascript"));

// array reference
let a,b;
console.log([a]==[a]); // all of these shows false because when we save an array in a variable, it is saved as a reference, not as a value.
console.log([1]==[1]);  // so when we compare two arrays, it compares the reference, not the value. inshort it compare their addresses in which they are stored in memory.
console.log(1==1); // gives true
console.log(a==a);   // gives true
a=b;
console.log(a==b); // gives true because now both a and b are pointing to the same reference in memory.

let arr1 = [1,2,3];
let arrcopy = arr1;
console.log(arrcopy);
arrcopy.push(4);
console.log(arr1,arrcopy); // arr1 is also changed because arrcopy is a reference to arr1
console.log("as above output arr1 will also changed because arrcopy is a reference to arr1");
// now if you modify anyone of this 2 arrays , another one will automatically change

// constant arrays

const arr2 =[1,2,3];
arr2.push(4); // doesn't return error we can change the elements in constant array the only thing which is constant is  arr2 name
arr2.pop(4); // we can also remove elements from constant array
console.log(arr2);
// arr2 = [1,2,3]; // this will give error because we are trying to change the reference of arr2

// nested arrays
let nested = [[1,2,3],[4,5,6],[7,8,9]];
console.log(nested.length);
console.log(nested);
console.log(nested[2]);
console.log(nested[2][2]);

// practice que. create a tic-tac-toe board
let ticTacToe = [
    ['X', 'O', 'X'],
    ['O', 'X', 'O'],
    ['X', 'O', 'X']
];
console.log(ticTacToe);

// write a program to print any first n elements of an array
let arr3 = [ 1,2,3,4,5,6,-6];
let n = prompt("enter the value of n");
console.log(arr3.slice(0,n));

// write a program to check wether the string is blank or not 
let str= prompt("please enter the string");
if(str.length==0){
    console.log("string is blank");
}
else{
    console.log("string is not blank");
    console.log(str);
}

// write a program to check the character at given index is capital of small 
let index =prompt("enter the string for capital checking");
let i = prompt("enter the index");
if(index[i]==index[i].toUpperCase()){
    console.log(`the character at index ${i} is capital`);
    console.log(index[i]);
}
else{
    console.log(`the character at index ${i} is small`);
}

// Program to trim leading and trailing spaces from a string
let input = prompt("Enter a string with spaces:");
let trimmed = input.trim();
console.log("Trimmed string:", trimmed);

// Program to check if an element exists in an array or not
let arr = ["apple", "banana", "orange", "grape"];
let element = prompt("Enter the element to search:");
if (arr.includes(element)) {
    console.log(`${element} exists in the array.`);
} else {
    console.log(`${element} does not exist in the array.`);
}