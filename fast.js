const num1 = Number(prompt("Enter the first number:"));
const num2 = Number(prompt("Enter the second number:"));
if (num1 > num2) {
    console.log(`The larger number is: ${num1}`);
} else if (num2 > num1) {
    console.log(`The larger number is: ${num2}`);
} else {
    console.log("Both numbers are equal.");
}
