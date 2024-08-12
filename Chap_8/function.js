function addNumbers(num1, num2) {
  return num1 + num2;
}

console.log(addNumbers(1, 2));
///JavaScript contains these two types of built-in functions
//1. Top-level functions :Top-level functions are functions that aren’t part of an object.
//Boolean() Converts a non-Boolean value to Boolean
//Number() Converts a non-number value to a number
//String() Converts a non-string value to a string
//eval() Runs JavaScript code passed to it as a string
//uneval() Creates a string from source code passed to it
//isFinite() Determines whether the value passed to it is a finite number
//isNaN() Determines whether a value passed to it is NaN
//parseFloat() Converts a string to a floating-point number
//parseInt() Converts a string to an integer
//decodeURI() Decodes a string that has been encoded by encodeURI()
//decodeURIComponent() Decodes a string that has been encoded using encodeURIComponent()
//encodeURI() Replaces certain characters (for example, spaces, quotes, and slashes) in a
//string with escape sequences to create a valid Uniform Resource Identifier,
//which are the addresses used to locate web pages and other resources
//on the web
//encodeURIComponent() Does the same thing as encodeURI() (see the preceding entry) but encodes
//the whole string, whereas encodeURI() ignores the protocol prefix (such as
//Shttp://) and the domain name

//2. Using methods of built-in objects
//The objects that make JavaScript work all have methods built into them.
//In Chapter 4, you can read about methods like split() and trim() for working
//with strings. In reality, the full names of these methods are String.prototype.
//split() and String.prototype.trim().

//Other methods of built-in JavaScript objects can’t be called in this way, because
//they don’t operate on instances of the base object. Instead, they operate as utilities
//provided by the base object. These methods are called static methods.

//An example of a static method is the Number.parseInt() method. You can’t call
//Number.parseInt() on a variable or value, like this
console.log(Number.parseInt("35"));

//Passing by value
const favoriteFood = "tacos";

makeDinner(favoriteFood);

function makeDinner(whatToMake) {
  console.log(`I see you want ${whatToMake}`);
  whatToMake = "salad";
  console.log(`I've decided to make ${whatToMake} instead.`);
}

//Passing by reference
// Technically, everything in JavaScript is passed by value. However, when you pass
// an array or object to a function, remember that it’s not the values of the object or
// array that are copied into the function — it’s the object itself

//Passing an object to a function

const user = { username: "funguy37", password: "1245" };

const loginStatus = login(user);
console.log(loginStatus);
console.warn(`The password is now ${user.password}`);

function login(userCredentials) {
  if (userCredentials.password === "1245") {
    let mathRandom = Math.random();
    console.log("Random password", mathRandom);
    console.log("Radom math to string 30", mathRandom.toString(36));
    console.log("Slide math random", mathRandom.toString(36).slice(-16));
    let randomString = Math.random().toString(36).slice(-16);
    userCredentials.password = randomString;
    return `Terrible password. Your password has been reset to a random string.`;
  }

  return "Logged In";
}

//Writing Functions
function updatePageTitle(title) {
  document.title = title;
}

updatePageTitle("Welcome to my web page 2");

//Passing arguments
//When you call a function, you substitute values for the names in the parameter list. These values are called arguments. Arguments you pass into a function
//become variables inside the function with the names of the parameters.

//Using rest parameters

//If you don’t know how many arguments will be passed to a function when you call
//it, you can use a special parameter called a rest parameter.

//Creating a numbered list from any number of arguments
function sortList(orderBy, ...items) {
  let numberedList = "<ol>";
  for (let i = 0; i < items.length; i++) {
    numberedList += `<li>${arguments[i]}</li>`;
  }
  numberedList += "</ol>";
  return numberedList;
}
var list = sortList(
  "alphabetical",
  "James",
  "Robert",
  "John",
  "Michael",
  "David",
  "William"
);

console.log(list);
let shallowDoc = document.querySelector("#items");
let shallowDoc2 = document.querySelector("#items2");
shallowDoc.innerHTML = list;
//Passing functions as arguments

// Any value can be passed to a function as an argument, including other functions.
// When a function is passed to another function to be invoked by the function it’s
// passed to, the function that’s being passed is known as a callback function. The
// function you pass a callback function to is known as the outer function.
// Callback functions are used for adding functionality to functions or for telling the
// outer function what to do when it completes its work, as shown in Listing

//CALL BACK FUNCTION

function greetInSpanish(name) {
  return `Hola, ${name}`;
}

function getUserName(callback) {
  let firstName = prompt("Enter your first name");
  return callback(firstName);
}

//console.log(getUserName(greetInSpanish));

//Setting default parameters
function greetUser(firstName = "Valued", lastName = "Customer") {
  alert(`Hello, ${firstName} ${lastName}`);
}

//A function that takes an array

function makeUnorderdList(array = new Array()) {
  let listItems = array.map(function (element) {
    return `<li>${element}</li>`;
  });

  return `<ul>${listItems.join("")}</ul>`;
}

shallowDoc2.innerHTML = makeUnorderdList(["sodium", "Calcium"]);

//Function declaration scope and hoisting

// A function declaration can be located anywhere in your program, and it can be
// run from anywhere in its scope. A top-level function is one that’s not inside of any
// other block of code. Top-level functions can be called from anywhere in your program. A function that’s inside another function or block can be called only from
// within that function or block.

//Declaring Anonymous functions

function doSomething(callback) {}
doSomething(function () {
  console.log("done.");
});

//Defining function expressions
const convertMilesToKm = function (distanceInMiles) {
  const distanceInKM = distanceInMiles * 1.609;
  return distanceInKM;
};

console.log(convertMilesToKm(5));
//Conditionally defining a function using an expression
let water = true;
let distance = 30;
function getThere(distance) {
  let estimatedTripDuration;

  if (water === true) {
    const getSwimTime = function () {
      return distance / 2;
    };
    estimatedTripDuration = getSwimTime();
  } else {
    const getWalkingTime = function () {
      return distance / 4;
    };
    estimatedTripDuration = getWalkingTime();
  }

  return estimatedTripDuration;
}

console.log(`It will take ${getThere(distance)} hours to get there.`);

// Writing anonymous functions
// as arrow functions

const pickAMovie = function (choices) {
  let myPick = choices[Math.floor(Math.random() * choices.length)];
  return myPick;
};

const pickAMovie2 = (choices) => {
  let myPick = choices[Math.floor(Math.random() * choices.length)];
  return myPick;
};

const pickAMovie3 = (choices) =>
  choices[Math.floor(Math.random() * choices.length)];

const chooseMovie = (choices) => {
  return choices[Math.floor(Math.random() * choices.length)];
};
const displayMovieChoice = () => {
  const movieChoice = chooseMovie(movies);
  document.getElementById("movie-choice").innerHTML = movieChoice.title;
};

//Writing Methods
// A function inside an object is called a method. A method can access and modify the
// other properties of an object by using the this keyword
//Methods can be written the same way you write any other property, as in this
//example:
const myCar = {
  speed: 0,
  drive: function (speedLimit) {
    this.speed = speedLimit;
    console.log(`Sriving at ${this.speed}mph`);
  },
};

const myCarV2 = {
  speed: 0,
  drive(speedLimit) {
    this.speed = speedLimit;
    console.log(`Driving at ${this.speed}mph.`);
  },
};

//console.log(myCarV2.drive(35));

//Understanding Context and this

//A function without context
const myTruck = {
  speed: 0,
};
const _myCar = {
  speed: 0,
};

function drive(speedLimit) {
  this.speed = speedLimit;
  console.log(`Driving at ${this.speed}mph.`);
}

function drive(vehicle, speedLimit) {
  vehicle.speed = speedLimit;
  console.log(`Driving at ${vehicle.speed}mph.`);
}

//console.log(drive(myCar, 55));
//console.log(drive(myTruck, 55));

console.log("call", drive.call(_myCar, 65));

//_myCar.drive(90);

const driveMyCarOnFreeWay = drive.bind(_myCar, 60);

//console.log("bind => ", driveMyCarOnFreeWay);
//console.log("bind speed => ", driveMyCarOnFreeWay());

//Passing a function from one  object to another

const myNewCar = {
  speed: 0,
  operate(speedLimit, calback) {
    calback(speedLimit);
    console.log(`myCar is driving at ${this.speed} `);
  },
};

// this have acces to global spedd not spped in myNewCar object
function drive(speed) {
  this.speed = speed;
  console.log(`Start driving at ${this.speed}`);
  return this.speed;
}

myNewCar.operate(50, drive);

// here is the correction
const myNewCorrectCar = {
  speed: 0,
  operate(speedLimit, calback) {
    let boundCallback = calback.bind(this);
    boundCallback(speedLimit);
    console.log(`myCar is driving at ${this.speed} `);
  },
};

//
myNewCorrectCar.operate(70, drive);

//Passing a function to a child to  change the parent

const bookStore = {
  books: ["Ulysses", "The Great Gatsby"],

  displayBookStore() {
    const renderTarget = document.getElementById("bookstore");
    const bookList = this.books.map((book) => `<p>${book}`);
    renderTarget.innerHTML = bookList.join("");
  },

  removeBook(title) {
    let newList = this.books.filter((book) => book != title);
    this.books = newList;
  },
};
