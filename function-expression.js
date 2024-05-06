// Mike Jenkins
// 04 APR 20XX
// JS Function Expression Example

// Assign function to a variable named calcSum
// In other words, our function has no name to start with so we
// are using the variable name (calcSum) as the function name
const calcSum = function(num1, num2){
    return num1 + num2;
}

// Find the sum by calling the function
// Result of calculation is returned from the function and
// stored in a NEW variable named answer
const answer = calcSum(12, 5);
// Option 1
// Displaying the result of the calculation in the browser console
console.log(`(Option 1): The sum is: ${answer}`);
// Option 2
// Calling the function calcSum from within the template string
console.log(`(Option 2): The sum is: ${calcSum(20, 4)}`);
// Option 3
// Calling the function calcSum from within the template string
const firstNum = 20;
const secondNum = 4;
console.log(`(Option 3): The sum is: ${calcSum(firstNum, secondNum)}`);

// My function rewritten as a FUNCTION EXPRESSION
// FUNCTION #2

function welcomeUser (fName) {
    // Welcome the user by their first name
    return `Welcome to Career Tech, ${fName}!`;
}
// Call the welcomeUser function and use the alert ( ) method to display the welcome message in an alert box
const myName = 'Dax';
alert(welcomeUser(myName));








// My function rewritten as a FUNCTION EXPRESSION
// FUNCTION #3
function showBiography (fName, lName, userAge) {
    // Build a template string containing the user's full name and age
    return `Hello! My name is ${fName} ${lName} and I am ${userAge} years old.`;
}
// Call the showBiography function and display the info
// about the user in the browser console
const firstName = 'Dax';
const lastName = 'Dewey';
const age = 18;
console.log(showBiography(firstName, lastName, age));

