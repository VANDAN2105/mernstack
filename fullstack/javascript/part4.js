console.log("hello world");
// loops : print 1 to 10 using loops

for(let i =1;i<=10;i++){
    console.log(i);
}
// odd nums from 1 to 15
for(let i=1; i <= 15; i += 2){  // i have to define i again bcz in above it is only defined for the loop as it is inside the loop
    console.log(i); 
}

// nested loops

for(let i=1;i<=3;i++){
     for(let j=1;j<=3;j++){
        console.log(j);
     }
}

/*
Write a JavaScript program using nested loops to print the following pattern (a multiplication table from 1 to 5):
1  2  3  4  5
2  4  6  8 10
3  6  9 12 15
4  8 12 16 20
5 10 15 20 25
*/ 

for(let i=1;i<=5;i++){
    console.log(`puter loop count ${i}`)
    for(j=1;j<=5;j++){
        console.log(i*j);
    }
}

for(let i=1;i<=5;i++){
    let row = "";
    for(let j=1;j<=5;j++){
        row = row + (i*j) + " ";
    }
    console.log(row);
}

// while loop
 

// let favmovie="avtar";
// let movie =prompt("guess the movie");
// while((favmovie != movie)&&(movie!="quit")){
//     console.log("wrong");
//     movie = prompt("try again");
// }

// if(movie==favmovie){
//     console.log("congrats");
// }
// else{
//     console.log("you quit");
// }

// break
/*Write a JavaScript program that asks the user to guess a secret number between 1 and 10.*/

//method-1
// let snum=9;
// let guess=prompt("guess the number");
// while(true){
//       if(guess=="quit"){
//         console.log("you quit");
//         break;
//       }
//       else if(guess==snum){
//         console.log("congrats");
//         break;
//       }
//       else{
//         guess = prompt("wrong guess , try again");
//       }
// }

//method-2
// let snum=9;
// let guess = prompt("guess the  value");
// if(guess==snum){
//     console.log("congrats");
// }
// else if(guess=="quit"){
//     console.log("you quit");
// }
// else{
//     while((guess!=snum)&&(guess!="quit")){
        
//     console.log("wrong number");
//     guess=prompt("try again");
    
//     }
    
//}

// method-3
let snum=9;
let guess=prompt("guess the number");
while((guess!=snum)&&(guess!="quit")){
    console.log("wrong");
    guess=prompt("try again");

}
if(guess==snum){
    console.log("congrats");
}
else if(guess=="quit"){
    console.log("you quit");
}
else{}

// loops in arrays

let fruits =["apple","mango","orange","pinapple","banana","guava"];
for(let i=0;i<fruits.length;i++){
    console.log(i , fruits[i]);
}

/*
Given a 2D array (nested array) representing a tic-tac-toe board like this:
let board = [
  ['X', 'O', 'X'],
  ['O', 'X', 'O'],
  ['X', 'O', 'X']
];
*/
let board = [
  ['X', 'O', 'X'],
  ['O', 'X', 'O'],
  ['X', 'O', 'X']
];

for (let i = 0; i < board.length; i++) {
    let raw="";
    for (let j = 0; j < board[i].length; j++) {
        raw = raw + board[i][j] + " ";
    }
    console.log(raw);
}

// for of loops

let fruit = ["apple","mango","guava","pinapple","orange","banana"];
for(fruitss of fruit){
    console.log(fruitss);
}

for(char of "apna college"){
    console.log(char);
}

// Given a 2D array of numbers, write a JavaScript program using nested for...of loops to print the sum of each row.

let arr = [
    [2,4,6],
    [1,3,5],
    [7,8,9]
];

for(arry of arr){
    let sum =0 ;
    for(list of arry){
        sum = sum+list;
    }
    console.log(`sum = ${sum}`); 
}