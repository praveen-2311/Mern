// Creating an object
const person = {
    name: "Alice",
    age: 25,
    city: "Chennai"
};

// Accessing properties
console.log(person.name);       // Dot notation
console.log(person["age"]);     // Bracket notation

// Object methods
console.log(Object.keys(person));        // ['name', 'age', 'city']
console.log(Object.values(person));      // ['Alice', 25, 'Chennai']
console.log(Object.entries(person));     // [['name', 'Alice'], ['age', 25], ['city', 'Chennai']]
console.log(person.hasOwnProperty("age"));  // true

// Modifying object
person.job = "Engineer";
console.log(person);
