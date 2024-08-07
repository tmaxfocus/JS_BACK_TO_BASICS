//tipical object in javascript

const pencil = {
  length: "7.5 inches",
  shape: "hexagonal",
  diameter: "1/4 inch",
  write: () => console.log("writing..."),
  erase: () => console.log("erasing"),
  sharpen: () => console.log("sharpen"),
};

console.log(pencil.write());

const newPencil = { ...pencil };
console.log(newPencil);

//JavaScript has four ways to create objects from scratch:

//» Use object literal notation.
//» Use the new keyword.
//» Use Object.create().
//» Define a class.

//Making objects using literal notation
const person = { eyes: 2, feet: 2, eyeColor: "brown" };
// or You can also initialize an object as an empty object and use dot notation to add  properties to it afterward:
const person2 = {};
person2.hair = "black";
person2.hand = 2;
person2.fullName = { firstName: "lamont", lastName: "Rudnick" };

console.log("person 1", person);
console.log("person 2", person2);

//Making objects using a constructor  function

function Cat(name, type) {
  this.name = name;
  this.type = type;
}

const ourCat = new Cat("Dorito", "Fluffy lttle cat");

console.log("our cat => ", ourCat);

//Making objects with class
class Pet {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
}

const catClass = new Pet("zibuzzy", "red cate");

console.log(catClass);

//
//Making objects with Object.create() : The Object.create() method makes a new object and uses an existing object
//as the new object’s prototype.
const computer = { memory: "16GB", HD: "8TB" };
console.log("computer obj ==> ", computer);
const laptop = Object.create(computer);
console.log("laptop new object ==>", laptop);

//Modifying Objects
//Once you’ve created an object, you can access, modify, and add new properties
//using one of two methods: dot notation or square brackets notation.

//A object with nested properties
const myLocation = {
  city: {
    id: 2643743,
    name: "London",
    coord: {
      lon: -0.1258,
      lat: 51.5085,
    },
    country: "GB",
    population: 9820000,
    timezone: 3600,
  },
};
console.log("My current location", myLocation);
myLocation.city.coord.lat = 51.5088;
console.log("My updated location", myLocation);

//Using square brackets notation
console.log(myLocation["city"]);
console.log(myLocation.city["name"]);
console.log(myLocation["city"]["name"]);

//Printing out the properties of an object
for (const property in myLocation) {
  console.log(`${property}: ${myLocation[property]}`);
}

//Comparing and Copying Objects
const firstObject = { prop1: "test", prop2: "test2" };
const secondObject = { prop1: "test", prop2: "test2" };
console.log(firstObject === secondObject);
const thirdObject = secondObject;
thirdObject.prop1 = "orange";
console.log(thirdObject === secondObject);
console.log(secondObject.prop1 === thirdObject.prop1);
thirdObject.prop3 = "claw hammer";
console.log(thirdObject === secondObject);
console.log(secondObject.prop3);
console.log(firstObject.prop3);

//However, if you’re trying to create a new object from an existing object and you
//don’t want the new object to affect the original, you need to do the same thing
//I show you how to do in the Spreading Arrays
//
const fourthObject = { ...secondObject };
console.log(fourthObject === secondObject);

///Understanding Prototypes
function Vehicle(speed) {
  this.speed = speed;
  this.moveForward = function () {
    return `Moving forward at ${this.speed}`;
  };
}

const Automobile = new Vehicle(55);
Automobile.wheels = 4;
Automobile.engine = "electric";

const Truck = Object.create(Automobile);
Automobile.doors = 4;
console.log("Truck has its own property? ", Truck.hasOwnProperty("doors"));
Truck.doors = 2;
console.log("Truck has its own property? ", Truck.hasOwnProperty("doors"));

Truck.maxHaul = "1 ton";
Truck.hasOwnProperty("maxHaul");

//deleting object properties
delete Truck.doors;
