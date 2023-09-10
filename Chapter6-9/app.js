
//Exercise 1
// var a = 10;

// // Display the initial value of 'a'
// document.write("Result:<br>");
// document.write("The value of a is: " + a + "<br><br>");

// // Increment 'a' with the pre-increment operator (++a)
// var preIncrement = ++a;

// // Display the result of pre-increment and the updated value of 'a'
// document.write("The value of ++a is: " + preIncrement + "<br>");
// document.write("Now the value of a is: " + a + "<br><br>");
// // Increment 'a' with the post-increment operator (a++)
// var postIncrement = a++;

// // Display the result of post-increment and the updated value of 'a'
// document.write("The value of a++ is: " + postIncrement + "<br>");
// document.write("Now the value of a is: " + a + "<br><br>");

// // Decrement 'a' with the pre-decrement operator (--a)
// var preDecrement = --a;

// // Display the result of pre-decrement and the updated value of 'a'
// document.write("The value of --a is: " + preDecrement + "<br>");
// document.write("Now the value of a is: " + a + "<br><br>");
// // Decrement 'a' with the post-decrement operator (a--)
// var postDecrement = a--;

// // Display the result of post-decrement and the final value of 'a'
// document.write("The value of a-- is: " + postDecrement + "<br>");
// document.write("Now the value of a is: " + a + "<br>");










//Exercise 3

// // Prompt the user to enter their name
// var userName = prompt("Please enter your name:");

// // Check if the user entered a name
// if (userName !== null) {
//     // Display a personalized greeting
//     alert("Hello, " + userName + "! Welcome to our website.");
// }








//Exercise 4

//  // Prompt the user to enter a number or use 5 as the default
//  var userNumber = prompt("Enter a number for the multiplication table (default is 5):");

//  // Convert the user input to a number
//  userNumber = parseFloat(userNumber);

//  // Check if the user entered a valid number or use 5 as the default
//  if (isNaN(userNumber)) {
//      userNumber = 5; // Default to 5 if not a valid number
//  }

//  // Display the multiplication table for the entered number
//  document.write("<h1>Multiplication Table for " + userNumber + "</h1>");
//  for (var i = 1; i <= 10; i++) {
//      var result = userNumber * i;
//      document.write(userNumber + " x " + i + " = " + result + "<br>");
//  }










//Exercise 6

  // a) Take three subjects' names from the user
  var subject1 = prompt("Enter the name of the first subject:");
  var subject2 = prompt("Enter the name of the second subject:");
  var subject3 = prompt("Enter the name of the third subject:");

  // b) Total marks for each subject is 100
  var totalMarks = 100;

  // c) Take obtained marks for the first subject from the user
  var obtainedMarks1 = parseFloat(prompt("Enter obtained marks for " + subject1 + ":"));

  // d) Take obtained marks for the remaining 2 subjects from the user
  var obtainedMarks2 = parseFloat(prompt("Enter obtained marks for " + subject2 + ":"));
  var obtainedMarks3 = parseFloat(prompt("Enter obtained marks for " + subject3 + ":"));

  // Calculate total marks and percentage
  var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
  var percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

  // Display the results in a table
  document.write("<h2>Result:</h2>");
  document.write("<table border='1'>");
  document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
  document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td></tr>");
  document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td></tr>");
  document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td></tr>");
  document.write("<tr><th>Total</th><th>" + (totalMarks * 3) + "</th><th>" + totalObtainedMarks + "</th></tr>");
  document.write("<tr><th>Percentage</th><th colspan='2'>" + percentage.toFixed(2) + "%</th></tr>");
  document.write("</table>");