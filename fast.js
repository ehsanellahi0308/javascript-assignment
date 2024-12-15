const userAge = prompt("Enter your age:");
const age = Number(userAge);

if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}