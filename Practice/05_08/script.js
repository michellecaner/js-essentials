/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at adding, removing, or modifying
 * attributes, classes, and inline styles on elements.
 */
document.querySelector(".site-title").classList.add("another-class");

document.querySelector(".site-title").classList.remove("site-title");

document
  .querySelector("#pack01 .backpack__image img")
  .setAttribute("alt", "Image of everyday backpack.");

document.querySelector(".backpack__name").style.color = "red";

document
  .querySelector("#pack02 .backpack__image img")
  .setAttribute(
    "src",
    "https://i.ebayimg.com/images/g/lBUAAOSwlMxhwLV7/s-l500.jpg"
  );
