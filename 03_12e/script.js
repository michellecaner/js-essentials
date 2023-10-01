/**
 * Create a class for the Couch object type.
 */

import Couch from "./couch.js";

const livingRoomCouch = new Couch("Living Room Couch", 5, "Grey", 4, 10, false);

console.log("The color of the Living Room Couch is:", livingRoomCouch.color);
// console.log("The color of the Living Room Couch is:", livingRoomCouch.color);

console.log(livingRoomCouch.addExtraPillows(true));
console.log(livingRoomCouch.extraPillows);
