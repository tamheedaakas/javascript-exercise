// //EXERCISE1
// var studentNames = [];



// //EXERCISE2
// var studentNames = new Array();
// var studentNames = [];


// //EXERCISE3
// var fruits = ["apple", "banana", "cherry", "date"];




// //EXERCISE4
// var numbers = [1, 2, 3, 4, 5];



// //EXERCISE5
// var booleanArray = [true, false, true, true, false];




// //EXERCISE6
// var mixedArray = ["apple", 42, true, "banana", false, 7];





//EXERCISE7
// Declare and initialize the array with education qualifications
// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// // Generate HTML to display the qualifications in the browser
// var output = "<h2>Educational Qualifications in Pakistan:</h2><ol>";

// for (var i = 0; i < qualifications.length; i++) {
//   output += "<li>" + qualifications[i] + "</li>";
// }

// output += "</ol>";

// // Display the qualifications in the browser
// document.write(output);















//EXERCISE8
// Create an array to store student names
var studentNames = [];

// Create an array to store scores
var studentScores = [];

// Assume total marks are 500 for each student
var totalMarks = 500;

// Input scores and names for three students
for (var i = 0; i < 3; i++) {
  var studentName = prompt(`Enter the name of student ${i + 1}:`);
  var studentScore = parseInt(prompt(`Enter the score for ${studentName}:`));

  studentNames.push(studentName);
  studentScores.push(studentScore);
}

// Display the scores and percentages of students
for (var i = 0; i < 3; i++) {
  var studentName = studentNames[i];
  var studentScore = studentScores[i];

  // Calculate the percentage
  var percentage = (studentScore / totalMarks) * 100;

  // Display the score and percentage
  alert(`Score of ${studentName} is ${studentScore}. Percentage: ${percentage.toFixed(2)}%`);
}











//EXERCISE8


