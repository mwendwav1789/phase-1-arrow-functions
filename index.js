// 1) has a function expression called divide
const divide = function () {
  return 2000 / 100;
};

// 3) has an arrow function called square
const square = (num) => num * num;

// 5) has an arrow function called add
const add = (a, b) => a + b;

// Test cases

// Testing divide
console.log(divide()); // Output: 20

// Testing square
console.log(square(4)); // Output: 16
console.log(square(5)); // Output: 25

// Testing add
console.log(add(3, 4)); // Output: 7
console.log(add(10, 20)); // Output: 30
