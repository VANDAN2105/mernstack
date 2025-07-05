// functions

console.log("functions");

function printhel(){
    console.log("hello world");
}
// calling
printhel();
printhel();
printhel();
printhel();
printhel();

// create a function for rolling a dice which give any value btw 1 to 6

    
function diceroll(){
    let num = Math.floor(Math.random()*6) +1;
     console.log(num);
}

let guess = prompt("do you want to roll?");
while(true){
    if(guess=="roll"){
        diceroll();
    }
    else if(guess=="quit"){
        console.log("you quit");
        break;
    }
    else{
    console.log("wroong input");
    guess = prompt("wront imput , try again");
    }
    guess=prompt("do you want to roll ?");
}

// functions with arguments

function printinfo(name,age){
    console.log(`${name}'s age is ${age}`);
}

printinfo("aman",25);
printinfo("karan");
console.log

// function for ptinting table

function printtabel(n){
    for(let i =1; i<=10; i++){
        console.log(`${n} * ${i} = ${i*n}`);
    }
}

function table(p){
    for(let t=p;t<=p*10;t +=p){
        console.log(t);
    }
}

printtabel(10);
table(10);

// return keyword

function sum(a,b){
    console.log(a+b);
    console.log(a+b);
    return a+b;
    console.log(a+b);
    console.log(a+b);
}
sum(3,6); // it will return this sum value to to the function sum but it can't print any value to console 
// to print return value we have to use console.log

let s = sum(3,6);
console.log(s);
console.log(sum(3,6));

// to print sum of 3 numbers
console.log(sum((1,2),3));

// code after return keyword wont't be executed
// check line 72 ,73


function isadult(age){
    if(age>=18){
        return "adult";
    }
    else{
        return "not adult";
    }

    console.log("hello world");  // vscode alerts "unreachable code detected"
}
console.log(isadult(25));
// create a function which prints sum of 1 to n

function sun(n){
    let sun=0;
    for(i=1;i<=n;i++){
        sun+=i;
    }
    console.log(sun);
}

sun(3);
sun(50);

//  function that returns concatination of all strings in array
let arr =["hello","world","coding"];

let concate=50; // globle scope
function concat(){
    let concate=""; // function scope
       for(let i=0;i<arr.length;i++){
           concat=concat+arr[i];
       }
       console.log(concate);
}
concat();
// function scope
console.log(concate); // concat var can't be accesible to the outside of function
// because it is defined inside the function
// after we define another concate outside the function , now i can be pritable
// but whenever we call function it will always give function variable more priority
// block scope
// lexical scope
//  function outerHeight(){
//    let x =3;
//    let y= 5;
//    function innerHeight(){
//     console.log(x);
    
//    }
//    innerHeight();
   
//  } 
//  console.log(outerHeight());
//  innerHeight();

function outer() {
    let outerVar = "I am outside!";
    function inner() {
        let innerVar = "I am inside!";
        console.log(outerVar); // Can inner access outerVar?
    }
    inner();
  //  console.log(innerVar); // Can outer access innerVar?
}
outer();

// hoisting , check it in web

let greet = "hello";
function changegreet(){
    let greet="namaste";
    function innergreet(){
        console.log(greet);
    }
    console.log(greet);
    innergreet(); // inner function can only accessible in outerfunction calling , we can't call it outside the outer function.
}
console.log(greet);
changegreet();

console.log(greet); //outer value changes bcz of function calling


// function expressions
// define functions using variables

let gum= function(a,b){
    console.log(a+b);
}
gum(4,5);

let hello = function(){
    console.log("hello world");
}
hello();

// higher order function (a function )

let namaste = function(){
        console.log("namaste");
}

// each time we want to print namaste we have to call namaste function

let multiplenamaste=function(namaste,count){
    for(i=1;i<=count;i++){
        namaste();
    }
}
//  it is called higher function which use function as arguments
multiplenamaste(namaste,5);

// higher order function
// can returns functions
// create a fectory function which returns even or odd checking functions as per user request





let q = prompt("enter the number");
let request = prompt("enter your request");
let funcfactory = function(request){
    if(request=="odd"){
        let odd =function(q){
        console.log(!(q%2==0));
        }
        return odd;
    }
    else if(request=="even"){
        let even =function(q){
        console.log(q%2==0);
        }
        return even;
    }
    else{
        console.log("wrong input");
    }
}
let test= funcfactory(request);
test(q);

// note : return means it returning function itself
/*
When you do return odd; or return even; inside your funcfactory function, you are not calling the odd or even function at that moment.
Instead, you are returning the function itself (the function definition), not its result.

You call funcfactory(request)

1 >  If request is "odd", it returns the odd function (not the result of calling it).
     If request is "even", it returns the even function.
2 >  You store the returned function in a variable:
     let test = funcfactory(request);   
3 >  You call the returned function:
     test(q); // Now the function (odd or even) is actually called with q as argument       
*/ 

// function methods
// functions defining in the form of objects

const calculator = {
    sum:function(a,b){
        return a+b;
    },
    sub:function(a,b){
        return a-b;
    },
    mul:function(a,b){
        console.log(a*b); // this can be written also
    }


};
console.log(calculator.sum(3,5));
calculator.mul(5,6);
