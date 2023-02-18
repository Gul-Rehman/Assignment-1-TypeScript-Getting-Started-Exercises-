var a = 5;
var b = 10;
// Test 1: is a equal to 5?
console.log("Is a equal to 5? I predict true.");
console.log(a == 5);
// Test 2: is b equal to 10?
console.log("Is b equal to 10? I predict true.");
console.log(b == 10);
// Test 3: is a not equal to b?
console.log("Is a not equal to b? I predict true.");
console.log(a != b);
// Test 4: is a greater than 2?
console.log("Is a greater than 2? I predict true.");
console.log(a > 2);
// Test 5: is b less than or equal to 10?
console.log("Is a less than b or a greater than 10? I predict true.");
console.log(a < b || a > 10);
// Test 6: is a less than b and a greater than 2?
console.log("Is a less than b and a greater than 2? I predict false.");
console.log(a < b && a > 10);
// Test 7: is a less than b or a greater than 10?
console.log("Is b less than or equal to 10? I predict false.");
console.log(b <= 6);
// Test 8: is the type of a number?
console.log("Is the type of a number? I predict false.");
console.log(typeof a != "number");
// Test 9: is the type of a string?
console.log("Is the type of a string? I predict false.");
console.log(typeof a == "string");
// Test 10: is a equal to "5"?
console.log("Is a equal to '5'? I predict false.");
console.log(typeof b == "string");
