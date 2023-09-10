// //Exercise 1
// // Prompt the user to enter the city name
// var cityName = prompt("Enter the name of your city:");

// // Check if the user entered "Karachi" and display a welcome message
// if (cityName !== null && cityName.toLowerCase() === "karachi") {
//     alert("Welcome to the city of lights!");
// }










//Exercise 2
// Prompt the user to enter their gender
// var gender = prompt("Enter your gender (male or female):");

// // Check the gender and display the appropriate message
// if (gender !== null) {
//     if (gender.toLowerCase() === "male") {
//         alert("Good Morning Sir.");
//     } else if (gender.toLowerCase() === "female") {
//         alert("Good Morning Ma'am.");
//     } else {
//         alert("Sorry, we couldn't recognize your gender.");
//     }
// }















//Exercise 3

// // Prompt the user to enter the color of the traffic signal
// var signalColor = prompt("Enter the color of the traffic signal (red, yellow, or green):");

// // Check the signal color and set the message
// if (signalColor !== null) {
//     signalColor = signalColor.toLowerCase(); // Convert to lowercase for case-insensitive comparison
//     var message = "";

//     switch (signalColor) {
//         case "red":
//             message = "Must Stop";
//             break;
//         case "yellow":
//             message = "Slow";
//             break;
//         case "green":
//             message = "Move";
//             break;
//         default:
//             message = "Invalid signal color";
//             break;
//     }

//     // Create an HTML table to display the information
//     var table = "<table border='1'>";
//     table += "<tr><th>Signal Color</th><th>Message</th></tr>";
//     table += "<tr><td>" + signalColor + "</td><td>" + message + "</td></tr>";
//     table += "</table>";

//     // Display the table in the body of the page
//     document.body.innerHTML = table;
// }





//Exercise 4

// // Prompt the user to enter the remaining fuel in liters
// var remainingFuel = parseFloat(prompt("Enter the remaining fuel in your car (in liters):"));

// // Check if the remaining fuel is less than 0.25 liters and display a message
// if (!isNaN(remainingFuel) && remainingFuel < 0.25) {
//     alert("Please refill the fuel in your car.");
// }
// else {
//     alert("you are good to go")
// }








//Exercise 5
// var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
// }
// var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
// }
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// if (true){
//     alert("True");
//     }
//     if (false){
//     alert("False");
//     }
//     if("car" < "cat"){
//         alert("car is smaller than cat");
//         }







//Exercise 6

// Generate a random secret number between 1 and 10
var secretNumber = Math.floor(Math.random() * 10) + 1;

// Prompt the user to guess the number
var userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

// Check if the user's guess is correct or close enough
if (userGuess === secretNumber) {
    alert("Bingo! Correct answer.");
} else if (userGuess === secretNumber + 1 || userGuess === secretNumber - 1) {
    alert("Close enough to the correct answer.");
} else {
    alert("Sorry, that's not correct. The secret number was " + secretNumber + ".");
}


