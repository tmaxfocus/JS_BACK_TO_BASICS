const ingredients = [
  "eggs",
  "milk",
  "cheese",
  "garlic",
  "onion",
  "kale",
  "salt",
  "pepper",
];

console.log("ingredient pop : " + ingredients.pop());
console.log("pop result : " + ingredients);

console.log("ingrdient push  : " + ingredients.push("Red onion"));
console.log("push result : " + ingredients);

console.log("ingrdient shift  : " + ingredients.shift());
console.log("shift result : " + ingredients);

console.log("ingrdient unshift  : " + ingredients.unshift());
console.log("unshift result : " + ingredients);

console.log("ingrdient slice  : " + ingredients.slice(3));
console.log("slice result : " + ingredients);

console.log("ingrdient splice  : " + ingredients.splice(3));
console.log("splice result : " + ingredients);

let listItems = ingredients
  .map((singleIngredient) => `<li>${singleIngredient}</li>`)
  .join("");
document.getElementById("ingredients").innerHTML = listItems;

//Filtering arrays
const animalNames = [
  "aardvark",
  "alligator",
  "alpaca",
  "bear",
  "beaver",
  "cat",
  "dog",
  "elephant",
];

const animalsStartingWithA = animalNames.filter((animal) =>
  animal.startsWith("a")
);

console.log(animalsStartingWithA);

//Destructuring Arrays
const person = ["Russell C. Guy", "3447 Twin House Lane", "Neosho", "MO"];
let [personName, address, city, state] = person;
console.log(personName, address, city, state);

//spread arrays
const firstArray = ["a", "b", "c"];
const secondArray = [...firstArray, "d"];
console.log(secondArray);
