// object literals

const student = {
    name :"shradha",
    age:23,
    marks:94,
    city:"delhi"

};
console.log(student);

const item ={
    price:20,
    discount : "no",
    color :["pink","red"]
};

// object literals using the concept of an Instagram post:

const instaPost = {
    username: "cool_user123",
    caption: "Enjoying the sunset! 🌅",
    likes: 150,
    comments: ["Beautiful!", "Wow!", "Amazing shot!"],
    isPublic: true
};

// get values 

console.log(instaPost.likes);
console.log(instaPost["likes"]);
// js automatically converts objects key to strings even if we use number as a key

// nested objects
let classinfo = {
    aman: {
        grade:"A+",
        city:"delhi"
    },
    shradha :{
        grade :"A",
        city:"ahmedabad"
    },
    
}
console.log(classinfo);
console.log(classinfo.aman.city);

// arrays of objects

const classes = [
     {
        name:"aman",
        grade:"A+"
     },
     {
        name:"shradha",
        grade:"A"
     },
     {}
]
console.log(classes[0].name);
