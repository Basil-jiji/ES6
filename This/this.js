//For all Regular function calls, this points to the Window Object

var user = {
  firstName: "Hitesh",
  courseCount: 4,
  getCourseCount: function () {
    console.log("LINE 7", this);
    function sayHello() {
      console.log("LINE 9", this);
    }
    sayHello(); //Regular function call inside an Object points to Window object
  },
};
user.getCourseCount();
