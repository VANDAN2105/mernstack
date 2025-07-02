let arr =[1,2,3,4,5,2,3];
console.log(arr);
let num = prompt("enter your choice");
num = Number(num); // Convert input to number
let i = arr.indexOf(num);
while(i != -1){
   arr.splice(i,1);
   i = arr.indexOf(num);
}
console.log(arr);

/*
let arr=[1,2,3,4,5,6,2,3];
let num=2;
for(let i=0;i<arr.length;i++){
   if(arr[i]==num){
      arr.splice(i,1);
   }
}
   console.log(arr);
*/