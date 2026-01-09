import { player } from "./class.js";
const rakib = new player('Rakib Al Hasan', 33, "bd");
// console.log(rakib);
//now we will practice interface
function drawRectangle(options) {
    let width = options.width;
    let length = options.length;
    console.log(width * length);
}
// drawRectangle({width: 30, length: 40,height: 30})
// here the height will not take this, we send the reference of the object
//# sourceMappingURL=class2.js.map