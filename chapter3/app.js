//EXERCISE 1

var age = 22;
alert("I am " + age + " years old");


//EXERCISE 2
if (localStorage.getItem("visits") === null) {
   localStorage.setItem("visits", 1);
} else {
    var visits = parseInt(localStorage.getItem("visits"));
    visits++;
    localStorage.setItem("visits", visits);
}
var visitsCount = localStorage.getItem("visits");
alert("You have visited this site " + visitsCount + " times.");



//EXERCISE 3
var birthYear = 2002;

// Display the message in the browser
document.write("My birth year is " + birthYear + "<br>");
document.write("Data type of my declared variable is " + typeof(birthYear)  );




//EXERCISE 4
var visitorName = "John Doe";
var productTitle = "T-shirt";
var quantity = 5;
document.write(visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store.");