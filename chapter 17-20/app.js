
// Chapter#17-20

// Q:01
// let arr = [[], [], []]

// Q:02
// let arr = [
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1]
// ]

// Q:03
// for(var i = 1; i <= 10; i++){
//     document.write(i + '<br>')
// }

// Q:04
// var table = Number(prompt('Enter a number to show its multiplcation table : '))
// var length = Number(prompt('Enter length of table : '))
// document.write(`<h1>TABLE OF : ${table}</h1><br>`)
// for(var i = 1; i <= length; i++){
//     document.write(`${table} x ${i} = ${table * i}<br>`)
// }

// Q:05
// var fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry']
// for (var i = 0; i < fruits.length; i++){
//     document.write(`${fruits[i]}<br>`)
// }
// document.write('<br>')
// for (var i = 0; i < fruits.length; i++){
//     document.write(`Element at index ${i} is ${fruits[i]}<br>`)
// }

// Q:06
// document.write(`Counting:<br>`)
// for (var i = 1; i <= 15; i++){
//         document.write(`${i},`)
// }
// document.write(`<br><br>`)
// document.write(`Reverse Counting:<br>`)
// for (var i = 10; i >= 1; i--){
//     document.write(`${i},`)
// }
// document.write(`<br><br>`)
// document.write(`Even :<br>`)
// for (var i = 0; i <= 20; i++){
//     if (i % 2 === 0) document.write(`${i},`)
// }
// document.write(`<br><br>`)
// document.write(`Odd :<br>`)
// for (var i = 0; i <= 20; i++){
//     if (i % 2 === 1) document.write(`${i},`)
// }
// document.write(`<br><br>`)
// document.write(`Series :<br>`)
// for (var i = 2; i <= 20; i++){
//     if (i % 2 === 1) document.write(`${i}k,`)
// }


// Q:07
// var bakery = ['cake', 'apple pie', 'cookie', 'chips', 'patties']
// var order = prompt('Welcome to ABC Bakery. What do you want to order : ')
// var flag = false
// for (var i = 0; i < bakery.length; i++){
//     if (bakery[i] === order.toLowerCase()){
//         document.write(`${bakery[i]} is available at index ${i} in our bakery`)
//         flag = true;
//         break;
//     }
// }
// if (!flag) {
//     document.write(`We are sorry. ${order} is not available at our bakery`)
// }

// Q:08
// var num = [24, 53, 78, 91, 12]
// document.write(`Array items: ${num} <br>`)
// var max = num[0]
// var i = 0
// while (i < num.length){
//     if (max < num[i]) max = num[i];
//     i++; 
// }
// document.write(`The largest number is ${max}`)

// Q:09
// var num = [24, 53, 78, 91, 12]
// document.write(`Array items: ${num} <br>`)
// var min = num[0]
// var i = 0
// while (i < num.length){
//     if (min > num[i]) min = num[i];
//     i++; 
// }
// document.write(`The smallest number is ${min}`)

// Q:10
// for (var i = 5; i <= 100; i += 5){
//     document.write(`${i}, `)
//     console.log(`${i}, `)
// }