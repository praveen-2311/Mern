const nums = [1, 2, 3, 4, 5];

// map
const squared = nums.map(n => n * n);
console.log(squared); // [1, 4, 9, 16, 25]

// filter
const even = nums.filter(n => n % 2 === 0);
console.log(even); // [2, 4]

// join
const joined = nums.join("-");
console.log(joined); // "1-2-3-4-5"
