// Tests for equality and inequality with strings
let str1: string = "hello";
let str2: string = "world";
let str3: string = "hello";

console.log("Is str1 equal to str2? I predict false.");
console.log(str1 == str2);

console.log("Is str1 not equal to str2? I predict true.");
console.log(str1 != str2);

console.log("Is str1 equal to str3? I predict true.");
console.log(str1 == str3);

console.log("Is str1 not equal to str3? I predict false.");
console.log(str1 != str3);

// Tests using the lower case function
let word1: string = "Apple";
let word2: string = "banana";

console.log("Is word1 lowercase? I predict false.");
console.log(word1.toLowerCase() == word1);

console.log("Is word2 lowercase? I predict true.");
console.log(word2.toLowerCase() == word2);

// Numerical tests
let num1: number = 5;
let num2: number = 10;

console.log("Is num1 less than num2? I predict true.");
console.log(num1 < num2);

console.log("Is num1 greater than or equal to num2? I predict false.");
console.log(num1 >= num2);

console.log("Is num2 greater than 10? I predict false.");
console.log(num2 > 10);

console.log("Is num1 less than or equal to 5? I predict true.");
console.log(num1 <= 5);

// Tests using "and" and "or" operators
let age: number = 25;
let isStudent: boolean = true;

console.log("Is age greater than 18 and isStudent true? I predict true.");
console.log(age > 18 && isStudent);

console.log("Is age less than 18 or isStudent false? I predict false.");
console.log(age < 18 || !isStudent);

// Test whether an item is in a array
let fruits: string[] = ["apple", "banana", "cherry"];

console.log("Is 'banana' in the array? I predict true.");
console.log(fruits.includes("banana"));

// Test whether an item is not in a array
console.log("Is 'pear' not in the array? I predict true.");
console.log(!fruits.includes("pear"));