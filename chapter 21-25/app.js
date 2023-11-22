// Chapter#21-25

// Q:01
// let firstName = prompt('Enter first name : ')
// let lastName = prompt('Enter last name : ')

// let fullName = firstName + ' ' + lastName;

// alert(`Welcome! ${fullName}`)

// Q:02
// let favouritePhoneModel = prompt('Enter your favourite mobile phone model : ')

// document.write(`My favourite phone is: ${favouritePhoneModel}<br>`)
// document.write(`Length of string: ${favouritePhoneModel.length}`)

// Q:03
// let word = 'Pakistani'

// document.write(`String: ${word}<br>`)
// document.write(`Index of 'n': ${word.indexOf('n')}`)

// Q:04
// let word = 'Hello World'

// document.write(`String: ${word}<br>`)
// document.write(`Last index of 'l': ${word.lastIndexOf('l')}`)

// Q:05
// let word = 'Pakistani'

// document.write(`String: ${word}<br>`)
// document.write(`Character at index 3: ${word.charAt(3)}`)

// Q:06
// let firstName = prompt('Enter first name : ')
// let lastName = prompt('Enter last name : ')

// let fullName = firstName.concat(' ', lastName);

// alert(`Welcome! ${fullName}`)

// Q:07
// let city = 'Hyderabad'

// document.write(`City: ${city}<br>`)
// document.write(`After replacement: ${city.replace('Hyder', 'Islam')}`)

// Q:08
// let message = 'Ali and Sami are best friends. They play cricket and football together.';

// document.write(`${message.replaceAll('and', '&')}`)

// Q:09
// let num = '472'

// document.write(`Value: ${num}<br>`)
// document.write(`Type: ${typeof num}<br>`)
// num = Number(num)
// document.write(`Value: ${num}<br>`)
// document.write(`Type: ${typeof num}`)

// Q:10
// userInput = prompt('Enter some input : ')

// document.write(`User input: ${userInput}<br>`)
// document.write(`Upper case: ${userInput.toUpperCase()}`)

// Q:11
// userInput = prompt('Enter some input : ')

// document.write(`User input: ${userInput}<br>`)
// document.write(`Title case: ${userInput.charAt(0).toUpperCase() + userInput.slice(1)}`)

// Q:12
// let num = 35.36

// document.write(`Number: ${num}<br>`)
// stringNum = String(num)
// document.write(`Result: ${stringNum.replace('.', '')}`)

// Q:13
// userName = prompt('Enter user name : ')
// let flag = false

// for(let i in userName){
//     for(let j of [33, 44, 46, 64]){
//         if(userName.charAt(i).charCodeAt(0) === j){
//             alert('Please enter a valid username')
//             flag = true
//             break
//         }
//     }
//     if(flag) break;
// }

// Q:14
// const items = ["cake", "apple pie", "cookie", "chips", "patties"]
// let userInput = prompt('Welcome to ABC Bakery. What do you want to order sir/ma\'am?')

// let flag = false
// for(let item in items){
//     if(items[item] === userInput){
//         document.write(`${items[item]} is available at index ${item} in our bakery`)
//         flag = true
//         break
//     }
// }

// if(!flag){
//     document.write(`We are sorry. ${items[item]} is not available in our bakery`)
// }

// Q:15
// let password = prompt('Enter your password : ')

// let firstChar = password.charAt(0).charCodeAt();
// let flag = true;

// if (!(firstChar >= 48 && firstChar <= 57) && password.length > 5){
//     for(let i = 0; i < password.length; i++){
//         code = password.charAt(i).charCodeAt();
//         if (!(code >= 48 && code <= 57) && !(code >= 65 && code <= 90) && !(code >= 97 && code <= 122)){
//             flag = false
//         }
//     }
// }
// else {
//     flag = false;
//     if (password.length < 6) alert('Length cannot be less than 6')
//     if (firstChar >= 48 && firstChar <= 57) alert('First letter cannot be a number')
// }

// if(flag) alert('Valid Password')
// else alert('Invalid Password')

// Q:16
// let university = 'University of Karachi';

// for(let character of university.split('')){
//     document.write(`${character} <br>`);
// }

// Q:17
// let userInput = prompt('Enter your input : ');
// document.write(`User input: ${userInput}<br>`)
// document.write(`Last character of input: ${userInput.charAt(userInput.length - 1)}`)

// Q:18
// let text = 'The quick brown fox jumps over the lazy dog';
// let count = 0;

// for(let i = 0; i <= text.length; i++){
//     if((text.charAt(i) == 't' || text.charAt(i) == 'T') && (text.charAt(i+1) == 'h' || text.charAt(i+1) == 'H') && (text.charAt(i+2) == 'e' || text.charAt(i+2) == 'E')) {
//         count++;
//     }
// }

// document.write(`Text: ${text}<br>`)
// document.write(`There are ${count} occurence(s) of the word 'the'`)