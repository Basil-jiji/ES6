var name = "basil";
console.log("Line number 2", name);

function sayName() {
  var name = "Mr.B";
  console.log("Line number 5", name);
  sayNameTwo();
  function sayNameTwo() {
    console.log("Line number 9", name);
  }
}

sayName();

/* In scope chaining if a variable has not value inside a function it will ask
the value from above it */
