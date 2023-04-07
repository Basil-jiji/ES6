var user = {
  firstName: "Basil",
  lastName: "Jiji",
  role: "Admin",
  loginCount: 6,
  facebookSignedIn: true,
};

// console.log(user);

// console.table(user);

console.log(user.firstName);
console.log(user["lastName"]);

user.loginCount = 36;
console.log(user.loginCount);
