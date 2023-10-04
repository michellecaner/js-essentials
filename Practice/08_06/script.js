/**
 * Practice: writing a function declaration, expression and arrow expression
 */

// create a basic function declaration
// make a change to an element in the DOM
// call the function declaration
function addDiv() {
  const newDiv = document.createElement("div");
  newDiv.classList.add("first");
  newDiv.innerHTML = `
  <h1>HELLO WORLD</h1>
  `;
  return newDiv;
}

const main = document.querySelector("main");
main.append(addDiv());

//create a basic function expression
// make a change to an element in the DOM
// call the function declaration
const addNextDiv = function () {
  const newerDiv = document.createElement("div");
  newerDiv.classList.add("second");
  newerDiv.innerHTML = `
  <h2>GOODNIGHT MOON</h2>
  `;
  return newerDiv;
};

main.append(addNextDiv());

//create an arrow function expression
// make a change to an element in the DOM
// call the function declaration
const addLastDiv = () => {
  const newestDiv = document.createElement("div");
  newestDiv.classList.add("third");
  newestDiv.innerHTML = `
  <h3>PARTY ON GARTH</h3>
  `;
  return newestDiv;
};
main.append(addLastDiv());
