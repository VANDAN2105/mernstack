/**
 * JavaScript Conditional Statements Examples
 * This script demonstrates:
 * 1. Age check for voting/driving (if-else)
 * 2. Traffic light simulation (if-else)
 * 3. Logical operators (&&, ||) for movie entry and discounts
 * 4. Truthy/falsy values
 * 5. Switch case usage
 */

// 1. Age check for voting/driving
// Example Question: Check if a person can vote or drive based on their age.
let age = 29;

if (age < 18) {
    console.log("You can't vote");
}
if (age >= 18) {
    console.log("You can vote and drive also");
}

// 2. Traffic light simulation
// Example Question: Print "stop", "go", or "wait" based on the traffic light color.
let color = "red";

if (color == "red") {
    console.log("Stop");
}
if (color == "green") {
    console.log("Go");
}
if (color == "yellow") {
    console.log("Wait");
}

// 3. Logical operators (&&)
// Example Question: Can a person enter a movie theater? (Must be an adult and have a ticket)
let newage = 25;
let hasticket = "yes";

if (age >= 18 && hasticket == "yes") {
    console.log("You can enter the movie theater");
}

// 4. Logical operators (||, &&)
// Example Question: Does a person get a discount? (Member or has coupon, and total > 100)
let total_amt = 90;
let has_membership = "yes";
let has_coupon = "yes";

if ((has_membership == "yes" || has_coupon == "yes") && total_amt >= 100) {
    console.log("You are eligible for discount, thanks for shopping with us");
} else {
    console.log("You are not eligible for discount, thanks for shopping with us");
}

// 5. Truthy and falsy values
// Example Question: What happens if you use 0 in an if statement?
if (0) {
    console.log("This is a truthy value");
} else {
    console.log("This is a falsy value");
}

// 6. Switch case usage
// Example Question: Print a message based on the day of the week.
/* "It's a weekday" if the day is "Monday", "Tuesday", or "Wednesday"
"It's almost weekend" if the day is "Thursday" or "Friday"
"It's weekend" if the day is "Saturday" or "Sunday"
For any other value, print "Invalid day" */
let day = "wednesday";

switch (day) {
    case "monday":
    case "tuesday":
    case "wednesday":
        console.log("It's a week day");
        break;
    case "thursday":
    case "friday":
        console.log("It's almost weekend");
        break;
    case "saturday":
    case "sunday":
        console.log("It's a weekend");
        break;
    default:
        console.log("Another day");
        break;
}

/* alert("End of the script"); */
console.error("This is an error message"); 

let name =prompt('Enter your name:');
console.log("your name is ", name , "thanks for using our service");