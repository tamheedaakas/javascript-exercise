// Chapter#26-30

// Q:01 & Q:02
// let num = parseFloat(prompt('Enter a positive integer : '));

// document.write(`number : ${num}<br>`);
// document.write(`round off value : ${Math.round(num)}<br>`);
// document.write(`floor value : ${Math.floor(num)}<br>`);
// document.write(`ceil value : ${Math.ceil(num)}`);

// Q:03
// let num = parseInt(prompt('Enter a positive integer : '));

// document.write(`The absolute value of ${num} is ${Math.abs(num)}<br>`);

// Q:04
// document.write(`random dice value : ${Math.floor(Math.random() * 6) + 1}<br>`);

// Q:05
// let coinValue = Math.floor(Math.random() * 2) + 1;

// document.write(`${coinValue}<br>random coin value : ${coinValue == 1 ? 'Tails' : 'Heads'}`);

// Q:06
// document.write(`random number between 1 and 100 : ${Math.floor(Math.random() * 100) + 1}<br>`);

// Q:07
// let weight = prompt('Enter your weight in kilograms : ');

// let numWeight = '';
// for(i of weight){
//     if(i.charCodeAt(0) > 47 && i.charCodeAt(0) < 58){
//         numWeight += i;
//     }
// }

// document.write(`The Weight Of User is ${numWeight} kilograms<br>`);

// Q:08
// let secret = Math.floor(Math.random() * 10) + 1;
// let userInput = -1;

// while(userInput !== secret){
//     userInput = parseInt(prompt('Enter a number between 1 and 10'));
//     if(userInput !== secret) alert('Try Again');
//     else alert('Congratulations!');
// }