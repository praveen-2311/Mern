const numbers = [10, 20, 30, 40];

// Accessing
console.log(numbers[1]); // 20

// Common methods
numbers.push(50);
numbers.pop();
numbers.shift();
numbers.unshift(5);

console.log(numbers); // [5, 10, 20, 30]

// More array methods
console.log(numbers.includes(20)); // true
console.log(numbers.indexOf(30)); // 3
console.log(numbers.slice(1, 3)); // [10, 20]
console.log(numbers.splice(2, 1)); // removes 20

console.log(numbers);
