const numbers = [1, 2, 3, 4, 5];

console.log(numbers[10]); // intentionally wrong index

// This should result in an "Index out of range" error in the console   

// To fix the error, we can access only the indices that are within the array bounds
console.log(numbers[2]); // this will work
