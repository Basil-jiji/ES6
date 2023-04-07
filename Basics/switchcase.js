var user = "user";

switch (user) {
  case "admin":
    console.log("Get full access");
    break;
  case "subadmin":
    console.log("Get access to create and delete courses");
    break;
  case "testprep":
    console.log("Get access to tests");
    break;
  case "user":
    console.log("Get access to contents");
    break;
  default:
    console.log("Trial user");
    break;
}
