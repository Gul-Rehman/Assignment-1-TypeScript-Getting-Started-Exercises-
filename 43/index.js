var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Original array of magicians
var magicians = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];
// Function to show magicians
function show_magicians(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
// Function to modify the array of magicians
function make_great(magicians) {
    var great_magicians = [];
    for (var i = 0; i < magicians.length; i++) {
        great_magicians.push("The Great ".concat(magicians[i]));
    }
    return great_magicians;
}
// Call make_great with a copy of the original array
var great_magicians = make_great(__spreadArray([], magicians, true));
// Show the original array and the modified array
console.log("Original magicians:");
show_magicians(magicians);
console.log("\nGreat magicians:");
show_magicians(great_magicians);
