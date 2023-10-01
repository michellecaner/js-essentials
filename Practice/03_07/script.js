/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const bag = {
  name: "Daytime Bag",
  material: "canvas",
  color: "green",
  strap: true,
  strapLength: {
    left: 24,
    right: 24,
  },
  pocketNum: 5,
};

const purse = {
  name: "Evening Purse",
  material: "leather",
  color: "black",
  strap: false,
  pocketNum: 1,
};

console.log("The left strap length on my bag is", bag.strapLength.left);

console.log("My purse is", purse.color);
