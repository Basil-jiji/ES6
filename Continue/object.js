//Objects in a functional way - ( HERE CREATING A Prototype)
//new keyword

var User = function (firstName, courseCount) {
  this.firstName = firstName;
  this.courseCount = courseCount;
  this.getCourseCount = function () {
    console.log(`Course count is : ${this.courseCount}`);
  };
};

var basil = new User("basil", 5);
console.log(basil);

var john = new User("john", 10);
console.log(john);

