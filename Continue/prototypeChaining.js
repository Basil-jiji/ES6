var User = function (firstName, courseCount) {
  this.firstName = firstName;
  this.courseCount = courseCount;
  this.getCourseCount = function () {
    console.log(`Course count is : ${this.courseCount}`);
  };
};

User.prototype.getFirstName = function () {
  console.log(`You First name is : ${this.firstName}`);
};
var basil = new User("basil", 5);
basil.getCourseCount();
basil.getFirstName();
// console.log(basil.firstName);
//   console.log(basil);

var john = new User("john", 10);
john.getFirstName();
//   console.log(john);
