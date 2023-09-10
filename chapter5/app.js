// // EXERCISE1
// var number1 = parseFloat(prompt("Enter the first number:"));
// var number2 = parseFloat(prompt("Enter the second number:"));
// var result = number1 + number2;
// document.write("The sum of " + number1 + " and " + number2 + " is " + result);


// EXERCISE2
// var number1 = parseFloat(prompt("Enter the first number:"));
// var number2 = parseFloat(prompt("Enter the second number:"));
// document.write("The value of number1 = " + number1 + " and  value of number2 = " + number2);


// var additionResult = number1 + number2;

// // Perform subtraction
// var subtractionResult = number1 - number2;

// // Perform multiplication
// var multiplicationResult = number1 * number2;

// // Perform division
// var divisionResult = number1 / number2;

// // Perform modulus
// var modulusResult = number1 % number2;

// // Display the results in the browser
// document.write(" Addition Result: " + additionResult + "<br>");
// document.write("Subtraction Result: " + subtractionResult + "<br>");
// document.write("Multiplication Result: " + multiplicationResult + "<br>");
// document.write("Division Result: " + divisionResult + "<br>");
// document.write("Modulus Result: " + modulusResult + "<br>");



// EXERCISE3


// var myVariable;

//     // b. Show the value of the variable after declaration
//     document.write("Value after variable declaration is: " + myVariable + "<br>");

//     // c. Initialize the variable with some number
//     myVariable = 5;

//     // d. Show the initial value of the variable
//     document.write("Initial value: " + myVariable + "<br>");

//     // e. Increment the variable
//     myVariable++;

//     // f. Show the value of the variable after increment
//     document.write("Value after increment is: " + myVariable + "<br>");

//     // g. Add 7 to the variable
//     myVariable += 7;

//     // h. Show the value of the variable after addition
//     document.write("Value after addition is: " + myVariable + "<br>");

//     // i. Decrement the variable
//     myVariable--;

//     // j. Show the value of the variable after decrement
//     document.write("Value after decrement is: " + myVariable + "<br>");

//     // k. Show the remainder after dividing the variable's value by 3
//     var remainder = myVariable % 3;

//     // l. Show the remainder
//     document.write("The remainder is: " + remainder + "<br>");




//EXERCISE 4
// Cost of one movie ticket in PKR
var ticketPrice = 600;

// Number of tickets to buy
var numberOfTickets = 5;

// Calculate the total cost
var totalCost = ticketPrice * numberOfTickets;
// Display the total cost in the browser
document.write("The total cost to buy " + numberOfTickets + " tickets to a movie is RS " + totalCost);




//EXERCISE 5
// Define the number for the multiplication table
var number = 4;

// Display the multiplication table in the browser
document.write("<h1>Multiplication Table for " + number + "</h1>");
for (var i = 1; i <= 10; i++) {
    var result = number * i;
    document.write(number + " x " + i + " = " + result + "<br>");
}



//EXERCISE 6
// a. Store a Celsius temperature into a variable.
var celsiusTemperature = 25;

// b. Convert it to Fahrenheit & output "NNoC is NNoF".
document.write("<h1>CONVERTING IT TO FAHRENHEIT </h1>");
var fahrenheitTemperature = (celsiusTemperature * 9 / 5) + 32;
document.write(celsiusTemperature + "°C is " + fahrenheitTemperature + "°F<br>");

// c. Store a Fahrenheit temperature into a variable.
var fahrenheitTemperature2 = 77;

// d. Convert it to Celsius & output "NNoF is NNoC".
document.write("<h1>CONVERTING FAHRENHEIT TO CELCIUS </h1>");
var celsiusTemperature2 = (fahrenheitTemperature2 - 32) * 5 / 9;
document.write(fahrenheitTemperature2 + "°F is " + celsiusTemperature2 + "°C");