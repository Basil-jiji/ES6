//Basic function
function sayHello() {
  console.log("Hello Bruh");
}

sayHello();

//Function with parameter
function hello(name) {
  console.log(`Helloo ${name}`);
}

hello("John");

//A return function
function withReturn() {
  return "Hello there Johnny";
}
console.log(withReturn());

//Storing function to a variable
var greeting = withReturn();
console.log(greeting);
