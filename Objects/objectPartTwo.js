var user = {
  firstName: "Basil",
  lastName: "Jiji",
  role: "Admin",
  loginCount: 6,
  facebookSignedIn: true,
  courseList: [],
  buyCourse: function (courseName) {
    this.courseList.push(courseName);
  },
  getCourseCount: function () {
    return `${this.firstName} is enrolled in total no of ${this.courseList.length}courses`;
  },
  info: function () {
    if (this.facebookSignedIn == true) {
      this.facebookSignedIn = "facebook";
    }
    return `${this.firstName + this.lastName} has a role 
    ${this.role} and have a login count of 
    ${this.loginCount} and is being loggin from 
    ${this.facebookSignedIn} which has having a number of courses enrolled 
    ${this.courseList}`;
  },
};

var courseList = true;
console.log(user.firstName);
console.log(user.getCourseCount());
user.buyCourse("React JS Course");
user.buyCourse("Angular Course");
console.log(user.getCourseCount());
console.log(user.info());
