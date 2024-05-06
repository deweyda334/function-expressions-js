## Project Files

Add these files to a new GitHub repo: ***function-expressions-js***
- index.html
- main.js

## Functions 101

> ***function:*** A named block of code that:
> - performs a specific action or task or returns a value
> - is reusable
> - makes your scripts shorter and more *modular* (customizable like Lego blocks)

In JavaScript, you can create a function in several ways:
- *traditional function* (using the keyword *function*)
- a *function expression* (assigning a function to a variable)
- an *anonymous function* (creating an unnamed function)
- an *arrow function* (a shorter, more modern way to write a function)

## Overview

In this activity, you'll learn how to convert a traditional function into a function expression.

**Step 1:** Review the comments and examples in:

[function-expression.js](/function-expression.js)

**Step 2:** Rewrite the sample traditional functions in this document as function expressions.

**Step 3:** Run your script to make sure your function expressions work as expected.

## Sample Traditional Functions

### Function 1:
```javascript
function calcProduct (num1, num2) {
    // Calculate the product of two numbers
    return num1 * num2;
}

// Assign the result of the calculation to a
// variable named answer
const firstNum = 4;
const secondNum = 5;
const answer = calcProduct(firstNum, secondNum);
// Show the answer in the browser console by
// building a template string, i.e., a fill-in-the-blank sentence
console.log(`The product of ${firstNum} and ${secondNum} is: ${answer}`);
```
### calcProduct ( ) Rewritten as a Function Expression:
```javascript
// Assigning the function to a variable named product
const calcProduct = function (num1, num2) {
    return num1 * num2;
}

// Call the function and show the answer in the browser console
const firstNum = 4;
const secondNum = 5;
console.log(`The product of ${firstNum} and ${secondNum} is: ${calcProduct(firstNum, secondNum)}`);
```

### Function 2:
Rewrite the welcomeUser ( ) function as a **function expression**.  Use the JS alert ( ) method to display the output in an alert box.

```javascript
function welcomeUser (fName) {
    // Welcome the user by their first name
    return `Welcome to Career Tech, ${fName}!`;
}
// Call the welcomeUser function and use the alert ( ) method to display the welcome message in an alert box
const firstName = 'Joshua';
alert(welcomeUser(firstName));
```

### Function 3:
Rewrite the showBiography ( ) function as a **function expression** and use console.log ( ) to display the output in your browser console.

```javascript
function showBiography (fName, lName, userAge) {
    // Build a template string containing the user's full name and age
    return `Hello! My name is ${fName} ${lName} and I am ${userAge} years old.`;
}
// Call the showBiography function and display the info
// about the user in the browser console
const firstName = 'Tania';
const lastName = 'Rascia';
const age = 24;
console.log(showBiography(firstName, lastName, age));
```







