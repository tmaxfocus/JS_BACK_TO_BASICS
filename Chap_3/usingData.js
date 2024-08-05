let seven = 7;

let eight = 8;

let sym = seven + eight;

console.log(sym);

// let firstNumber = prompt("Pick a number");

// let secondNumber = prompt("Pick another number");

// let sum = Number.parseInt(firstNumber) + Number.parseInt(secondNumber);

// alert(sum);

let orderTotal = 39.99;
let itemPurchased = "javascript All-In-One For Dummies";
let customer = "Joe Q. Developer";

let thankYou = `${customer}, thank you for your order of ${itemPurchased}. Your payment of ${orderTotal} was successful.`;

console.log(thankYou);

// Working with string functions

//charAt tells you the character at a specified position (starting with position 0):
let randomLetters = "pdfsdj";
console.log(randomLetters.charAt(4));

//concat combines two or more strings and returns the result:

let houseNumber = "555";
let streetName = "Shady Lane";

console.log(houseNumber.concat(" ", streetName));

//indexOf searches your string and returns the position of the first occurrence
//of the character or string you specify:

let typeOfTree = "Pine";
console.log(typeOfTree.indexOf("e"));

// Split splits strings into arrays of substring
let vowelLists = "a,e,i,o,u";

console.log(vowelLists.split(","));

//substring extracts the characters within a string between two specified
//positions. If the first number is larger than the second, substring reverses them

let phoneNumber = "313-555-1234";
console.log(phoneNumber.substring(12, 4));

console.log(phoneNumber.slice(4, 12));

//replace finds a string and replaces it with another string

let message = "Learn FORTRAN.";
console.log(message.replace("FORTRAN", "JAVASCRIPT"));

//toLowerCase returns a string with all the characters converted to lowercase:

let username = "ChrisMinnick";

console.log(username.toLocaleLowerCase());

console.log(username.toUpperCase());
