// Tests for equality and inequality with strings
var str1 = "hello";
var str2 = "world";
var str3 = "hello";
console.log("Is str1 equal to str2? I predict false.");
console.log(str1 == str2);
console.log("Is str1 not equal to str2? I predict true.");
console.log(str1 != str2);
console.log("Is str1 equal to str3? I predict true.");
console.log(str1 == str3);
console.log("Is str1 not equal to str3? I predict false.");
console.log(str1 != str3);
// Tests using the lower case function
var word1 = "Apple";
var word2 = "banana";
console.log("Is word1 lowercase? I predict false.");
console.log(word1.toLowerCase() == word1);
console.log("Is word2 lowercase? I predict true.");
console.log(word2.toLowerCase() == word2);
// Numerical tests
var num1 = 5;
var num2 = 10;
console.log("Is num1 less than num2? I predict true.");
console.log(num1 < num2);
console.log("Is num1 greater than or equal to num2? I predict false.");
console.log(num1 >= num2);
console.log("Is num2 greater than 10? I predict false.");
console.log(num2 > 10);
console.log("Is num1 less than or equal to 5? I predict true.");
console.log(num1 <= 5);
// Tests using "and" and "or" operators
var age = 25;
var isStudent = true;
console.log("Is age greater than 18 and isStudent true? I predict true.");
console.log(age > 18 && isStudent);
console.log("Is age less than 18 or isStudent false? I predict false.");
console.log(age < 18 || !isStudent);
// Test whether an item is in a array
var fruits = ["apple", "banana", "cherry"];
console.log("Is 'banana' in the array? I predict true.");
console.log(fruits.includes("banana"));
// Test whether an item is not in a array
console.log("Is 'pear' not in the array? I predict true.");
console.log(!fruits.includes("pear"));
