// Q:01
function displayDateTime() {
    let date = new Date();
    document.write(`${date}<br>`);
}

displayDateTime();

// Q:02
function greetUser(firstName, lastName) {
    alert(`Greetings ${firstName} ${lastName}!`);
}

let userFirstName = prompt('Enter First Name : ');
let userLastName = prompt('Enter Last Name : ');
greetUser(userFirstName, userLastName);

// Q:03
function sum(num1, num2) {
    return num1 + num2;
}

let inputNum1 = parseInt(prompt('Enter first number : '));
let inputNum2 = parseInt(prompt('Enter second number : '));
document.write(`The sum of ${inputNum1} and ${inputNum2} is ${sum(inputNum1, inputNum2)}<br>`);

// Q:04
// function calculator(num1, num2, operator){
//     switch(operator){
//         case '+':
//             return num1 + num2;
//         case '-':
//             return num1 - num2;
//         case '*':
//             return num1 * num2;
//         case '/':
//             return num1 / num2;
//         case '%':
//             return num1 % num2;
//         default:
//             return 'Invalid Input!';
//     }
// }

// Q:05
function square(num) {
    return num ** 2;
}

let inputNum = parseInt(prompt('Enter a number : '));
document.write(`The square of ${inputNum} is ${square(inputNum)}<br>`);

// Q:06
// function factorial(num){
//     if(num < 0) return undefined;
//     let fact = 1;
//     while(num > 0){
//         fact *= num;
//         num--;
//     }
//     return fact;
// }

// let num = parseInt(prompt('Enter a number : '));
// document.write(`The factorial of ${num} is ${factorial(num)}<br>`);

// Q:07
// function displayCount(start, end){
//     document.write(`Displaying Count : <br>`)
//     for(let i = start; i <= end; i++){
//         document.write(`${i} `);
//     }
// }

// let start = parseInt(prompt('Enter start number : '));
// let end = parseInt(prompt('Enter end number : '));

// displayCount(start, end)

// Q:08
// function hypotenuse(base, perpendicular) {
//   function square(num) {
//     return num ** 2;
//   }

//   return Math.sqrt(square(base) + square(perpendicular));
// }

// let base = parseInt(prompt("Enter Base : "));
// let perpendicular = parseInt(prompt("Enter Perpendicular : "));
// document.write(`Hypotenuse : ${hypotenuse(base, perpendicular)}<br>`);

// Q:09
// function areaOfRectangle(length, width) {
//   return length * width;
// }

// let length = 5;
// let width = 3;

// document.write(`Length : ${length}<br>`);
// document.write(`Width : ${width}<br>`);
// document.write(`Area (Arguments as value) : ${areaOfRectangle(5, 3)}<br>`);
// document.write(
//   `Area (Arguments as Variables) : ${areaOfRectangle(length, width)}<br>`
// );

// Q:10
// function isPalindrome(word) {
//   let len = word.length;
//   for (let i = 0; i < parseInt(len / 2); i++) {
//     if (word.charAt(i) != word.charAt(len - (i + 1))) {
//       return false;
//     }
//   }
//   return true;
// }

// let word = prompt("Enter a word : ");
// if (isPalindrome(word)) document.write(`${word} is palindrome.<br>`);
// else document.write(`${word} is not palindrome.<br>`);

// Q:11
// function capitalizeSentence(sentence) {
//   sentence = sentence[0].toUpperCase() + sentence.slice(1, sentence.length);
//   let len = sentence.length;
//   for (let i = 0; i < len; i++) {
//     if (sentence[i] === " ") {
//       sentence =
//         sentence.slice(0, i + 1) +
//         sentence[i + 1].toUpperCase() +
//         sentence.slice(i + 2, len);
//     }
//   }
//   return sentence;
// }

// let sentence = "the quick brown fox";
// document.write(`Input String  : ${sentence}<br>`);
// document.write(`Output String : ${capitalizeSentence(sentence)}<br>`);

// Q:12
// function longestWord(sentence) {
//   let splitSentence = sentence.split(" ");
//   let max = splitSentence[0];
//   for (word of splitSentence) {
//     if (word.length > max.length) max = word;
//   }
//   return max;
// }

// let sentence = "Web Development Tutorial";
// document.write(`Input String : ${sentence}<br>`);
// document.write(`Longest Word : ${longestWord(sentence)}<br>`);

// Q:13
// function countOccurrence(sentence, character) {
//   let count = 0;
//   for (let i = 0; i < sentence.length; i++) {
//     if (sentence[i] == character) count++;
//   }
//   return count;
// }

// let sampleString = "JSResourceS.com";
// let character = "o";

// document.write(`Sample String : ${sampleString}<br>`);
// document.write(`Character to Search : ${character}<br>`);
// document.write(
//   `Number of Occurrences of ${character} : ${countOccurrence(
//     sampleString,
//     character
//   )}<br>`
// );

// Q:14
// function calcCircumference(radius) {
//   return 2 * Math.PI * radius;
// }

// function calcArea(radius) {
//   return Math.PI * radius;
// }

// let radius = parseFloat(prompt("Enter radius of circle : "));

// document.write(`Radius : ${radius}<br>`);
// document.write(`Circumference : ${calcCircumference(radius)}<br>`);
// document.write(`Area : ${calcArea(radius)}<br>`); "these are all my code you have to change a little bit and but the output will be same "
