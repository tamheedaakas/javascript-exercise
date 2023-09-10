//Exercise 1
// // Get user input
// var char = prompt("Enter a character (number or string):");

// // Check if the input is a number
// if (!isNaN(char)) {
//     alert(char + " is a number.");
// } else {
//     // Check if the input is an uppercase letter
//     if (char >= 'A' && char <= 'Z') {
//         alert(char + " is an uppercase letter.");
//     }
//     // Check if the input is a lowercase letter
//     else if (char >= 'a' && char <= 'z') {
//         alert(char + " is a lowercase letter.");
//     }
//     else {
//         alert(char + " is neither a number nor a letter.");
//     }
// }








//EXERCISE2
// // Get user input for the first integer
// var firstInteger = parseInt(prompt("Enter the first integer:"));

// // Get user input for the second integer
// var secondInteger = parseInt(prompt("Enter the second integer:"));

// // Check if both integers are equal
// if (firstInteger === secondInteger) {
//   alert("Both integers are equal.");
// } else {
//   // Determine the larger integer
//   if (firstInteger > secondInteger) {
//     alert(`The larger integer is: ${firstInteger}`);
//   } else {
//     alert(`The larger integer is: ${secondInteger}`);
//   }
// }







//EXERCISE3

// // Get user input for a number
// var number = parseFloat(prompt("Enter a number:"));

// // Check if the number is positive, negative, or zero
// if (number > 0) {
//   alert("The number is positive.");
// } else if (number < 0) {
//   alert("The number is negative.");
// } else {
//   alert("The number is zero.");
// }







//EXERCISE4
// // Get user input for a single character
// var character = prompt("Enter a single character:").toLowerCase(); // Convert to lowercase to handle both cases

// // Check if the character is a vowel
// var isVowel = false;

// if (character.length === 1) {
//   switch (character) {
//     case 'a':
//     case 'e':
//     case 'i':
//     case 'o':
//     case 'u':
//       isVowel = true;
//       break;
//     default:
//       isVowel = false;
//   }
// }

// // Display the result
// if (isVowel) {
//   alert(`${character} is a vowel.`);
// } else {
//   alert(`${character} is not a vowel.`);
// }







//EXERCISE5
// // Step 1: Store the correct password in a variable
// var correctPassword = "MySecretPassword";

// // Step 2: Ask the user to enter their password
// var userPassword = prompt("Please enter your password:");

// // Step 3: Validate the passwords
// if (userPassword === null || userPassword === "") {
//   alert("Please enter your password.");
// } else if (userPassword === correctPassword) {
//   alert("Correct! The password you entered matches the original password.");
// } else {
//   alert("Incorrect password.");
// }







//EXERCISE6
// var greeting;
// var hour = 13;
// if (hour < 18) {
//     alert("Good day");
// } else {
//     alert("Good evening");
// }









//EXERCISE7
// Get user input for time in 24-hour format
var time = parseInt(prompt("Enter the time in 24-hour format (e.g., 1900 for 7pm):"));

// Initialize a variable to store the time period
var timePeriod;

// Check and categorize the time period
if (time >= 0 && time < 1200) {
    timePeriod = "morning";
} else if (time >= 1200 && time < 1700) {
    timePeriod = "afternoon";
} else if (time >= 1700 && time < 2100) {
    timePeriod = "evening";
} else if (time >= 2100 && time < 2400) {
    timePeriod = "night";
} else {
    timePeriod = "invalid";
}

// Display the result
if (timePeriod === "invalid") {
    alert("Invalid input. Please enter a valid time in 24-hour format.");
} else {
    alert(`It's currently ${timePeriod}.`);
}









