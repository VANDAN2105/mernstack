let a=5;
let name="pavan";
console.log(a);
console.log(name);

let pencilprice = 10;
let eraserprice = 5;
console.log( ` total price is : ${pencilprice + eraserprice} rupees`);  // template literal
console.log("total price is :" , pencilprice + eraserprice, "rupees"); // comma operator
let totalprice = "total price is : " + ( pencilprice + eraserprice   ) + " rupees";
console.log(totalprice);

let age =26;
console.log(age>=18);

let n=5;
let newname='5';
console.log(n==newname); // true > instead of newname having string type data it only consider 5 from '5' and gives true
console.log(5==newname);  // true > == is used as weak operator which ignores type checking
console.log(n=='5'); // true
console.log(5=='5'); // true
console.log(n===newname);  // false >  === is used as strict operator which checks type and value
console.log(5==='5'); // false
console.log(n===5); // true

