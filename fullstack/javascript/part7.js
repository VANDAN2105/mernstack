// part 7
// this keyword
const student={
    name:"shradha",
    age:23,
    math:85,
    sci:90,
    phy:50,
    eng:60,
    guj:25,
    getavg(){
        let avg=(this.eng+this.math+this.phy)/3;
        console.log(avg);
    }
}
console.log(student.getavg());

// try and catch

// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log(a); // will through error and code after that not printed
// console.log("hello");
// console.log("hello");
// console.log("hello");

console.log("hello");
console.log("hello");
console.log("hello");
try{
    console.log(a);  // through error as a not defoned
} catch{
    console.log("a is not defined");  // it will catch error and print this statement 
}
console.log("hello");
console.log("hello");
console.log("hello");

// arrow function
const func =(a,b) =>{
    return a+b;
}
console.log(func(4,3));
const power =(a,b) =>{
    return Math.pow(a,b);
}
console.log(power(2,10));

const cube=n=>{  //in the case of one perameter , () becomes optional
    return n*n*n;
}
console.log(cube(10));

// implicit return

const mul = (a,b) => (a * b);
console.log(mul(5,3));

// set timeout

console.log("set timeout");
setTimeout(()=>{
    console.log("hello there");
},4000);
console.log("hello world");

/* method 2
function greet() {
    console.log("hello there");
}
setTimeout(greet, 4000);
 */

/*
setTimeout(function greet() {
    console.log("hello there"); 
}, 4000);
 */

/*
const greet = () => {
    console.log("hello there");
};
setTimeout(greet, 4000);
 */

// set interval
let id =setInterval(()=>{
    console.log("gello world");
},3000);
clearInterval(id);

// this in arrow function

const student2={
    name:"shradha",
    marks :65,
    getname:function(){
        console.log(this);  // prints student2
        return this.name;    
    },
    getmarks:()=>{
        console.log(this); // prints window
        return this.marks;
    },
    getinfo1:function(){
        setTimeout(()=>{   // this = this value of calling object/function that call the function that contain this
             console.log(this.marks);
             console.log(this);
        },2000);
    },
    getinfo2:function(){
        setTimeout(random=function(){
            console.log(this);
          return this.marks;  // this = value of calling object that call the function that contain this
        },2000);
    }
}

console.log(student2.getname());
console.log(student2.getmarks());
console.log(student2.getinfo1());
console.log(student2.getinfo2());


