var countries = ["India", "USA", "China", "Japan", "Korea"];

var states = new Array("Kerala", "Rajasthan", "Delhi", "Mumbai");

// console.log(states);

//Accessing elements in an array
console.log(states[1]);

//Array methods here method length
console.log(states.length);

//Replacing a value in an Array
states[0] = "Jaipur";
console.log(states);

//Deleteing an element with method pop (from the end)
states.pop();
states.pop();
console.log(states);

//Deleting element from the front
states.shift();
console.log(states);

//Adding elements from the first
states.unshift("NEW VALUE");
console.log(states);
